import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useEditTestStore = defineStore('editTest', () => {
  // Состояние
  const currentTest = ref<Test | null>(null)
  const isEditing = ref(false)

  // Инициализация из localStorage
  const initializeFromStorage = () => {
    if (import.meta.client) {
      const savedTest = localStorage.getItem('nfactorial-quiz-current-test')
      if (savedTest) {
        try {
          currentTest.value = JSON.parse(savedTest)
        } catch (error) {
          console.error('Error parsing saved test:', error)
          localStorage.removeItem('nfactorial-quiz-current-test')
        }
      }
    }
  }

  // Сохранение в localStorage
  const saveToStorage = (test: Test) => {
    if (import.meta.client) {
      localStorage.setItem('nfactorial-quiz-current-test', JSON.stringify(test))
    }
  }

  // Действия
  const setCurrentTest = (test: Test | null) => {
    currentTest.value = test
    if (test) {
      saveToStorage(test)
    } else {
      if (import.meta.client) {
        localStorage.removeItem('nfactorial-quiz-current-test')
      }
    }
  }

  const updateTest = (updates: Partial<Test>) => {
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
      
      // Валидация структуры теста
      if (!test.title || !test.questions || !test.sections) {
        throw new Error('Invalid test structure')
      }
      
      // Генерируем новые ID для избежания конфликтов
      const timestamp = Date.now()
      const newQuestions = test.questions.map((q: TestQuestion) => ({
        ...q,
        id: `question-${timestamp}-${Math.random()}`
      }))
      
      const newSections = test.sections.map((s: TestSection) => ({
        ...s,
        id: `section-${timestamp}-${Math.random()}`
      }))
      
      // Создаем карту старых ID к новым
      const questionIdMap = new Map()
      test.questions.forEach((q: TestQuestion, index: number) => {
        questionIdMap.set(q.id, newQuestions[index].id)
      })
      
      const sectionIdMap = new Map()
      test.sections.forEach((s: TestSection, index: number) => {
        sectionIdMap.set(s.id, newSections[index].id)
      })
      
      // Обновляем связи с новыми ID
      const newQuestionSectionLinks = test.questionSectionLinks ? 
        test.questionSectionLinks.map((link: any) => ({
          questionId: questionIdMap.get(link.questionId) || link.questionId,
          sectionId: sectionIdMap.get(link.sectionId) || link.sectionId
        })) : 
        // Обратная совместимость: создаем связи из старой структуры
        test.sections.flatMap((section: any) => 
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      setCurrentTest(newTest)
      return newTest
    } catch (error) {
      throw new Error(`Failed to import test: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  // Инициализация при создании store
  if (import.meta.client) {
    initializeFromStorage()
  }

  return {
    // Состояние
    currentTest: readonly(currentTest),
    isEditing: readonly(isEditing),
    
    // Действия
    setCurrentTest,
    updateTest,
    clearTest,
    exportTest,
    importTest,
    setEditing: (editing: boolean) => { isEditing.value = editing }
  }
}) 