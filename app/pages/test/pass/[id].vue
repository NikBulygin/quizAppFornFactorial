<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Загрузка -->
    <div v-if="loading || testPassStore.isLoading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ testPassStore.isLoading ? t('test.pass.restoring') : t('test.pass.loading') }}
        </p>
      </div>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center max-w-md mx-auto p-6">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('test.pass.error') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-6">{{ error }}</p>
        <div class="flex gap-4 justify-center">
          <UButton @click="loadTest">
            {{ t('test.pass.retry') }}
          </UButton>
          <UButton
            variant="outline"
            @click="$router.push('/test/search')"
          >
            {{ t('test.pass.backToSearch') }}
          </UButton>
        </div>
      </div>
    </div>

    <!-- Интерфейс теста -->
    <div v-else-if="testPassStore.test && testPassStore.currentTestPass" class="min-h-screen">
      <!-- Header с таймером и прогрессом -->
      <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <!-- Название теста -->
            <div class="flex-1">
              <h1 class="text-xl font-semibold text-gray-900 dark:text-white truncate">
                {{ testPassStore.test.title }}
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('test.pass.questionProgress', { current: testPassStore.currentQuestionIndex + 1, total: testPassStore.totalQuestions }) }}
              </p>
            </div>

            <!-- Прогресс -->
            <div class="flex items-center gap-4">
              <div class="text-center">
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ testPassStore.answeredQuestionsCount }}/{{ testPassStore.totalQuestions }}
                </div>
                <div class="text-xs text-gray-500">{{ t('test.pass.answered') }}</div>
              </div>
              
              <!-- Прогресс бар -->
              <div class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: `${(testPassStore.answeredQuestionsCount / testPassStore.totalQuestions) * 100}%` }"
                ></div>
              </div>

              <!-- Таймер -->
              <div class="text-center">
                <div class="text-lg font-mono font-bold text-gray-900 dark:text-white">
                  {{ formatTime(testPassStore.currentTestPass.timeSpent) }}
                </div>
                <div class="text-xs text-gray-500">{{ t('test.pass.time') }}</div>
              </div>
            </div>

            <!-- Кнопка выхода -->
            <UButton
              variant="ghost"
              color="error"
              @click="confirmExit"
              class="ml-4"
            >
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
            </UButton>
          </div>
        </div>
      </div>

      <!-- Основной контент -->
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <!-- Текущий вопрос -->
          <div v-if="testPassStore.currentQuestion" class="mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <!-- Заголовок вопроса -->
              <div class="mb-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {{ testPassStore.currentQuestionIndex + 1 }}
                    </span>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                      {{ testPassStore.currentQuestion.title }}
                    </h2>
                    <p v-if="testPassStore.currentQuestion.description" class="text-gray-600 dark:text-gray-400 mt-2">
                      {{ testPassStore.currentQuestion.description }}
                    </p>
                  </div>
                </div>

                <!-- Изображение вопроса -->
                <div v-if="testPassStore.currentQuestion.image" class="mb-4">
                  <img 
                    :src="testPassStore.currentQuestion.image" 
                    :alt="testPassStore.currentQuestion.title"
                    class="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <!-- Варианты ответов -->
              <div class="space-y-3">
                <div
                  v-for="answer in testPassStore.currentQuestion.answers"
                  :key="answer.id"
                  class="relative"
                >
                  <input
                    :id="answer.id"
                    :type="(testPassStore.currentQuestion?.correctAnswersCount || 1) > 1 ? 'checkbox' : 'radio'"
                    :name="`question-${testPassStore.currentQuestion.id}`"
                    :value="answer.id"
                    :checked="isAnswerSelected(answer.id)"
                    @change="toggleAnswer(answer.id)"
                    class="sr-only"
                  />
                  <label
                    :for="answer.id"
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                    :class="{
                      'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isAnswerSelected(answer.id),
                      'border-gray-200 dark:border-gray-600': !isAnswerSelected(answer.id)
                    }"
                  >
                    <div class="flex items-center justify-center w-5 h-5 border-2 rounded mr-3 transition-all duration-200"
                         :class="{
                           'border-blue-500 bg-blue-500': isAnswerSelected(answer.id),
                           'border-gray-300 dark:border-gray-500': !isAnswerSelected(answer.id)
                         }">
                      <UIcon 
                        v-if="isAnswerSelected(answer.id)"
                        name="i-heroicons-check" 
                        class="w-3 h-3 text-white" 
                      />
                    </div>
                    <span class="text-gray-900 dark:text-white">{{ answer.text }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Навигация -->
          <div class="flex items-center justify-between">
            <UButton
              variant="outline"
              :disabled="testPassStore.currentQuestionIndex === 0"
              @click="previousQuestion"
            >
              <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
              {{ t('test.pass.previous') }}
            </UButton>

            <div class="flex items-center gap-2">
              <UButton
                v-if="testPassStore.currentQuestionIndex < testPassStore.totalQuestions - 1"
                color="primary"
                @click="nextQuestion"
              >
                {{ t('test.pass.next') }}
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
              </UButton>
              
              <UButton
                v-else
                color="success"
                @click="finishTest"
              >
                {{ t('test.pass.finish') }}
                <UIcon name="i-heroicons-check" class="w-4 h-4 ml-2" />
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const testPassStore = useTestPassStore()

// Состояние
const loading = ref(true)
const error = ref<string | null>(null)

// Загрузка теста
const loadTest = async () => {
  loading.value = true
  error.value = null
  
  try {
    const testId = route.params.id as string
    const response = await $fetch<TestApiResponse>(`/api/test/${testId}`)
    
    if (!response.success || !response.data) {
      throw new Error(response.error || t('test.pass.testNotFound'))
    }

    // Запускаем тест (store автоматически проверит восстановление)
    await testPassStore.startTest(response.data)
    
  } catch (err) {
    error.value = err instanceof Error ? err.message : t('test.pass.error')
  } finally {
    loading.value = false
  }
}

// Навигация по вопросам
const nextQuestion = () => {
  if (testPassStore.currentQuestionIndex < testPassStore.totalQuestions - 1) {
    testPassStore.updateCurrentPosition(
      testPassStore.currentTestPass!.currentSectionIndex,
      testPassStore.currentQuestionIndex + 1
    )
  }
}

const previousQuestion = () => {
  if (testPassStore.currentQuestionIndex > 0) {
    testPassStore.updateCurrentPosition(
      testPassStore.currentTestPass!.currentSectionIndex,
      testPassStore.currentQuestionIndex - 1
    )
  }
}

// Работа с ответами
const isAnswerSelected = (answerId: string): boolean => {
  if (!testPassStore.currentQuestion || !testPassStore.currentTestPass) return false
  
  const userAnswer = testPassStore.currentTestPass.userAnswers[testPassStore.currentQuestion.id]
  return userAnswer?.answerIds.includes(answerId) || false
}

const toggleAnswer = (answerId: string) => {
  if (!testPassStore.currentQuestion || !testPassStore.currentTestPass) return
  
  const questionId = testPassStore.currentQuestion.id
  const currentAnswers = testPassStore.currentTestPass.userAnswers[questionId]?.answerIds || []
  
  let newAnswers: string[]
  
  if ((testPassStore.currentQuestion?.correctAnswersCount || 1) > 1) {
    // Множественный выбор
    if (currentAnswers.includes(answerId)) {
      newAnswers = currentAnswers.filter(id => id !== answerId)
    } else {
      newAnswers = [...currentAnswers, answerId]
    }
  } else {
    // Единичный выбор
    newAnswers = [answerId]
  }
  
  testPassStore.saveAnswer(questionId, newAnswers)
}

// Завершение теста
const finishTest = async () => {
  try {
    await testPassStore.completeTest()
    router.push(`/test/result/${testPassStore.currentTestPass!.testId}`)
  } catch (err) {
    console.error('Error finishing test:', err)
  }
}

// Подтверждение выхода
const confirmExit = () => {
  if (confirm(t('test.pass.exitConfirmation'))) {
    testPassStore.clearTest()
    router.push('/test/search')
  }
}

// Форматирование времени
const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// Инициализация
onMounted(() => {
  loadTest()
})

// Очистка при уходе со страницы
onBeforeUnmount(() => {
  // Не очищаем тест при уходе, чтобы сохранить прогресс
})
</script> 