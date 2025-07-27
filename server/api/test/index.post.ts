import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestApiResponse> => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const query = getQuery(event)
  
  const isTestMode = query.test === 'true'
  
  if (isTestMode) {
    return {
      success: true,
      data: {
        id: 'test-id-' + Date.now(),
        title: body.title || 'Test Quiz',
        description: body.description || 'Test description',
        image: body.image || '',
        deadline: body.deadline || '',
        timeLimit: body.timeLimit || 60,
        randomizeQuestions: body.randomizeQuestions || false,
        randomizeAnswers: body.randomizeAnswers || false,
        difficultyDistribution: body.difficultyDistribution || { easy: 40, medium: 50, hard: 10 },
        sections: body.sections || [],
        questions: body.questions || [],
        authorId: body.authorId || 'test-user',
        tags: body.tags || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      message: 'Test mode: Test created successfully'
    }
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const testsCollection = db.collection('tests')

    if (!body.title || !body.description || !body.authorId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title, description and authorId are required'
      })
    }

    const testData = {
      ...body,
      id: body.id || `test-${Date.now()}`,
      authorId: body.authorId, // Ensure authorId is set
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    await testsCollection.doc(testData.id).set(testData)
    
    if (body.questions && body.questions.length > 0) {
      const questionsCollection = db.collection('questions')
      for (const question of body.questions) {
        await questionsCollection.doc(question.id).set({
          ...question,
          testId: testData.id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        })
      }
    }

    if (body.sections && body.sections.length > 0) {
      const sectionsCollection = db.collection('sections')
      for (const section of body.sections) {
        await sectionsCollection.doc(section.id).set({
          ...section,
          testId: testData.id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        })
      }
    }

    const savedTest = await testsCollection.doc(testData.id).get()

    return {
      success: true,
      data: savedTest.data() as Test,
      message: 'Test created successfully'
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create test'
    }
  }
}) 