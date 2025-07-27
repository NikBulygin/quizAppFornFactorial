import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestApiResponse> => {
  const config = useRuntimeConfig()
  const { id } = getRouterParams(event)
  const query = getQuery(event)
  
  const isTestMode = query.test === 'true'
  
  if (isTestMode) {
    return {
      success: true,
      data: {
        id: id as string,
        title: 'Test Quiz',
        description: 'This is a test quiz for development',
        image: 'https://via.placeholder.com/300x200',
        deadline: '2024-12-31T23:59:59Z',
        timeLimit: 60,
        randomizeQuestions: true,
        randomizeAnswers: false,
        difficultyDistribution: { easy: 40, medium: 50, hard: 10 },
        sections: [
          {
            id: 'section-1',
            title: 'Basic Questions',
            description: 'Fundamental concepts',
            questions: ['question-1', 'question-2'],
            questionCount: 5
          }
        ],
        questions: [
          {
            id: 'question-1',
            title: 'What is 2 + 2?',
            description: 'Basic arithmetic',
            difficulty: 'easy',
            points: 1,
            answers: [
              { id: 'answer-1', text: '3' },
              { id: 'answer-2', text: '4' },
              { id: 'answer-3', text: '5' }
            ],
            correctAnswerIds: ['answer-2']
          }
        ],
        authorId: 'test-user',
        tags: ['math', 'basic', 'arithmetic'],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      message: 'Test mode: Test retrieved successfully'
    }
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const testDoc = await db.collection('tests').doc(id as string).get()

    if (!testDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Test not found'
      })
    }

    const testData = testDoc.data() as Test

    const questionsSnapshot = await db.collection('questions')
      .where('testId', '==', id)
      .get()
    
    const sectionsSnapshot = await db.collection('sections')
      .where('testId', '==', id)
      .get()

    const questions: TestQuestion[] = []
    questionsSnapshot.forEach(doc => {
      const questionData = doc.data()
      delete questionData.testId // Remove testId from question data
      questions.push(questionData as TestQuestion)
    })

    const sections: TestSection[] = []
    sectionsSnapshot.forEach(doc => {
      const sectionData = doc.data()
      delete sectionData.testId // Remove testId from section data
      sections.push(sectionData as TestSection)
    })

    const fullTest: Test = {
      ...testData,
      questions,
      sections
    }

    return {
      success: true,
      data: fullTest,
      message: 'Test retrieved successfully'
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to retrieve test'
    }
  }
}) 