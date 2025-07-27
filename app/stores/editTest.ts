import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditTestStore = defineStore('editTest', () => {
  const currentTest = ref<Test | null>(null)
  const isEditing = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const initializeFromStorage = () => {
    if (import.meta.client) {
      const savedTest = localStorage.getItem('nfactorial-quiz-current-test')
      if (savedTest) {
        try {
          currentTest.value = JSON.parse(savedTest)
        } catch {
          localStorage.removeItem('nfactorial-quiz-current-test')
        }
      }
    }
  }

  const saveToStorage = (test: Test) => {
    if (import.meta.client) {
      localStorage.setItem('nfactorial-quiz-current-test', JSON.stringify(test))
    }
  }

  const setCurrentTest = (test: any) => {
    if (test) {
      const processedTest = {
        ...test,
        questions: test.questions.map((q: any) => ({
          ...q,
          correctAnswerIds: q.correctAnswerIds || []
        }))
      } as Test
      currentTest.value = processedTest
      saveToStorage(processedTest)
    } else {
      currentTest.value = null
      if (import.meta.client) {
        localStorage.removeItem('nfactorial-quiz-current-test')
      }
    }
  }

  const updateTestLocal = (updates: Partial<Test>) => {
    if (currentTest.value) {
      currentTest.value = { ...currentTest.value, ...updates }
      saveToStorage(currentTest.value)
    }
  }

  const clearTest = () => {
    currentTest.value = null
    if (import.meta.client) {
      localStorage.removeItem('nfactorial-quiz-current-test')
    }
  }

  const exportTest = (): string => {
    if (!currentTest.value) {
      throw new Error('No test to export')
    }
    return JSON.stringify(currentTest.value, null, 2)
  }

  const importTest = (jsonString: string): Test => {
    try {
      const test = JSON.parse(jsonString)
      
      if (!test.title || !test.questions || !test.sections) {
        throw new Error('Invalid test structure')
      }
      
      const timestamp = Date.now()
      const newQuestions = test.questions.map((q: TestQuestion) => ({
        ...q,
        id: `question-${timestamp}-${Math.random()}`
      }))
      
      const newSections = test.sections.map((s: TestSection) => ({
        ...s,
        id: `section-${timestamp}-${Math.random()}`,
        questionCount: s.questionCount || 5
      }))
      
      const questionIdMap = new Map()
      test.questions.forEach((q: TestQuestion, index: number) => {
        questionIdMap.set(q.id, newQuestions[index].id)
      })
      
      const sectionIdMap = new Map()
      test.sections.forEach((s: TestSection, index: number) => {
        sectionIdMap.set(s.id, newSections[index].id)
      })
      
      const newQuestionSectionLinks = test.questionSectionLinks ? 
        test.questionSectionLinks.map((link: { questionId: string; sectionId: string }) => ({
          questionId: questionIdMap.get(link.questionId) || link.questionId,
          sectionId: sectionIdMap.get(link.sectionId) || link.sectionId
        })) : 
        test.sections.flatMap((section: TestSection) => 
          (section.questions || []).map((questionId: string) => ({
            questionId: questionIdMap.get(questionId) || questionId,
            sectionId: sectionIdMap.get(section.id) || section.id
          }))
        )
      
      const newTest: Test = {
        ...test,
        id: `test-${timestamp}`,
        questions: newQuestions,
        sections: newSections,
        questionSectionLinks: newQuestionSectionLinks,
        authorId: test.authorId || test.author?.id || 'current-user',
        tags: test.tags || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      setCurrentTest(newTest)
      return newTest
    } catch (error) {
      throw new Error(`Failed to import test: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const createTest = async (test: Test, useTestMode = false): Promise<Test> => {
    isLoading.value = true
    error.value = null
    
    try {
      const url = useTestMode ? 
        '/api/test?test=true' : 
        '/api/test'
      
      const response = await $fetch<TestApiResponse>(url, {
        method: 'POST',
        body: test
      })
      
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to create test')
      }
      
      setCurrentTest(response.data)
      return response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create test'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const updateTestApi = async (testId: string, test: Test, useTestMode = false): Promise<Test> => {
    isLoading.value = true
    error.value = null
    
    try {
      const url = useTestMode ? 
        `/api/test/${testId}?test=true` : 
        `/api/test/${testId}`
      
      const response = await $fetch<TestApiResponse>(url, {
        method: 'PUT',
        body: test
      })
      
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to update test')
      }
      
      setCurrentTest(response.data)
      return response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update test'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const fetchTest = async (testId: string, useTestMode = false): Promise<Test> => {
    isLoading.value = true
    error.value = null
    
    try {
      const url = useTestMode ? 
        `/api/test/${testId}?test=true` : 
        `/api/test/${testId}`
      
      const response = await $fetch<TestApiResponse>(url)
      
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to fetch test')
      }
      
      setCurrentTest(response.data)
      return response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch test'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const fetchTests = async (useTestMode = false): Promise<Test[]> => {
    isLoading.value = true
    error.value = null
    
    try {
      const url = useTestMode ? 
        '/api/test?test=true' : 
        '/api/test'
      
      const response = await $fetch<TestListApiResponse>(url)
      
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to fetch tests')
      }
      
      return response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch tests'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  if (import.meta.client) {
    initializeFromStorage()
  }

  return {
    currentTest,
    isEditing,
    isLoading,
    error,
    
    setCurrentTest,
    updateTest: updateTestLocal,
    clearTest,
    exportTest,
    importTest,
    setEditing: (editing: boolean) => { isEditing.value = editing },
    
    createTest,
    updateTestApi,
    fetchTest,
    fetchTests
  }
}) 