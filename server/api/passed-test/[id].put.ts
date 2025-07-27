import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<PassedTestApiResponse> => {
  const config = useRuntimeConfig()
  const { id } = getRouterParams(event)
  const body = await readBody(event)
  const session = await getUserSession(event)
  
  if (!session.user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const passedTestRef = db.collection('passedTests').doc(id as string)
    
    const passedTestDoc = await passedTestRef.get()
    if (!passedTestDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Passed test not found'
      })
    }

    const passedTest = passedTestDoc.data() as PassedTest
    
    if (passedTest.userId !== session.user.id) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden'
      })
    }

    if (body.status === 'completed') {
      const testDoc = await db.collection('tests').doc(passedTest.testId).get()
      if (!testDoc.exists) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Test not found'
        })
      }

      const test = testDoc.data() as Test
      
      const questionsSnapshot = await db.collection('questions')
        .where('testId', '==', passedTest.testId)
        .get()

      const questions: TestQuestion[] = []
      questionsSnapshot.forEach(doc => {
        const questionData = doc.data()
        delete questionData.testId
        questions.push(questionData as TestQuestion)
      })

      let totalScore = 0
      let maxScore = 0

      questions.forEach(question => {
        maxScore += question.points
        const userAnswer = body.userAnswers?.[question.id]
        
        if (userAnswer && question.correctAnswerIds) {
          const isCorrect = userAnswer.answerIds.length === question.correctAnswerIds.length &&
            userAnswer.answerIds.every(answerId => question.correctAnswerIds.includes(answerId))
          
          if (isCorrect) {
            totalScore += question.points
          }
        }
      })

      const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
      const isPassed = percentage >= 60 // Порог прохождения 60%

      const updateData = {
        ...body,
        endTime: new Date().toISOString(),
        totalScore,
        maxScore,
        percentage,
        isPassed,
        updatedAt: new Date().toISOString()
      }

      await passedTestRef.update(updateData)

      const updatedDoc = await passedTestRef.get()
      const updatedPassedTest = updatedDoc.data() as PassedTest

      return {
        success: true,
        data: updatedPassedTest,
        message: 'Test completed successfully'
      }
    } else {
      const updateData = {
        ...body,
        updatedAt: new Date().toISOString()
      }

      await passedTestRef.update(updateData)

      const updatedDoc = await passedTestRef.get()
      const updatedPassedTest = updatedDoc.data() as PassedTest

      return {
        success: true,
        data: updatedPassedTest,
        message: 'Test updated successfully'
      }
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update test'
    }
  }
}) 