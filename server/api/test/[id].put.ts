import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestApiResponse> => {
  const config = useRuntimeConfig()
  const { id } = getRouterParams(event)
  const body = await readBody(event)
  const query = getQuery(event)
  
  const isTestMode = query.test === 'true'
  
  if (isTestMode) {
    return {
      success: true,
      data: {
        id: id as string,
        title: body.title || 'Updated Test Quiz',
        description: body.description || 'Updated test description',
        image: body.image || 'https://via.placeholder.com/300x200',
        deadline: body.deadline || '2024-12-31T23:59:59Z',
        timeLimit: body.timeLimit || 60,
        randomizeQuestions: body.randomizeQuestions || true,
        randomizeAnswers: body.randomizeAnswers || false,
        difficultyDistribution: body.difficultyDistribution || { easy: 40, medium: 50, hard: 10 },
        sections: body.sections || [],
        questions: body.questions || [],
        authorId: body.authorId || 'test-user',
        tags: body.tags || [],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: new Date().toISOString()
      },
      message: 'Test mode: Test updated successfully'
    }
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const testRef = db.collection('tests').doc(id as string)

    const testDoc = await testRef.get()
    if (!testDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Test not found'
      })
    }

    const updateData = {
      ...body,
      updatedAt: new Date().toISOString()
    }

    await testRef.update(updateData)

    if (body.questions && body.questions.length > 0) {
      const questionsCollection = db.collection('questions')
      for (const question of body.questions) {
        await questionsCollection.doc(question.id).set({
          ...question,
          testId: id,
          updatedAt: new Date().toISOString()
        }, { merge: true })
      }
    }

    if (body.sections && body.sections.length > 0) {
      const sectionsCollection = db.collection('sections')
      for (const section of body.sections) {
        await sectionsCollection.doc(section.id).set({
          ...section,
          testId: id,
          updatedAt: new Date().toISOString()
        }, { merge: true })
      }
    }

    const updatedTest = await testRef.get()

    return {
      success: true,
      data: updatedTest.data() as Test,
      message: 'Test updated successfully'
    }

  } catch (error) {
    
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update test'
    }
  }
}) 