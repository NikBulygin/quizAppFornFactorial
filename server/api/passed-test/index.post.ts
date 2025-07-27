import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<PassedTestApiResponse> => {
  const config = useRuntimeConfig()
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
    const { testId } = body

    const testDoc = await db.collection('tests').doc(testId).get()
    if (!testDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Test not found'
      })
    }

    const existingPassedTest = await db.collection('passedTests')
      .where('testId', '==', testId)
      .where('userId', '==', session.user.id)
      .where('status', '==', 'in_progress')
      .get()

    if (!existingPassedTest.empty) {
      const existingTest = existingPassedTest.docs[0].data() as PassedTest
      return {
        success: true,
        data: existingTest,
        message: 'Existing test session found'
      }
    }

    const passedTestData: PassedTest = {
      id: `passed-test-${Date.now()}`,
      testId,
      userId: session.user.id,
      status: 'in_progress',
      startTime: new Date().toISOString(),
      timeSpent: 0,
      userAnswers: {},
      totalScore: 0,
      maxScore: 0,
      percentage: 0,
      isPassed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    await db.collection('passedTests').doc(passedTestData.id).set(passedTestData)

    return {
      success: true,
      data: passedTestData,
      message: 'Test session started successfully'
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to start test'
    }
  }
}) 