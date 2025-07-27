import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<PassedTestListApiResponse> => {
  const config = useRuntimeConfig()
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
    
    // Получаем все прохождения тестов пользователя
    const passedTestsSnapshot = await db.collection('passedTests')
      .where('userId', '==', session.user.id)
      .orderBy('createdAt', 'desc')
      .get()

    const passedTests: PassedTest[] = []
    
    for (const doc of passedTestsSnapshot.docs) {
      const passedTest = doc.data() as PassedTest
      passedTests.push(passedTest)
    }

    return {
      success: true,
      data: passedTests,
      message: 'User tests retrieved successfully'
    }

  } catch (error) {
    console.error('Error fetching user tests:', error)
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch user tests'
    }
  }
}) 