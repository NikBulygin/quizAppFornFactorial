<template>
  <div class="h-full flex flex-col">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-4 border-b">
      <h3 class="text-base sm:text-lg font-semibold">{{ t('navigation.title') }}</h3>
      <div class="flex items-center gap-2">
        <TestTimer
          v-if="timer"
          :timer="timer"
          :show-warning="showWarning"
          :warning-threshold="warningThreshold"
        />
        <!-- Кнопка завершения теста -->
        <UButton
          :variant="progressPercentage >= 100 ? 'solid' : 'outline'"
          :color="progressPercentage >= 100 ? 'primary' : 'neutral'"
          size="sm"
          @click="handleFinishTest"
        >
          <UIcon 
            :name="progressPercentage >= 100 ? 'i-heroicons-check-circle' : 'i-heroicons-flag'"
            class="w-4 h-4 mr-1"
          />
          <span class="hidden sm:inline">
            {{ t('navigation.finish') }}
          </span>
        </UButton>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto space-y-4 sm:space-y-6 py-4">
      <!-- Навигация по разделам -->
      <div class="space-y-2 sm:space-y-3">
        <h4 class="text-sm sm:text-base font-semibold">{{ t('navigation.sections') }}</h4>
        <div class="space-y-2">
          <UButton
            v-for="(section, index) in navigation.sections"
            :key="section.id"
            :variant="index === navigation.currentSection ? 'solid' : 'outline'"
            :color="index === navigation.currentSection ? 'primary' : 'neutral'"
            class="w-full justify-between"
            @click="$emit('sectionChange', index)"
          >
            <div class="flex items-center gap-2 min-w-0 flex-1">
              <UIcon 
                :name="section.isCompleted ? 'i-heroicons-check-circle' : 'i-heroicons-square-3-stack-3d'"
                class="w-4 h-4 flex-shrink-0"
              />
              <span class="text-sm font-medium truncate">{{ section.title }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm flex-shrink-0">
              <div class="flex items-center gap-1">
                <CommonSvgNumber
                  :number="section.completedQuestions"
                  size="md"
                  :show-circle="false"
                />
                <span class="text-xs">/</span>
                <CommonSvgNumber
                  :number="section.questionCount"
                  size="md"
                  :show-circle="false"
                />
              </div>
              <UIcon name="i-heroicons-chevron-right" class="w-4 h-4" />
            </div>
          </UButton>
        </div>
      </div>

      <!-- Навигация по вопросам текущего раздела -->
      <div v-if="currentSectionQuestions.length > 0" class="space-y-2 sm:space-y-3">
        <h4 class="text-sm sm:text-base font-semibold">{{ t('navigation.questions') }}</h4>
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-16 3xl:grid-cols-20 gap-1 sm:gap-2">
          <UButton
            v-for="(question, index) in currentSectionQuestions"
            :key="question.id"
            :variant="getQuestionVariant(question.id)"
            :color="getQuestionColor(question.id)"
            size="sm"
            class="aspect-square p-0 min-w-0 flex items-center justify-center transition-all duration-200"
            @click="$emit('questionChange', index)"
          >
            <CommonSvgNumber
              :number="index + 1"
              :size="getQuestionButtonSize()"
              :show-circle="false"
            />
          </UButton>
        </div>
      </div>

      <!-- Статистика прогресса -->
      <div class="pt-4 border-t">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm sm:text-base font-semibold">{{ t('navigation.progress') }}</h4>
            <div class="flex items-center gap-2">
              <CommonSvgNumber
                :number="progressPercentage"
                size="md"
                :show-circle="false"
              />
              <span class="text-sm">%</span>
            </div>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-primary-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${progressPercentage}%` }"
            />
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{{ t('navigation.status.answered') }}: {{ answeredQuestionsCount }}</span>
            <span>{{ t('navigation.status.notAnswered') }}: {{ totalQuestions - answeredQuestionsCount }}</span>
          </div>
          
          <!-- Легенда статусов -->
          <div class="pt-3 border-t">
            <h5 class="text-xs font-medium mb-2">{{ t('navigation.status.legend') }}</h5>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded bg-neutral-200 dark:bg-neutral-700"></div>
                <span>{{ t('navigation.status.notAnswered') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded bg-primary-500"></div>
                <span>{{ t('navigation.status.current') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded bg-success-500"></div>
                <span>{{ t('navigation.status.answered') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded bg-error-500"></div>
                <span>{{ t('navigation.status.incorrect') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  navigation: TestNavigation
  timer?: TestTimer
  showWarning?: boolean
  warningThreshold?: number
  onSectionChange?: (sectionIndex: number) => void
  onQuestionChange?: (questionIndex: number) => void
}

const props = withDefaults(defineProps<Props>(), {
  timer: undefined,
  showWarning: false,
  warningThreshold: 300,
  onSectionChange: undefined,
  onQuestionChange: undefined
})

const emit = defineEmits<{
  sectionChange: [sectionIndex: number]
  questionChange: [questionIndex: number]
  finishTest: []
}>()

const handleFinishTest = () => {
  if (progressPercentage.value >= 100) {
    emit('finishTest')
  } else {
    emit('finishTest')
  }
}

const currentSectionQuestions = computed(() => {
  const currentSection = props.navigation.sections[props.navigation.currentSection]
  if (!currentSection) return []
  
  const questionIds = currentSection.questionIds || 
    Array.from({ length: currentSection.questionCount }, (_, i) => `question-${i}`)
  
  return questionIds.map((questionId) => ({
    id: questionId,
    status: getQuestionStatus(questionId)
  }))
})

const getQuestionStatus = (questionId: string): 'outline' | 'primary' | 'success' | 'error' => {
  const status = props.navigation.questionStatuses[questionId]
  
  if (!status) {
    return 'outline' // Не отвечен
  }
  
  return status
}

const progressPercentage = computed(() => {
  const totalQuestions = props.navigation.sections.reduce((sum, section) => sum + section.questionCount, 0)
  const answeredQuestions = Object.values(props.navigation.questionStatuses).filter(
    status => status === 'primary' || status === 'success' || status === 'error'
  ).length
  
  return totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0
})

const totalQuestions = computed(() => {
  return props.navigation.sections.reduce((sum, section) => sum + section.questionCount, 0)
})

const answeredQuestionsCount = computed(() => {
  return Object.values(props.navigation.questionStatuses).filter(
    status => status === 'primary' || status === 'success' || status === 'error'
  ).length
})

const getQuestionVariant = (questionId: string) => {
  const status = getQuestionStatus(questionId)
  
  switch (status) {
    case 'primary':
      return 'solid' // Отвечен (текущий)
    case 'success':
      return 'solid' // Правильный ответ
    case 'error':
      return 'solid' // Неправильный ответ
    default:
      return 'outline' // Не отвечен
  }
}

const getQuestionColor = (questionId: string) => {
  const status = getQuestionStatus(questionId)
  
  switch (status) {
    case 'primary':
      return 'primary' // Отвечен (текущий)
    case 'success':
      return 'success' // Правильный ответ
    case 'error':
      return 'error' // Неправильный ответ
    default:
      return 'neutral' // Не отвечен
  }
}

const getQuestionButtonSize = () => {
  const questionCount = currentSectionQuestions.value.length
  
  if (questionCount > 80) return 'xs'
  if (questionCount > 50) return 'sm'
  if (questionCount > 20) return 'md'
  if (questionCount > 10) return 'lg'
  
  return 'lg'
}
</script> 