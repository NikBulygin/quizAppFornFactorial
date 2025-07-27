<template>
  <div class="space-y-3 sm:space-y-4 lg:space-y-6">
    <!-- Question Header -->
    <div class="border-b pb-2 sm:pb-3 lg:pb-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div class="flex-1 min-w-0">
          <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">{{ question.title }}</h2>
          <p v-if="question.description" class="text-xs sm:text-sm mb-2 sm:mb-4">
            {{ question.description }}
          </p>
        </div>
        <div class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <UBadge
            color="neutral"
            variant="soft"
            size="xs"
            class="text-xs"
          >
            {{ question.difficulty }}
          </UBadge>
          <UBadge
            color="primary"
            variant="soft"
            size="xs"
            class="text-xs"
          >
            {{ question.points }} {{ t('question.display.points') }}
          </UBadge>
        </div>
      </div>
    </div>

    <!-- Question Image -->
    <div v-if="question.image" class="flex justify-center mb-3 sm:mb-4 lg:mb-6">
      <img
        :src="question.image"
        :alt="question.title"
        class="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto rounded-lg border"
      >
    </div>

    <!-- Question Content -->
    <div class="min-h-[150px] sm:min-h-[180px] lg:min-h-[200px]">
      <!-- Question Options -->
      <div class="space-y-2 sm:space-y-3">
        <!-- Один правильный ответ - используем URadioGroup -->
        <URadioGroup
          v-if="correctAnswersCount === 1"
          v-model="selectedSingleAnswer"
          :items="question.answers.map(answer => ({
            label: answer.text,
            value: answer.id,
            class: showAnswers && (isAnswerCorrect(answer.id) || isAnswerIncorrectlySelected(answer.id)) ? 'border-2' : ''
          }))"
          :disabled="variant === 'preview' || disabled"
          @update:model-value="handleSingleAnswer"
        />
        
        <!-- Несколько правильных ответов - используем UCheckboxGroup -->
        <UCheckboxGroup
          v-else
          v-model="selectedMultipleAnswers"
          :items="question.answers.map(answer => ({
            label: answer.text,
            value: answer.id,
            class: showAnswers && (isAnswerCorrect(answer.id) || isAnswerIncorrectlySelected(answer.id)) ? 'border-2' : ''
          }))"
          :disabled="variant === 'preview' || disabled"
          @update:model-value="handleMultipleAnswer"
        />
      </div>
    </div>

    <!-- Explanation -->
    <div v-if="showExplanation && question.explanation" class="border-t pt-2 sm:pt-3 lg:pt-4">
      <UAlert
        color="info"
        variant="soft"
        icon="i-heroicons-information-circle"
        size="sm"
      >
        <template #title>
          <span class="text-sm">{{ t('question.display.explanation') }}</span>
        </template>
        <template #description>
          <span class="text-xs sm:text-sm">{{ question.explanation }}</span>
        </template>
      </UAlert>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  question: TestQuestion
  variant?: 'default' | 'compact' | 'preview'
  showAnswers?: boolean
  showExplanation?: boolean
  userAnswer?: UserAnswer
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  showAnswers: false,
  showExplanation: false,
  userAnswer: undefined,
  disabled: false
})

const emit = defineEmits<{
  answer: [answer: UserAnswer]
}>()

const correctAnswersCount = computed(() => {
  return props.question.correctAnswersCount || props.question.correctAnswerIds?.length || 0
})

const isAnswerCorrect = (_answerId: string) => {
  return false
}

const isAnswerIncorrectlySelected = (_answerId: string) => {
  return false
}

const selectedSingleAnswer = ref(props.userAnswer?.answerIds?.[0] || '')
const selectedMultipleAnswers = ref(props.userAnswer?.answerIds || [])

const handleSingleAnswer = (answerId: string) => {
  const answer: UserAnswer = {
    questionId: props.question.id,
    answerIds: [answerId]
  }
  emit('answer', answer)
}

const handleMultipleAnswer = (answerIds: any[]) => {
  const answer: UserAnswer = {
    questionId: props.question.id,
    answerIds: answerIds.filter((id): id is string => typeof id === 'string')
  }
  emit('answer', answer)
}
</script> 