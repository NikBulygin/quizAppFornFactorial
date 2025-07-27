<template>
  <UCard
    :class="[
      'transition-all duration-200 hover:shadow-lg',
      clickable ? 'cursor-pointer hover:scale-105' : ''
    ]"
    @click="clickable ? $emit('click') : undefined"
  >
    <!-- Изображение теста -->
    <div v-if="test.image" class="relative">
      <img
        :src="test.image"
        :alt="test.title"
        class="w-full h-48 object-cover rounded-t-lg"
      />
      <!-- Бейдж результата если тест пройден -->
      <div
        v-if="userResult"
        class="absolute top-2 right-2"
      >
        <UBadge
          :color="userResult.isPassed ? 'success' : 'error'"
          size="lg"
        >
          {{ userResult.totalPoints }}/{{ userResult.maxPoints }}
        </UBadge>
      </div>
    </div>

    <!-- Содержимое карточки -->
    <div class="p-4 space-y-3">
      <!-- Заголовок и автор -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold line-clamp-2">{{ test.title }}</h3>
        <p v-if="test.description" class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {{ test.description }}
        </p>

        <!-- Теги -->
        <div v-if="test.tags && test.tags.length > 0" class="flex flex-wrap gap-1 mt-2">
          <UBadge
            v-for="tag in test.tags.slice(0, 3)"
            :key="tag"
            color="primary"
            variant="soft"
            size="xs"
          >
            {{ tag }}
          </UBadge>
          <UBadge
            v-if="test.tags.length > 3"
            color="neutral"
            variant="soft"
            size="xs"
          >
            +{{ test.tags.length - 3 }}
          </UBadge>
        </div>
      </div>

      <!-- Информация о тесте -->
      <div class="flex flex-wrap gap-2 text-xs">
        <!-- Количество вопросов -->
        <UBadge color="gray" size="sm">
          <UIcon name="i-heroicons-question-mark-circle" class="w-3 h-3 mr-1" />
          {{ totalQuestions }} {{ t('test.card.questions') }}
        </UBadge>

        <!-- Время прохождения -->
        <UBadge v-if="test.timeLimit" color="blue" size="sm">
          <UIcon name="i-heroicons-clock" class="w-3 h-3 mr-1" />
          {{ test.timeLimit }} {{ t('test.card.minutes') }}
        </UBadge>

        <!-- Дедлайн -->
        <UBadge v-if="test.deadline" color="orange" size="sm">
          <UIcon name="i-heroicons-calendar" class="w-3 h-3 mr-1" />
          {{ formatDeadline(test.deadline) }}
        </UBadge>

        <!-- Автор -->
        <UBadge v-if="showAuthor" color="purple" size="sm">
          <UIcon name="i-heroicons-user" class="w-3 h-3 mr-1" />
          {{ test.author.name }}
        </UBadge>
      </div>

      <!-- Статистика (если тест пройден) -->
      <div v-if="userResult" class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">{{ t('test.card.yourResult') }}</span>
          <span class="text-sm font-bold" :class="getResultColorClass()">
            {{ userResult.percentage }}%
          </span>
        </div>
        
        <!-- Прогресс-бар результата -->
        <div class="w-full rounded-full h-2 bg-gray-200 dark:bg-gray-700">
          <div 
            class="h-2 rounded-full transition-all duration-300"
            :class="getResultColorClass()"
            :style="{ width: `${userResult.percentage}%` }"
          />
        </div>

        <!-- Дополнительная информация о результате -->
        <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>{{ t('test.card.completedAt') }}: {{ formatDate(userResult.completedAt) }}</span>
          <span>{{ formatTime(userResult.timeSpent) }}</span>
        </div>
      </div>

      <!-- Статистика теста (если не пройден) -->
      <div v-else-if="showStats" class="space-y-2">
        <div class="flex items-center justify-between text-sm">
          <span>{{ t('test.card.totalPoints') }}</span>
          <span class="font-medium">{{ totalPoints }}</span>
        </div>
        
        <div class="flex items-center justify-between text-sm">
          <span>{{ t('test.card.estimatedTime') }}</span>
          <span class="font-medium">{{ estimatedTime }} {{ t('test.card.minutes') }}</span>
        </div>
      </div>

      <!-- Действия -->
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2">
          <!-- Статус теста -->
          <UBadge
            v-if="userResult"
            :color="userResult.isPassed ? 'success' : 'error'"
            size="sm"
          >
            {{ userResult.isPassed ? t('test.card.passed') : t('test.card.failed') }}
          </UBadge>
          
          <!-- Попытки -->
          <UBadge v-if="userResult && attempts > 1" color="gray" size="sm">
            {{ attempts }} {{ t('test.card.attempts') }}
          </UBadge>
        </div>

        <!-- Кнопки действий -->
        <div class="flex items-center gap-2">
          <UButton
            v-if="userResult"
            variant="ghost"
            size="sm"
            @click="$emit('viewResult')"
          >
            <UIcon name="i-heroicons-eye" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ t('test.card.viewResult') }}</span>
          </UButton>
          
          <UButton
            v-if="userResult && canRetake"
            variant="ghost"
            size="sm"
            @click="$emit('retake')"
          >
            <UIcon name="i-heroicons-arrow-path" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ t('test.card.retake') }}</span>
          </UButton>
          
          <UButton
            v-else-if="!userResult"
            color="primary"
            size="sm"
            @click="$emit('start')"
          >
            <UIcon name="i-heroicons-play" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ t('test.card.start') }}</span>
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  test: Test
  userResult?: TestResult
  attempts?: number
  canRetake?: boolean
  variant?: 'default' | 'compact' | 'detailed'
  showAuthor?: boolean
  showStats?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  userResult: undefined,
  attempts: 1,
  canRetake: true,
  variant: 'default',
  showAuthor: true,
  showStats: true,
  clickable: false
})

defineEmits<{
  click: []
  start: []
  retake: []
  viewResult: []
}>()

const totalQuestions = computed(() => {
  return props.test.questions.length
})

const totalPoints = computed(() => {
  return props.test.questions.reduce((sum, question) => sum + question.points, 0)
})

const estimatedTime = computed(() => {
  return props.test.timeLimit || Math.ceil(totalQuestions.value * 2) // 2 минуты на вопрос по умолчанию
})

const getResultColorClass = () => {
  if (!props.userResult) return ''
  
  const percentage = props.userResult.percentage
  if (percentage >= 80) return 'bg-success'
  if (percentage >= 60) return 'bg-warning'
  return 'bg-error'
}

const formatDeadline = (deadline: string) => {
  const date = new Date(deadline)
  const now = new Date()
  const diffTime = date.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 0) {
    return t('test.card.expired')
  } else if (diffDays === 0) {
    return t('test.card.today')
  } else if (diffDays === 1) {
    return t('test.card.tomorrow')
  } else if (diffDays <= 7) {
    return t('test.card.inDays', { days: diffDays })
  } else {
    return date.toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' })
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}`
  }
  return `${minutes} ${t('test.card.minutes')}`
}
</script> 