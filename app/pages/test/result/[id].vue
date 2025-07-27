<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Загрузка -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin" />
        <span class="ml-2">{{ t('test.result.loading') }}</span>
      </div>

      <!-- Ошибка -->
      <div v-else-if="error" class="text-center py-12">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ t('test.result.error') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
        <UButton @click="loadResult">
          {{ t('test.result.retry') }}
        </UButton>
      </div>

      <!-- Результаты -->
      <div v-else-if="passedTest" class="max-w-4xl mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {{ t('test.result.title') }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            {{ test?.title }}
          </p>
        </div>

        <!-- Основная статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <UCard>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">
                {{ passedTest.percentage }}%
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('test.result.percentage') }}
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">
                {{ passedTest.totalScore }}/{{ passedTest.maxScore }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('test.result.score') }}
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">
                {{ formatTime(passedTest.timeSpent) }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('test.result.timeSpent') }}
              </div>
            </div>
          </UCard>
        </div>

        <!-- Статус прохождения -->
        <UCard class="mb-8">
          <div class="text-center">
            <div class="flex items-center justify-center gap-3 mb-4">
              <UIcon 
                :name="passedTest.isPassed ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
                :class="passedTest.isPassed ? 'text-green-600' : 'text-red-600'"
                class="w-8 h-8"
              />
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
                {{ passedTest.isPassed ? t('test.result.passed') : t('test.result.failed') }}
              </h2>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              {{ passedTest.isPassed 
                ? t('test.result.congratulations') 
                : t('test.result.notEnoughPoints') 
              }}
            </p>
          </div>
        </UCard>

        <!-- Детальные ответы -->
        <UCard v-if="test">
          <template #header>
            <h3 class="text-lg font-semibold">{{ t('test.result.detailedAnswers') }}</h3>
          </template>
          
          <div class="space-y-6">
            <div 
              v-for="(question, index) in test.questions" 
              :key="question.id"
              class="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
            >
              <div class="flex items-start gap-3 mb-4">
                <div class="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {{ index + 1 }}
                  </span>
                </div>
                <div class="flex-1">
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    {{ question.title }}
                  </h4>
                  <p v-if="question.description" class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {{ question.description }}
                  </p>
                  
                  <!-- Варианты ответов -->
                  <div class="space-y-2">
                    <div
                      v-for="answer in question.answers"
                      :key="answer.id"
                      class="flex items-center gap-3 p-3 rounded-lg border-2"
                      :class="{
                        'border-green-500 bg-green-50 dark:bg-green-900/20': isCorrectAnswer(question.id, answer.id),
                        'border-red-500 bg-red-50 dark:bg-red-900/20': isWrongAnswer(question.id, answer.id),
                        'border-gray-200 dark:border-gray-600': !isUserAnswer(question.id, answer.id) && !isCorrectAnswer(question.id, answer.id)
                      }"
                    >
                      <UIcon 
                        v-if="isCorrectAnswer(question.id, answer.id)"
                        name="i-heroicons-check-circle"
                        class="w-5 h-5 text-green-600 flex-shrink-0"
                      />
                      <UIcon 
                        v-else-if="isWrongAnswer(question.id, answer.id)"
                        name="i-heroicons-x-circle"
                        class="w-5 h-5 text-red-600 flex-shrink-0"
                      />
                      <div v-else class="w-5 h-5 flex-shrink-0"></div>
                      
                      <span class="text-gray-900 dark:text-white">
                        {{ answer.text }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Действия -->
        <div class="flex justify-center gap-4 mt-8">
          <UButton
            color="primary"
            @click="$router.push('/test/search')"
          >
            {{ t('test.result.findOtherTests') }}
          </UButton>
          
          <UButton
            variant="outline"
            @click="$router.push('/my-tests')"
          >
            {{ t('test.result.myTests') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

// Состояние
const loading = ref(true)
const error = ref<string | null>(null)
const passedTest = ref<PassedTest | null>(null)
const test = ref<Test | null>(null)

// Загрузка результатов
const loadResult = async () => {
  loading.value = true
  error.value = null
  
  try {
    const testId = route.params.id as string
    
    // Загружаем прохождение теста
    const response = await $fetch<PassedTestListApiResponse>('/api/passed-test/my')
    
    if (!response.success || !response.data) {
      throw new Error(t('test.result.loadError'))
    }
    
    const foundTest = response.data.find(pt => pt.testId === testId && pt.status === 'completed')
    
    if (!foundTest) {
      throw new Error(t('test.result.notFound'))
    }
    
    passedTest.value = foundTest
    
    // Загружаем данные теста
    const testResponse = await $fetch<TestApiResponse>(`/api/test/${testId}`)
    
    if (!testResponse.success || !testResponse.data) {
      throw new Error(t('test.result.testLoadError'))
    }
    
    test.value = testResponse.data
    
  } catch (err) {
    error.value = err instanceof Error ? err.message : t('test.result.error')
  } finally {
    loading.value = false
  }
}

// Проверка правильности ответа
const isCorrectAnswer = (questionId: string, answerId: string): boolean => {
  if (!test.value) return false
  
  const question = test.value.questions.find(q => q.id === questionId)
  return question?.correctAnswerIds?.includes(answerId) || false
}

// Проверка неправильного ответа пользователя
const isWrongAnswer = (questionId: string, answerId: string): boolean => {
  if (!passedTest.value || !test.value) return false
  
  const userAnswer = passedTest.value.userAnswers[questionId]
  const isUserSelected = userAnswer?.answerIds.includes(answerId) || false
  const isCorrect = isCorrectAnswer(questionId, answerId)
  
  return isUserSelected && !isCorrect
}

// Проверка ответа пользователя
const isUserAnswer = (questionId: string, answerId: string): boolean => {
  if (!passedTest.value) return false
  
  const userAnswer = passedTest.value.userAnswers[questionId]
  return userAnswer?.answerIds.includes(answerId) || false
}

// Форматирование времени
const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours}ч ${minutes}м ${secs}с`
  }
  return `${minutes}м ${secs}с`
}

// Инициализация
onMounted(() => {
  loadResult()
})
</script> 