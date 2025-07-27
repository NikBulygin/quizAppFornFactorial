import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

/**
 * Create a new test
 * @swagger
 * /api/test:
 *   post:
 *     summary: Create a new test
 *     description: Create a new test in the database with questions and sections
 *     tags: [Tests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, authorId]
 *             properties:
 *               title:
 *                 type: string
 *                 description: Test title
 *               description:
 *                 type: string
 *                 description: Test description
 *               image:
 *                 type: string
 *                 description: Test image URL
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 description: Test deadline
 *               timeLimit:
 *                 type: integer
 *                 description: Time limit in minutes
 *               randomizeQuestions:
 *                 type: boolean
 *                 description: Whether to randomize question order
 *               randomizeAnswers:
 *                 type: boolean
 *                 description: Whether to randomize answer order
 *               difficultyDistribution:
 *                 type: object
 *                 properties:
 *                   easy:
 *                     type: integer
 *                   medium:
 *                     type: integer
 *                   hard:
 *                     type: integer
 *               sections:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/TestSection'
 *               questions:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/TestQuestion'
 *               authorId:
 *                 type: string
 *                 description: ID of the test author
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Test tags
 *     responses:
 *       200:
 *         description: Test created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Test'
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - missing required fields
 */
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