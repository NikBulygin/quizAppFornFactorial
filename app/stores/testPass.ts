import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TestPassState {
  testId: string
  currentSectionIndex: number
  currentQuestionIndex: number
  userAnswers: Record<string, UserAnswer>
  startTime: string
  lastSaveTime: string
  isCompleted: boolean
  timeSpent: number // в секундах
}

export const useTestPassStore = defineStore('testPass', () => {
  // Состояние
  const currentTestPass = ref<TestPassState | null>(null)
  const test = ref<Test | null>(null)
  const originalTest = ref<Test | null>(null) // Оригинальный тест с правильными ответами
  const autoSaveInterval = ref<NodeJS.Timeout | null>(null)
  const isLoading = ref(false)

  // Инициализация из localStorage
  const initializeFromStorage = () => {
    if (import.meta.client) {
      const savedTestPass = localStorage.getItem('nfactorial-quiz-test-pass')
      const savedTest = localStorage.getItem('nfactorial-quiz-test-data')
      
      if (savedTestPass) {
        try {
          currentTestPass.value = JSON.parse(savedTestPass)
        } catch (error) {
          console.error('Error parsing saved test pass:', error)
          localStorage.removeItem('nfactorial-quiz-test-pass')
        }
      }
      
      if (savedTest) {
        try {
          test.value = JSON.parse(savedTest)
        } catch (error) {
          console.error('Error parsing saved test data:', error)
          localStorage.removeItem('nfactorial-quiz-test-data')
        }
      }
    }
  }

  // Сохранение в localStorage
  const saveToStorage = () => {
    if (import.meta.client && currentTestPass.value) {
      localStorage.setItem('nfactorial-quiz-test-pass', JSON.stringify(currentTestPass.value))
      if (test.value) {
        // Сохраняем тест без правильных ответов
        const safeTest = sanitizeTestForClient(test.value)
        localStorage.setItem('nfactorial-quiz-test-data', JSON.stringify(safeTest))
      }
    }
  }

  // Очистка теста от правильных ответов для клиента
  const sanitizeTestForClient = (originalTest: Test): Test => {
    return {
      ...originalTest,
      questions: originalTest.questions.map(question => ({
        ...question,
        // Убираем правильные ответы полностью для безопасности
        correctAnswerIds: [],
        // Добавляем количество правильных ответов для UI
        correctAnswersCount: question.correctAnswerIds?.length || 0,
        explanation: undefined,
        // Оставляем только текст ответов
        answers: question.answers.map(answer => ({
          id: answer.id,
          text: answer.text,
          description: answer.description
        }))
      }))
    }
  }

  // Восстановление состояния теста с сервера
  const restoreTestState = async (testId: string) => {
    if (!import.meta.client) return false
    
    isLoading.value = true
    
    try {
      // Проверяем, есть ли активное прохождение теста на сервере
      const response = await $fetch<PassedTestListApiResponse>('/api/passed-test/my')
      
      if (response.success && response.data) {
        const activeTest = response.data.find(pt => 
          pt.testId === testId && pt.status === 'in_progress'
        )
        
        if (activeTest) {
          console.log('🔄 Восстанавливаем состояние теста с сервера:', activeTest)
          
          // Загружаем полные данные теста
          const testResponse = await $fetch<TestApiResponse>(`/api/test/${testId}`)
          
          if (testResponse.success && testResponse.data) {
            // Восстанавливаем состояние
            currentTestPass.value = {
              testId: activeTest.testId,
              currentSectionIndex: 0, // Можно добавить в PassedTest если нужно
              currentQuestionIndex: 0,
              userAnswers: activeTest.userAnswers,
              startTime: activeTest.startTime,
              lastSaveTime: activeTest.updatedAt,
              isCompleted: false,
              timeSpent: activeTest.timeSpent
            }
            
            test.value = sanitizeTestForClient(testResponse.data)
            originalTest.value = testResponse.data
            
            saveToStorage()
            startAutoSave()
            
            isLoading.value = false
            return true
          }
        }
      }
    } catch (error) {
      console.error('Error restoring test state:', error)
    }
    
    isLoading.value = false
    return false
  }

  // Действия
  const startTest = async (testData: Test) => {
    const now = new Date().toISOString()
    
    // Проверяем, есть ли уже активное прохождение этого теста
    const restored = await restoreTestState(testData.id)
    if (restored) {
      console.log('✅ Восстановлено активное прохождение теста')
      return
    }
    
    console.log('🚀 Начинаем новый тест:', testData.id)
    
    currentTestPass.value = {
      testId: testData.id,
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      userAnswers: {},
      startTime: now,
      lastSaveTime: now,
      isCompleted: false,
      timeSpent: 0
    }
    
    // Сохраняем тест без правильных ответов
    test.value = sanitizeTestForClient(testData)
    originalTest.value = testData // Сохраняем оригинальный тест
    
    saveToStorage()
    startAutoSave()
    
    // Создаем запись на сервере
    try {
      await $fetch<PassedTestApiResponse>('/api/passed-test', {
        method: 'POST',
        body: { testId: testData.id }
      })
    } catch (error) {
      console.error('Error creating test session on server:', error)
    }
  }

  const updateCurrentPosition = (sectionIndex: number, questionIndex: number) => {
    if (currentTestPass.value) {
      currentTestPass.value.currentSectionIndex = sectionIndex
      currentTestPass.value.currentQuestionIndex = questionIndex
      saveToStorage()
    }
  }

  const saveAnswer = (questionId: string, answerIds: string[]) => {
    if (currentTestPass.value) {
      currentTestPass.value.userAnswers[questionId] = {
        questionId,
        answerIds
      }
      
      saveToStorage()
      
      // Сохраняем на сервер
      saveToServer()
    }
  }

  const completeTest = async () => {
    if (currentTestPass.value) {
      currentTestPass.value.isCompleted = true
      currentTestPass.value.timeSpent = Math.floor(
        (Date.now() - new Date(currentTestPass.value.startTime).getTime()) / 1000
      )
      saveToStorage()
      stopAutoSave()
      
      // Завершаем тест на сервере
      try {
        await $fetch<PassedTestApiResponse>(`/api/passed-test/${currentTestPass.value.testId}`, {
          method: 'PUT',
          body: {
            status: 'completed',
            userAnswers: currentTestPass.value.userAnswers
          }
        })
      } catch (error) {
        console.error('Error completing test on server:', error)
      }
    }
  }

  const clearTest = () => {
    currentTestPass.value = null
    test.value = null
    originalTest.value = null
    stopAutoSave()
    
    if (import.meta.client) {
      localStorage.removeItem('nfactorial-quiz-test-pass')
      localStorage.removeItem('nfactorial-quiz-test-data')
    }
  }

  // Сохранение на сервер
  const saveToServer = async () => {
    if (!currentTestPass.value) return
    
    try {
      await $fetch<PassedTestApiResponse>(`/api/passed-test/${currentTestPass.value.testId}`, {
        method: 'PUT',
        body: {
          userAnswers: currentTestPass.value.userAnswers,
          timeSpent: Math.floor(
            (Date.now() - new Date(currentTestPass.value.startTime).getTime()) / 1000
          )
        }
      })
    } catch (error) {
      console.error('Error saving to server:', error)
    }
  }

  // Автосохранение
  const startAutoSave = () => {
    if (autoSaveInterval.value) {
      clearInterval(autoSaveInterval.value)
    }
    
    autoSaveInterval.value = setInterval(() => {
      if (currentTestPass.value) {
        console.log('🔄 AutoSave: Сохранение прогресса теста...', {
          testId: currentTestPass.value.testId,
          answeredQuestions: Object.keys(currentTestPass.value.userAnswers).length,
          timeSpent: Math.floor(
            (Date.now() - new Date(currentTestPass.value.startTime).getTime()) / 1000
          )
        })
        
        // Обновляем время последнего сохранения
        currentTestPass.value.lastSaveTime = new Date().toISOString()
        currentTestPass.value.timeSpent = Math.floor(
          (Date.now() - new Date(currentTestPass.value.startTime).getTime()) / 1000
        )
        
        saveToStorage()
        saveToServer()
      }
    }, 5 * 60 * 1000) // 5 минут
  }

  const stopAutoSave = () => {
    if (autoSaveInterval.value) {
      clearInterval(autoSaveInterval.value)
      autoSaveInterval.value = null
    }
  }

  // Вычисляемые свойства
  const hasActiveTest = computed(() => 
    currentTestPass.value !== null && !currentTestPass.value.isCompleted
  )

  const currentQuestion = computed(() => {
    if (!test.value || !currentTestPass.value) return null
    
    const sections = test.value.sections
    const currentSection = sections[currentTestPass.value.currentSectionIndex]
    if (!currentSection) return null
    
    const questionsInSection = test.value.questions.filter(q => 
      test.value!.questionSectionLinks?.some((link) => 
        link.questionId === q.id && link.sectionId === currentSection.id
      ) || true // Если нет связей, показываем все вопросы
    )
    
    return questionsInSection[currentTestPass.value.currentQuestionIndex] || null
  })

  const currentQuestionIndex = computed(() => 
    currentTestPass.value?.currentQuestionIndex || 0
  )

  const totalQuestions = computed(() => {
    if (!test.value) return 0
    return test.value.questions.length
  })

  const answeredQuestionsCount = computed(() => {
    if (!currentTestPass.value) return 0
    return Object.keys(currentTestPass.value.userAnswers).length
  })

  // Реактивные статусы вопросов
  const questionStatuses = computed(() => {
    if (!test.value || !currentTestPass.value) {
      return {}
    }

    const statuses: Record<string, 'outline' | 'primary' | 'success' | 'error'> = {}
    
    test.value.questions.forEach(q => {
      statuses[q.id] = getQuestionStatus(q.id)
    })
    
    return statuses
  })

  // Проверка правильности ответа
  const isAnswerCorrect = (questionId: string): boolean => {
    if (!originalTest.value || !currentTestPass.value) return false
    
    const question = originalTest.value.questions.find(q => q.id === questionId)
    const userAnswer = currentTestPass.value.userAnswers[questionId]
    
    if (!question || !userAnswer || !question.correctAnswerIds) return false
    
    // Проверяем, что количество выбранных ответов совпадает с правильными
    if (userAnswer.answerIds.length !== question.correctAnswerIds.length) {
      return false
    }
    
    // Проверяем, что все выбранные ответы правильные
    return question.correctAnswerIds.every(correctId => 
      userAnswer.answerIds.includes(correctId)
    )
  }

  // Получение статуса вопроса
  const getQuestionStatus = (questionId: string): 'outline' | 'primary' | 'success' | 'error' => {
    if (!currentTestPass.value) return 'outline'
    
    const userAnswer = currentTestPass.value.userAnswers[questionId]
    const currentQ = currentQuestion.value
    
    if (!userAnswer) {
      // Не отвечен
      if (currentQ && currentQ.id === questionId) {
        return 'primary' // Текущий вопрос
      }
      return 'outline'
    }
    
    // Отвечен
    if (currentQ && currentQ.id === questionId) {
      return 'primary' // Текущий вопрос
    }
    
    // До завершения теста все отвеченные вопросы показываем как "отвеченные"
    if (!currentTestPass.value.isCompleted) {
      return 'success' // Отвечен (но не проверяем правильность)
    }
    
    // После завершения теста проверяем правильность
    return isAnswerCorrect(questionId) ? 'success' : 'error'
  }

  // Инициализация при создании store
  if (import.meta.client) {
    initializeFromStorage()
  }

  return {
    // Состояние
    currentTestPass,
    test,
    originalTest,
    isLoading,
    
    // Вычисляемые свойства
    hasActiveTest,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    answeredQuestionsCount,
    questionStatuses,
    
    // Методы
    startTest,
    updateCurrentPosition,
    saveAnswer,
    completeTest,
    clearTest,
    startAutoSave,
    stopAutoSave,
    isAnswerCorrect,
    getQuestionStatus,
    restoreTestState,
    saveToServer
  }
}) 