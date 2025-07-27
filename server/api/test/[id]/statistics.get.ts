import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestStatisticsApiResponse> => {
  const config = useRuntimeConfig()
  const { id } = getRouterParams(event)
  
  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    
    // Получаем все прохождения данного теста
    const passedTestsSnapshot = await db.collection('passedTests')
      .where('testId', '==', id)
      .where('status', '==', 'completed')
      .get()

    const passedTests: PassedTest[] = []
    passedTestsSnapshot.forEach(doc => {
      passedTests.push(doc.data() as PassedTest)
    })

    if (passedTests.length === 0) {
      return {
        success: true,
        data: {
          testId: id as string,
          totalAttempts: 0,
          passedAttempts: 0,
          averageScore: 0,
          averageTime: 0,
          bestScore: 0,
          worstScore: 0,
          completionRate: 0
        },
        message: 'No completed tests found'
      }
    }

    // Вычисляем статистику
    const totalAttempts = passedTests.length
    const passedAttempts = passedTests.filter(test => test.isPassed).length
    const averageScore = Math.round(
      passedTests.reduce((sum, test) => sum + test.percentage, 0) / totalAttempts
    )
    const averageTime = Math.round(
      passedTests.reduce((sum, test) => sum + test.timeSpent, 0) / totalAttempts
    )
    const bestScore = Math.max(...passedTests.map(test => test.percentage))
    const worstScore = Math.min(...passedTests.map(test => test.percentage))
    const completionRate = Math.round((passedAttempts / totalAttempts) * 100)

    const statistics: TestStatistics = {
      testId: id as string,
      totalAttempts,
      passedAttempts,
      averageScore,
      averageTime,
      bestScore,
      worstScore,
      completionRate
    }

    return {
      success: true,
      data: statistics,
      message: 'Test statistics retrieved successfully'
    }

  } catch (error) {
    console.error('Error fetching test statistics:', error)
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch test statistics'
    }
  }
}) 