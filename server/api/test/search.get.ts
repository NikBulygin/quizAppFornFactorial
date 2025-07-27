import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<TestSearchResponse> => {
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
      total: 1,
      message: 'Test mode: Tests found successfully'
    }
  }

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const testsQuery = db.collection('tests')

    const search = query.search as string
    const tags = query.tags ? (query.tags as string).split(',').map(tag => tag.trim()).filter(Boolean) : []
    const difficulty = query.difficulty as string
    const limit = parseInt(query.limit as string) || 20
    const offset = parseInt(query.offset as string) || 0

    const testsSnapshot = await testsQuery.get()
    let tests: Test[] = []

    for (const doc of testsSnapshot.docs) {
      const testData = doc.data() as Test
      
      if (search) {
        const searchLower = search.toLowerCase()
        const titleMatch = testData.title.toLowerCase().includes(searchLower)
        const descriptionMatch = testData.description?.toLowerCase().includes(searchLower) || false
        const tagsMatch = testData.tags?.some(tag => tag.toLowerCase().includes(searchLower)) || false
        
        if (!titleMatch && !descriptionMatch && !tagsMatch) {
          continue
        }
      }

      if (tags.length > 0) {
        const testTags = testData.tags || []
        const hasMatchingTag = tags.some(searchTag => 
          testTags.some(testTag => testTag.toLowerCase() === searchTag.toLowerCase())
        )
        if (!hasMatchingTag) {
          continue
        }
      }

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

      if (difficulty) {
        const hasDifficultyQuestion = questions.some(q => q.difficulty === difficulty)
        if (!hasDifficultyQuestion) {
          continue
        }
      }

      tests.push({
        ...testData,
        questions,
        sections
      })
    }

    const total = tests.length
    tests = tests.slice(offset, offset + limit)

    return {
      success: true,
      data: tests,
      total,
      message: 'Tests found successfully'
    }

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to search tests'
    }
  }
}) 