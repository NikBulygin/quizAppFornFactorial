<template>
  <div class="space-y-6">
    <!-- Заголовок результатов -->
    <div class="text-center space-y-2">
      <h1 class="text-2xl sm:text-3xl font-bold">{{ t('result.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-400">{{ test.title }}</p>
    </div>

    <!-- Основная статистика -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Общий балл -->
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-3xl font-bold" :class="getScoreColorClass()">
            {{ result.totalPoints }}/{{ result.maxPoints }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('result.totalScore') }}
          </div>
        </div>
      </UCard>

      <!-- Процент выполнения -->
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-3xl font-bold" :class="getPercentageColorClass()">
            {{ result.percentage }}%
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('result.percentage') }}
          </div>
        </div>
      </UCard>

      <!-- Время прохождения -->
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-3xl font-bold text-primary">
            {{ formatTime(result.timeSpent) }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('result.timeSpent') }}
          </div>
        </div>
      </UCard>

      <!-- Статус прохождения -->
      <UCard>
        <div class="text-center space-y-2">
          <UBadge
            :color="result.isPassed ? 'success' : 'error'"
            size="lg"
            class="text-lg px-4 py-2"
          >
            {{ result.isPassed ? t('result.passed') : t('result.failed') }}
          </UBadge>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('result.status') }}
          </div>
        </div>
      </UCard>
    </div>

    <!-- Детальная статистика -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- График результатов -->
      <UCard>
        <template #header>
          <h3 class="font-semibold">{{ t('result.scoreBreakdown') }}</h3>
        </template>
        
        <div class="space-y-4">
          <!-- Прогресс-бар общего результата -->
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span>{{ t('result.overallProgress') }}</span>
              <span>{{ result.percentage }}%</span>
            </div>
            <div class="w-full rounded-full h-3 bg-gray-200 dark:bg-gray-700">
              <div 
                class="h-3 rounded-full transition-all duration-300"
                :class="getPercentageColorClass()"
                :style="{ width: `${result.percentage}%` }"
              />
            </div>
          </div>

          <!-- Статистика по сложности -->
          <div class="space-y-3">
            <h4 class="font-medium text-sm">{{ t('result.byDifficulty') }}</h4>
            <div class="space-y-2">
              <div 
                v-for="(stats, difficulty) in difficultyStats" 
                :key="difficulty"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <UBadge
                    :color="getDifficultyColor(difficulty)"
                    size="sm"
                  >
                    {{ t(`question.difficulties.${difficulty}`) }}
                  </UBadge>
                  <span class="text-sm">{{ stats.correct }}/{{ stats.total }}</span>
                </div>
                <span class="text-sm font-medium">{{ stats.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Временная статистика -->
      <UCard>
        <template #header>
          <h3 class="font-semibold">{{ t('result.timeAnalysis') }}</h3>
        </template>
        
        <div class="space-y-4">
          <!-- Время прохождения -->
          <div class="flex justify-between items-center">
            <span class="text-sm">{{ t('result.completionTime') }}</span>
            <span class="font-medium">{{ formatTime(result.timeSpent) }}</span>
          </div>

          <!-- Среднее время на вопрос -->
          <div class="flex justify-between items-center">
            <span class="text-sm">{{ t('result.averageTimePerQuestion') }}</span>
            <span class="font-medium">{{ formatTime(averageTimePerQuestion) }}</span>
          </div>

          <!-- Дата завершения -->
          <div class="flex justify-between items-center">
            <span class="text-sm">{{ t('result.completedAt') }}</span>
            <span class="font-medium">{{ formatDate(result.completedAt) }}</span>
          </div>

          <!-- Сравнение с лимитом времени -->
          <div v-if="test.timeLimit" class="flex justify-between items-center">
            <span class="text-sm">{{ t('result.timeLimit') }}</span>
            <span class="font-medium">{{ formatTime(test.timeLimit * 60) }}</span>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Детальные ответы -->
    <UCard>
      <template #header>
        <h3 class="font-semibold">{{ t('result.detailedAnswers') }}</h3>
      </template>
      
      <div class="space-y-4">
        <div
          v-for="(answer, index) in detailedAnswers"
          :key="answer.questionId"
          class="border rounded-lg p-4"
          :class="answer.isCorrect ? 'border-success' : 'border-error'"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ t('result.question') }} {{ index + 1 }}
              </span>
              <UBadge
                :color="answer.isCorrect ? 'success' : 'error'"
                size="sm"
              >
                {{ answer.isCorrect ? t('result.correct') : t('result.incorrect') }}
              </UBadge>
            </div>
            <div class="text-sm font-medium">
              {{ answer.points || 0 }} {{ t('question.display.points') }}
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="font-medium">{{ getQuestionById(answer.questionId)?.title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ getQuestionById(answer.questionId)?.description }}
            </p>
          </div>

          <!-- Выбранные ответы -->
          <div class="mt-3 space-y-2">
            <div class="text-sm font-medium">{{ t('result.selectedAnswers') }}:</div>
            <div class="space-y-1">
              <div
                v-for="answerId in answer.answerIds"
                :key="answerId"
                class="flex items-center gap-2 text-sm"
              >
                <UIcon
                  :name="isCorrectAnswer(answer.questionId, answerId) ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
                  :class="isCorrectAnswer(answer.questionId, answerId) ? 'text-success' : 'text-error'"
                  class="w-4 h-4"
                />
                <span>{{ getAnswerText(answer.questionId, answerId) }}</span>
              </div>
            </div>
          </div>

          <!-- Объяснение -->
          <div v-if="getQuestionById(answer.questionId)?.explanation" class="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <div class="text-sm font-medium mb-1">{{ t('question.display.explanation') }}:</div>
            <div class="text-sm">{{ getQuestionById(answer.questionId)?.explanation }}</div>
          </div>
        </div>
      </div>
    </UCard>

    <!-- Действия -->
    <div class="flex flex-col sm:flex-row gap-3 justify-center">
      <UButton
        color="primary"
        @click="$emit('retake')"
      >
        <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 mr-2" />
        {{ t('result.retakeTest') }}
      </UButton>
      
      <UButton
        variant="outline"
        @click="$emit('share')"
      >
        <UIcon name="i-heroicons-share" class="w-4 h-4 mr-2" />
        {{ t('result.shareResult') }}
      </UButton>
      
      <UButton
        variant="outline"
        @click="$emit('download')"
      >
        <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
        {{ t('result.downloadCertificate') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  test: Test
  result: TestResult
}

const props = defineProps<Props>()

defineEmits<{
  retake: []
  share: []
  download: []
}>()

const averageTimePerQuestion = computed(() => {
  return props.result.answers.length > 0 
    ? Math.round(props.result.timeSpent / props.result.answers.length)
    : 0
})

const detailedAnswers = computed(() => {
  return props.result.answers.map(answer => ({
    ...answer,
    question: getQuestionById(answer.questionId)
  }))
})

const difficultyStats = computed(() => {
  const stats = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } }
  
  props.result.answers.forEach(answer => {
    const question = getQuestionById(answer.questionId)
    if (question) {
      stats[question.difficulty].total++
      if (answer.isCorrect) {
        stats[question.difficulty].correct++
      }
    }
  })
  
  Object.keys(stats).forEach(difficulty => {
    const stat = stats[difficulty as keyof typeof stats]
    stat.percentage = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0
  })
  
  return stats
})

const getQuestionById = (id: string) => {
  return props.test.questions.find(q => q.id === id)
}

const getAnswerText = (questionId: string, answerId: string) => {
  const question = getQuestionById(questionId)
  return question?.answers.find(a => a.id === answerId)?.text || ''
}

const isCorrectAnswer = (questionId: string, answerId: string) => {
  const question = getQuestionById(questionId)
  return question?.correctAnswerIds.includes(answerId) || false
}

const getScoreColorClass = () => {
  const percentage = props.result.percentage
  if (percentage >= 80) return 'text-success'
  if (percentage >= 60) return 'text-warning'
  return 'text-error'
}

const getPercentageColorClass = () => {
  const percentage = props.result.percentage
  if (percentage >= 80) return 'bg-success'
  if (percentage >= 60) return 'bg-warning'
  return 'bg-error'
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'green'
    case 'medium': return 'yellow'
    case 'hard': return 'red'
    default: return 'gray'
  }
}

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
