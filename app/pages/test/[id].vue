<template>
  <div>
    <!-- Загрузка -->
    <div v-if="isLoading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 mx-auto animate-spin mb-4" />
        <p>{{ t('common.loading') }}</p>
      </div>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 mx-auto text-red-500 mb-4" />
        <p class="text-red-600">{{ error }}</p>
        <UButton @click="retryLoad" class="mt-4">
          {{ t('common.retry') }}
        </UButton>
      </div>
    </div>

    <!-- Тест не найден -->
    <div v-else-if="!test" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <UIcon name="i-heroicons-question-mark-circle" class="w-8 h-8 mx-auto text-gray-400 mb-4" />
        <p class="text-gray-600">{{ t('test.pass.testNotFound') }}</p>
        <UButton @click="$router.push('/')" class="mt-4">
          {{ t('navigation.back') }}
        </UButton>
      </div>
    </div>

    <!-- Активный тест -->
    <div v-else-if="testPassStore.hasActiveTest" class="min-h-screen">
      <TestIndex
        :test="test"
        :current-question="testPassStore.currentQuestion || undefined"
        :current-question-index="testPassStore.currentTestPass?.currentQuestionIndex || 0"
        :total-questions="testPassStore.totalQuestions"
        :navigation="navigation"
        :timer="timer"
        :user-answers="JSON.parse(JSON.stringify(testPassStore.currentTestPass?.userAnswers || {}))"
        :show-answers="true"
        :can-go-previous="canGoPrevious"
        :can-go-next="canGoNext"
        :is-test-completed="testPassStore.currentTestPass?.isCompleted || false"
        @section-change="handleSectionChange"
        @question-change="handleQuestionChange"
        @answer="handleAnswer"
        @previous="handlePrevious"
        @next="handleNext"
        @finish="handleFinish"
        @exit="handleExit"
      />
    </div>

    <!-- Начало теста -->
    <div v-else class="min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-4xl mx-auto">
        <!-- Информация о тесте -->
        <UCard class="mb-6">
          <div class="flex items-start gap-4">
            <UAvatar
              :src="test.image"
              :alt="test.title"
              size="lg"
              class="flex-shrink-0"
            />
            <div class="flex-1">
              <h1 class="text-2xl font-bold mb-2">{{ test.title }}</h1>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ test.description }}</p>
              
              <!-- Статистика теста -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary">{{ test.questions.length }}</div>
                  <div class="text-sm text-gray-600">{{ t('test.card.questions') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary">{{ test.sections.length }}</div>
                  <div class="text-sm text-gray-600">{{ t('navigation.sections') }}</div>
                </div>
                <div class="text-center" v-if="test.timeLimit">
                  <div class="text-2xl font-bold text-primary">{{ test.timeLimit }}</div>
                  <div class="text-sm text-gray-600">{{ t('test.card.minutes') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary">{{ totalPoints }}</div>
                  <div class="text-sm text-gray-600">{{ t('test.card.totalPoints') }}</div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Инструкции -->
        <UCard class="mb-6">
          <template #header>
            <h3 class="font-semibold">{{ t('test.pass.instructions') }}</h3>
          </template>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p class="font-medium">{{ t('test.pass.instruction1') }}</p>
                <p class="text-sm text-gray-600">{{ t('test.pass.instruction1Desc') }}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p class="font-medium">{{ t('test.pass.instruction2') }}</p>
                <p class="text-sm text-gray-600">{{ t('test.pass.instruction2Desc') }}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p class="font-medium">{{ t('test.pass.instruction3') }}</p>
                <p class="text-sm text-gray-600">{{ t('test.pass.instruction3Desc') }}</p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Кнопки действий -->
        <div class="flex flex-col sm:flex-row gap-4">
          <UButton
            color="primary"
            size="lg"
            class="flex-1"
            @click="startTest"
          >
            <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
            {{ t('test.card.start') }}
          </UButton>
          
          <UButton
            variant="outline"
            size="lg"
            @click="$router.push('/')"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-2" />
            {{ t('navigation.back') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestPassStore } from '~/stores/testPass'
import TestIndex from '~/components/test/index.vue'
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const testPassStore = useTestPassStore()

const isLoading = ref(true)
const error = ref<string | null>(null)
const test = ref<Test | null>(null)

const totalPoints = computed(() => {
  if (!test.value) return 0
  return test.value.questions.reduce((sum, q) => sum + q.points, 0)
})

const navigation = computed((): TestNavigation => {
  if (!test.value || !testPassStore.currentTestPass) {
    return {
      sections: [],
      currentSection: 0,
      currentQuestion: 0,
      questionStatuses: {}
    }
  }

  const sections = test.value.sections.map((section, _sectionIndex) => {
    const questionsInSection = test.value!.questions.filter(q => 
      test.value!.questionSectionLinks.some(link => 
        link.questionId === q.id && link.sectionId === section.id
      )
    )
    
    const completedQuestions = questionsInSection.filter(q => 
      testPassStore.currentTestPass!.userAnswers[q.id]
    ).length

    return {
      id: section.id,
      title: section.title,
      questionCount: questionsInSection.length,
      completedQuestions,
      isCompleted: completedQuestions === questionsInSection.length,
      questionIds: questionsInSection.map(q => q.id) // Добавляем ID вопросов
    }
  })

  return {
    sections,
    currentSection: testPassStore.currentTestPass.currentSectionIndex,
    currentQuestion: testPassStore.currentTestPass.currentQuestionIndex,
    questionStatuses: testPassStore.questionStatuses
  }
})

const timer = computed((): TestTimer => {
  if (!test.value || !testPassStore.currentTestPass) {
    return { mode: 'time' }
  }

  return {
    mode: test.value.timeLimit ? 'countdown' : 'time',
    timeLimit: test.value.timeLimit,
    deadline: test.value.deadline
  }
})

const canGoPrevious = computed(() => {
  if (!testPassStore.currentTestPass) return false
  return testPassStore.currentTestPass.currentQuestionIndex > 0 || 
         testPassStore.currentTestPass.currentSectionIndex > 0
})

const canGoNext = computed(() => {
  if (!testPassStore.currentTestPass || !test.value) return false
  
  const currentSection = test.value.sections[testPassStore.currentTestPass.currentSectionIndex]
  if (!currentSection) return false
  
  const questionsInSection = test.value.questions.filter(q => 
    test.value!.questionSectionLinks.some(link => 
      link.questionId === q.id && link.sectionId === currentSection.id
    )
  )
  
  return testPassStore.currentTestPass.currentQuestionIndex < questionsInSection.length - 1 ||
         testPassStore.currentTestPass.currentSectionIndex < test.value.sections.length - 1
})

const loadTest = async () => {
  isLoading.value = true
  error.value = null
  
  try {
    if (testPassStore.test && testPassStore.test.id === route.params.id) {
      test.value = JSON.parse(JSON.stringify(testPassStore.originalTest || testPassStore.test))
      isLoading.value = false
      return
    }
    
    
    const testData: Test = {
      id: route.params.id as string,
      title: 'Пример теста',
      description: 'Описание теста для демонстрации',
      timeLimit: 60,
      randomizeQuestions: false,
      randomizeAnswers: false,
      difficultyDistribution: { easy: 40, medium: 50, hard: 10 },
      sections: [
        { id: 'section-1', title: 'Раздел 1', description: 'Первый раздел' },
        { id: 'section-2', title: 'Раздел 2', description: 'Второй раздел' }
      ],
      questions: [
        {
          id: 'q1',
          title: 'Какой язык программирования используется в этом проекте?',
          description: 'Выберите правильный ответ',
          difficulty: 'easy',
          points: 1,
          answers: [
            { id: 'a1', text: 'JavaScript' },
            { id: 'a2', text: 'Python' },
            { id: 'a3', text: 'Java' },
            { id: 'a4', text: 'C++' }
          ],
          correctAnswerIds: ['a1']
        },
        {
          id: 'q2',
          title: 'Какой фреймворк используется для фронтенда?',
          description: 'Выберите все правильные ответы',
          difficulty: 'medium',
          points: 2,
          answers: [
            { id: 'a5', text: 'Vue.js' },
            { id: 'a6', text: 'Nuxt.js' },
            { id: 'a7', text: 'React' },
            { id: 'a8', text: 'Angular' }
          ],
          correctAnswerIds: ['a5', 'a6']
        }
      ],
      questionSectionLinks: [
        { questionId: 'q1', sectionId: 'section-1' },
        { questionId: 'q2', sectionId: 'section-2' }
      ],
      author: {
        id: 'author-1',
        name: 'Автор теста',
        email: 'author@example.com',
        picture: '',
        role: 'user'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    test.value = testData
    
    if (testPassStore.hasActiveTest && testPassStore.currentTestPass?.testId !== testData.id) {
      testPassStore.clearTest()
    }
    
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Неизвестная ошибка'
  } finally {
    isLoading.value = false
  }
}

const retryLoad = () => {
  loadTest()
}

const startTest = () => {
  if (!test.value) return
  
  testPassStore.startTest(test.value)
}

const handleSectionChange = (sectionIndex: number) => {
  testPassStore.updateCurrentPosition(sectionIndex, 0)
}

const handleQuestionChange = (questionIndex: number) => {
  if (!testPassStore.currentTestPass) return
  testPassStore.updateCurrentPosition(
    testPassStore.currentTestPass.currentSectionIndex,
    questionIndex
  )
}

const handleAnswer = (answer: UserAnswer) => {
  testPassStore.saveAnswer(answer.questionId, answer.answerIds)
}

const handlePrevious = () => {
  if (!testPassStore.currentTestPass || !test.value) return
  
  const { currentSectionIndex, currentQuestionIndex } = testPassStore.currentTestPass
  
  if (currentQuestionIndex > 0) {
    testPassStore.updateCurrentPosition(currentSectionIndex, currentQuestionIndex - 1)
  } else if (currentSectionIndex > 0) {
    const prevSection = test.value.sections[currentSectionIndex - 1]
    if (prevSection) {
      const questionsInPrevSection = test.value.questions.filter(q => 
        test.value!.questionSectionLinks.some(link => 
          link.questionId === q.id && link.sectionId === prevSection.id
        )
      )
      testPassStore.updateCurrentPosition(currentSectionIndex - 1, questionsInPrevSection.length - 1)
    }
  }
}

const handleNext = () => {
  if (!testPassStore.currentTestPass || !test.value) return
  
  const { currentSectionIndex, currentQuestionIndex } = testPassStore.currentTestPass
  const currentSection = test.value.sections[currentSectionIndex]
  
  if (!currentSection) return
  
  const questionsInSection = test.value.questions.filter(q => 
    test.value!.questionSectionLinks.some(link => 
      link.questionId === q.id && link.sectionId === currentSection.id
    )
  )
  
  if (currentQuestionIndex < questionsInSection.length - 1) {
    testPassStore.updateCurrentPosition(currentSectionIndex, currentQuestionIndex + 1)
  } else if (currentSectionIndex < test.value.sections.length - 1) {
    testPassStore.updateCurrentPosition(currentSectionIndex + 1, 0)
  }
}

const handleFinish = () => {
  testPassStore.completeTest()
}

const handleExit = () => {
  if (testPassStore.currentTestPass?.isCompleted) {
    testPassStore.clearTest()
    router.push('/')
  } else {
    if (confirm(t('test.pass.exitConfirmation'))) {
      testPassStore.clearTest()
      router.push('/')
    }
  }
}

onMounted(() => {
  loadTest()
})

onUnmounted(() => {
})
</script> 