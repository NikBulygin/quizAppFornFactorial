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
  const currentTestPass = ref<PassedTest | null>(null)
  const currentQuestionIndex = ref(0)
  const userAnswers = ref<Record<string, UserAnswer>>({})
  const timeSpent = ref(0)
  const originalTest = ref<Test | null>(null)

  const initializeFromStorage = () => {
    if (import.meta.client) {
      const savedTestPass = localStorage.getItem('nfactorial-quiz-test-pass')
      if (savedTestPass) {
        try {
          currentTestPass.value = JSON.parse(savedTestPass)
        } catch {
          localStorage.removeItem('nfactorial-quiz-test-pass')
        }
      }

      const savedTestData = localStorage.getItem('nfactorial-quiz-test-data')
      if (savedTestData) {
        try {
          const testData = JSON.parse(savedTestData)
          originalTest.value = testData.originalTest
          currentQuestionIndex.value = testData.currentQuestionIndex || 0
          userAnswers.value = testData.userAnswers || {}
          timeSpent.value = testData.timeSpent || 0
        } catch {
          localStorage.removeItem('nfactorial-quiz-test-data')
        }
      }
    }
  }

  const saveToStorage = (testPass: PassedTest) => {
    if (import.meta.client) {
      localStorage.setItem('nfactorial-quiz-test-pass', JSON.stringify(testPass))
    }
  }

  const saveTestDataToStorage = () => {
    if (import.meta.client && originalTest.value) {
      const testData = {
        originalTest: originalTest.value,
        currentQuestionIndex: currentQuestionIndex.value,
        userAnswers: userAnswers.value,
        timeSpent: timeSpent.value
      }
      localStorage.setItem('nfactorial-quiz-test-data', JSON.stringify(testData))
    }
  }

  const clearTestForClient = (test: Test): Test => {
    const clearedTest = { ...test }
    clearedTest.questions = test.questions.map(q => {
      const clearedQuestion = { ...q }
      delete (clearedQuestion as any).correctAnswerIds
      clearedQuestion.correctAnswersCount = q.correctAnswerIds?.length || 0
      clearedQuestion.answers = q.answers.map(a => ({ id: a.id, text: a.text }))
      return clearedQuestion
    })
    return clearedTest
  }

  const restoreFromServer = async (testId: string) => {
    try {
      const activeTest = await $fetch<PassedTestApiResponse>(`/api/passed-test/my?testId=${testId}`)
      
      if (activeTest.success && activeTest.data) {
        currentTestPass.value = activeTest.data
        userAnswers.value = activeTest.data.userAnswers || {}
        timeSpent.value = activeTest.data.timeSpent || 0
        
        const testData = await $fetch<TestApiResponse>(`/api/test/${testId}`)
        if (testData.success && testData.data) {
          originalTest.value = testData.data
          currentQuestionIndex.value = 0
          saveTestDataToStorage()
        }
      }
    } catch {
      currentTestPass.value = null
    }
  }

  const startTest = async (testData: Test) => {
    if (currentTestPass.value?.testId === testData.id) {
      return
    }

    const clearedTest = clearTestForClient(testData)
    originalTest.value = testData

    try {
      const response = await $fetch<PassedTestApiResponse>('/api/passed-test', {
        method: 'POST',
        body: {
          testId: testData.id,
          timeLimit: testData.timeLimit || 60
        }
      })

      if (response.success && response.data) {
        currentTestPass.value = response.data
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        timeSpent.value = 0
        saveToStorage(response.data)
        saveTestDataToStorage()
      }
    } catch {
      throw new Error('Failed to start test')
    }
  }

  const saveToServer = async () => {
    if (!currentTestPass.value) return

    try {
      await $fetch<PassedTestApiResponse>(`/api/passed-test/${currentTestPass.value.id}`, {
        method: 'PUT',
        body: {
          userAnswers: userAnswers.value,
          timeSpent: timeSpent.value
        }
      })
    } catch {
      throw new Error('Failed to save to server')
    }
  }

  const completeTest = async () => {
    if (!currentTestPass.value || !originalTest.value) return

    try {
      const totalScore = calculateTotalScore()
      const maxScore = calculateMaxScore()
      const percentage = Math.round((totalScore / maxScore) * 100)
      const isPassed = percentage >= 70

      const response = await $fetch<PassedTestApiResponse>(`/api/passed-test/${currentTestPass.value.id}`, {
        method: 'PUT',
        body: {
          status: 'completed',
          endTime: new Date().toISOString(),
          userAnswers: userAnswers.value,
          timeSpent: timeSpent.value,
          totalScore,
          maxScore,
          percentage,
          isPassed
        }
      })

      if (response.success && response.data) {
        currentTestPass.value = response.data
        saveToStorage(response.data)
      }
    } catch {
      throw new Error('Failed to complete test')
    }
  }

  const autoSave = () => {
    if (!currentTestPass.value) return

    const saveData = {
      testId: currentTestPass.value.testId,
      userAnswers: userAnswers.value,
      timeSpent: timeSpent.value
    }

    saveToServer()
    saveTestDataToStorage()
  }

  let autoSaveInterval: NodeJS.Timeout | null = null

  const startAutoSave = () => {
    if (autoSaveInterval) {
      clearInterval(autoSaveInterval)
    }
    autoSaveInterval = setInterval(autoSave, 5 * 60 * 1000)
  }

  const stopAutoSave = () => {
    if (autoSaveInterval) {
      clearInterval(autoSaveInterval)
      autoSaveInterval = null
    }
  }

  const clearTest = () => {
    currentTestPass.value = null
    currentQuestionIndex.value = 0
    userAnswers.value = {}
    timeSpent.value = 0
    originalTest.value = null
    stopAutoSave()
    
    if (import.meta.client) {
      localStorage.removeItem('nfactorial-quiz-test-pass')
      localStorage.removeItem('nfactorial-quiz-test-data')
    }
  }

  const calculateTotalScore = (): number => {
    if (!originalTest.value) return 0

    return originalTest.value.questions.reduce((total, question) => {
      const userAnswer = userAnswers.value[question.id]
      if (!userAnswer) return total

      const isCorrect = checkAnswerCorrectness(question, userAnswer.answerIds)
      return total + (isCorrect ? question.points : 0)
    }, 0)
  }

  const calculateMaxScore = (): number => {
    if (!originalTest.value) return 0
    return originalTest.value.questions.reduce((total, question) => total + question.points, 0)
  }

  const checkAnswerCorrectness = (question: TestQuestion, selectedAnswerIds: string[]): boolean => {
    if (!question.correctAnswerIds) return false
    
    if (selectedAnswerIds.length !== question.correctAnswerIds.length) {
      return false
    }
    
    return question.correctAnswerIds.every(id => selectedAnswerIds.includes(id))
  }

  const getQuestionStatus = (questionId: string): 'unanswered' | 'answered' | 'correct' | 'incorrect' => {
    if (!userAnswers.value[questionId]) {
      return 'unanswered'
    }

    if (!currentTestPass.value || currentTestPass.value.status !== 'completed') {
      return 'answered'
    }

    const question = originalTest.value?.questions.find(q => q.id === questionId)
    if (!question) return 'unanswered'

    const isCorrect = checkAnswerCorrectness(question, userAnswers.value[questionId].answerIds)
    return isCorrect ? 'correct' : 'incorrect'
  }

  const getQuestionStatusColor = (questionId: string): string => {
    const status = getQuestionStatus(questionId)
    
    if (status === 'unanswered') {
      return 'gray'
    }
    
    if (status === 'answered') {
      return 'primary'
    }
    
    if (status === 'correct') {
      return 'success'
    }
    
    return 'error'
  }

  if (import.meta.client) {
    initializeFromStorage()
  }

  return {
    currentTestPass,
    currentQuestionIndex,
    userAnswers,
    timeSpent,
    originalTest,
    
    startTest,
    saveToServer,
    completeTest,
    clearTest,
    restoreFromServer,
    startAutoSave,
    stopAutoSave,
    
    calculateTotalScore,
    calculateMaxScore,
    checkAnswerCorrectness,
    getQuestionStatus,
    getQuestionStatusColor
  }
}) 