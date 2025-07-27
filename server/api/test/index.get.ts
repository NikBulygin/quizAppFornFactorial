import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestListApiResponse> => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  
  const isTestMode = query.test === 'true'
  
  if (isTestMode) {
    return {
      success: true,
      data: [
        {
          id: 'test-1',
          title: 'Sample Test 1',
          description: 'This is a sample test',
          image: 'https://via.placeholder.com/300x200',
          deadline: '2024-12-31T23:59:59Z',
          timeLimit: 60,
          randomizeQuestions: true,
          randomizeAnswers: false,
          difficultyDistribution: { easy: 40, medium: 50, hard: 10 },
          sections: [],
          questions: [],
          authorId: 'test-user',
          tags: ['sample', 'demo'],
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z'
        }
      ],
      message: 'Test mode: Tests retrieved successfully'
    }
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const testsSnapshot = await db.collection('tests').get()

    const tests: Test[] = []
    for (const doc of testsSnapshot.docs) {
      const testData = doc.data() as Test
      
      const questionsSnapshot = await db.collection('questions')
        .where('testId', '==', testData.id)
        .get()
      
      const sectionsSnapshot = await db.collection('sections')
        .where('testId', '==', testData.id)
        .get()

      const questions: TestQuestion[] = []
      questionsSnapshot.forEach(questionDoc => {
        const questionData = questionDoc.data()
        delete questionData.testId
        questions.push(questionData as TestQuestion)
      })

      const sections: TestSection[] = []
      sectionsSnapshot.forEach(sectionDoc => {
        const sectionData = sectionDoc.data()
        delete sectionData.testId
        sections.push(sectionData as TestSection)
      })

      tests.push({
        ...testData,
        questions,
        sections
      })
    }

    return {
      success: true,
      data: tests,
      message: 'Tests retrieved successfully'
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to retrieve tests'
    }
  }
}) 