import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export async function checkExpiredTests() {
  try {
    const config = useRuntimeConfig()
    
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const now = new Date()
    
    console.log('🕐 Checking for expired tests...', now.toISOString())

    // Получаем все тесты в процессе
    const inProgressTests = await db.collection('passedTests')
      .where('status', '==', 'in_progress')
      .get()

    let expiredCount = 0

    for (const doc of inProgressTests.docs) {
      const passedTest = doc.data() as PassedTest
      const startTime = new Date(passedTest.startTime)
      
      // Получаем информацию о тесте для проверки timeLimit
      const testDoc = await db.collection('tests').doc(passedTest.testId).get()
      if (!testDoc.exists) continue

      const test = testDoc.data() as Test
      const timeLimitMs = (test.timeLimit || 60) * 60 * 1000 // конвертируем минуты в миллисекунды
      const elapsedTime = now.getTime() - startTime.getTime()

      // Проверяем, истекло ли время
      if (elapsedTime > timeLimitMs) {
        console.log(`⏰ Test ${passedTest.id} expired. Elapsed: ${Math.round(elapsedTime / 1000 / 60)}min, Limit: ${test.timeLimit}min`)
        
        // Получаем вопросы для вычисления результатов
        const questionsSnapshot = await db.collection('questions')
          .where('testId', '==', passedTest.testId)
          .get()

        const questions: TestQuestion[] = []
        questionsSnapshot.forEach(questionDoc => {
          const questionData = questionDoc.data()
          delete questionData.testId
          questions.push(questionData as TestQuestion)
        })

        // Вычисляем результаты на основе текущих ответов
        let totalScore = 0
        let maxScore = 0

        questions.forEach(question => {
          maxScore += question.points
          const userAnswer = passedTest.userAnswers?.[question.id]
          
          if (userAnswer && question.correctAnswerIds) {
            const isCorrect = userAnswer.answerIds.length === question.correctAnswerIds.length &&
              userAnswer.answerIds.every((answerId: string) => question.correctAnswerIds.includes(answerId))
            
            if (isCorrect) {
              totalScore += question.points
            }
          }
        })

        const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
        const isPassed = percentage >= 60

        // Обновляем статус теста
        await doc.ref.update({
          status: 'completed',
          endTime: now.toISOString(),
          timeSpent: Math.floor(elapsedTime / 1000),
          totalScore,
          maxScore,
          percentage,
          isPassed,
          updatedAt: now.toISOString()
        })

        expiredCount++
      }
    }

    console.log(`✅ Expired tests check completed. ${expiredCount} tests marked as completed.`)
    return expiredCount

  } catch (error) {
    console.error('❌ Error checking expired tests:', error)
    throw error
  }
}

// Функция для запуска проверки по расписанию
export function startTestTimeoutChecker() {
  // Проверяем каждый час
  const CHECK_INTERVAL = 60 * 60 * 1000 // 1 час в миллисекундах
  
  console.log('🚀 Starting test timeout checker...')
  
  // Первая проверка через 1 минуту после запуска
  setTimeout(async () => {
    try {
      await checkExpiredTests()
    } catch (error) {
      console.error('Failed to run initial test timeout check:', error)
    }
  }, 60 * 1000)

  // Затем проверяем каждый час
  setInterval(async () => {
    try {
      await checkExpiredTests()
    } catch (error) {
      console.error('Failed to run scheduled test timeout check:', error)
    }
  }, CHECK_INTERVAL)
} 