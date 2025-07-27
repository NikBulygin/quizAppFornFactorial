import { GoogleGenerativeAI } from '@google/generative-ai'

interface GenerateTestRequest {
  topic: string
  description?: string
  easyQuestions?: number
  mediumQuestions?: number
  hardQuestions?: number
  timeLimit?: number
  tags?: string[]
  additionalPrompts?: string
}

interface GenerateTestResponse {
  success: boolean
  data?: Test
  error?: string
  message?: string
}

/**
 * Generate a test using AI
 * @swagger
 * /api/ai/generate-test:
 *   post:
 *     summary: Generate a test using AI
 *     description: Use Google Generative AI (Gemini 1.5 Flash) to generate a complete test based on user specifications
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [topic]
 *             properties:
 *               topic:
 *                 type: string
 *                 description: Main topic for the test
 *               description:
 *                 type: string
 *                 description: Additional test description
 *               easyQuestions:
 *                 type: integer
 *                 description: Number of easy questions
 *                 default: 3
 *               mediumQuestions:
 *                 type: integer
 *                 description: Number of medium questions
 *                 default: 5
 *               hardQuestions:
 *                 type: integer
 *                 description: Number of hard questions
 *                 default: 2
 *               timeLimit:
 *                 type: integer
 *                 description: Time limit in minutes
 *                 default: 60
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Tags for the test
 *               additionalPrompts:
 *                 type: string
 *                 description: Additional requirements for the AI
 *     responses:
 *       200:
 *         description: Test generated successfully
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
 *         description: Bad request - missing topic or invalid parameters
 */
export default defineEventHandler(async (event): Promise<GenerateTestResponse> => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody<GenerateTestRequest>(event)
    
    if (!body.topic || body.topic.trim().length === 0) {
      return {
        success: false,
        error: 'Тема теста обязательна'
      }
    }

    const easyQuestions = body.easyQuestions || 3
    const mediumQuestions = body.mediumQuestions || 5
    const hardQuestions = body.hardQuestions || 2
    const timeLimit = body.timeLimit || 60
    const tags = body.tags || []

    const totalQuestions = easyQuestions + mediumQuestions + hardQuestions
    if (totalQuestions === 0) {
      return {
        success: false,
        error: 'Должно быть указано хотя бы одно количество вопросов'
      }
    }

    const genAI = new GoogleGenerativeAI(config.googleGenaiApiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `
Создай образовательный тест в формате JSON на тему "${body.topic}".

${body.description ? `Описание теста: ${body.description}` : ''}
${body.additionalPrompts ? `Дополнительные требования: ${body.additionalPrompts}` : ''}

Требования:
- Количество легких вопросов: ${easyQuestions}
- Количество средних вопросов: ${mediumQuestions}
- Количество сложных вопросов: ${hardQuestions}
- Общее количество вопросов: ${totalQuestions}
- Время на прохождение: ${timeLimit} минут
- Теги: ${tags.join(', ') || 'образование'}

Структура JSON должна быть следующей:
{
  "title": "Название теста",
  "description": "Описание теста",
  "timeLimit": ${timeLimit},
  "difficultyDistribution": {
    "easy": ${Math.round((easyQuestions / totalQuestions) * 100)},
    "medium": ${Math.round((mediumQuestions / totalQuestions) * 100)},
    "hard": ${Math.round((hardQuestions / totalQuestions) * 100)}
  },
  "sections": [
    {
      "id": "section-1",
      "title": "Название раздела",
      "description": "Описание раздела",
      "questionCount": ${totalQuestions}
    }
  ],
  "questions": [
    {
      "id": "question-1",
      "title": "Текст вопроса",
      "description": "Дополнительное описание вопроса (опционально)",
      "difficulty": "easy|medium|hard",
      "points": 1,
      "answers": [
        {
          "id": "answer-1",
          "text": "Текст ответа"
        }
      ],
      "correctAnswerIds": ["answer-1"],
      "explanation": "Объяснение правильного ответа"
    }
  ],
  "tags": ["тег1", "тег2"]
}

Важные требования:
1. Все ID должны быть уникальными
2. У каждого вопроса должен быть хотя бы один правильный ответ
3. Создай точно ${easyQuestions} легких вопросов, ${mediumQuestions} средних вопросов и ${hardQuestions} сложных вопросов
4. Ответы должны быть реалистичными и логичными
5. Объяснения должны быть полезными для обучения
6. Верни только валидный JSON без дополнительного текста
`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('AI не вернул валидный JSON')
    }

    const generatedTest = JSON.parse(jsonMatch[0]) as Test

    const { user } = await getUserSession(event)
    const timestamp = Date.now()
    
    const finalTest: Test = {
      ...generatedTest,
      id: `ai-generated-${timestamp}`,
      authorId: user?.id || 'ai-agent',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      randomizeQuestions: true,
      randomizeAnswers: true,
      questions: generatedTest.questions.map((q, index) => ({
        ...q,
        id: q.id || `question-${timestamp}-${index}`,
        answers: q.answers.map((a, aIndex) => ({
          ...a,
          id: a.id || `answer-${timestamp}-${index}-${aIndex}`
        }))
      })),
      sections: generatedTest.sections.map((s, index) => ({
        ...s,
        id: s.id || `section-${timestamp}-${index}`,
        questions: s.questions || []
      }))
    }

    return {
      success: true,
      data: finalTest,
      message: 'Тест успешно сгенерирован'
    }

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при генерации теста'
    }
  }
}) 