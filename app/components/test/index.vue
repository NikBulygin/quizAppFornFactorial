<template>
  <div class="min-h-screen">
    <!-- Header с таймером и кнопкой навигации -->
    <div class="border-b p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-900 sticky top-0 z-40">
      <div class="flex items-center justify-between gap-3 sm:gap-4">
        <!-- Левая часть: информация о тесте -->
        <div class="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <UAvatar
            :src="test.image"
            :alt="test.title"
            size="md"
            class="flex-shrink-0"
          />
          <div class="min-w-0 flex-1">
            <h1 class="text-lg sm:text-xl lg:text-2xl font-bold truncate">{{ test.title }}</h1>
            <p class="text-xs sm:text-sm truncate text-gray-600 dark:text-gray-400">{{ test.description }}</p>
          </div>
        </div>

        <!-- Центральная часть: таймер -->
        <div class="flex items-center justify-center">
          <TestTimer
            :timer="timer"
            :show-warning="true"
            :warning-threshold="300"
          />
        </div>

        <!-- Правая часть: кнопки действий -->
        <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <!-- Кнопка завершения теста -->
          <UButton
            v-if="showExitButton"
            :color="isTestCompleted ? 'success' : 'error'"
            variant="soft"
            size="sm"
            @click="$emit('exit')"
          >
            <UIcon 
              :name="isTestCompleted ? 'i-heroicons-check-circle' : 'i-heroicons-flag'" 
              class="w-4 h-4" 
            />
            <span class="hidden sm:inline">
              {{ isTestCompleted ? t('test.pass.finish') : t('test.pass.exit') }}
            </span>
          </UButton>
              <!-- Навигация как выдвигающееся меню справа -->
      <UDrawer 
        v-model="isNavigationOpen" 
        direction="right"
        :title="t('navigation.title')"
        :description="t('navigation.description')"
      >
        <UButton
          color="primary"
          variant="soft"
          size="sm"
        >
          <UIcon name="i-heroicons-bars-3" class="w-4 h-4 mr-2" />
          <span class="hidden sm:inline">{{ t('navigation.title') }}</span>
        </UButton>

        <template #content>
          <div class="p-4 h-full overflow-y-auto">
            <TestNavigation
              :navigation="navigation"
              :timer="timer"
              :show-warning="true"
              :warning-threshold="300"
              @section-change="$emit('sectionChange', $event)"
              @question-change="$emit('questionChange', $event)"
              @finish-test="$emit('finish')"
            />
          </div>
        </template>
      </UDrawer>
        </div>
      </div>
    </div>

    <!-- Main content - фиксированная ширина по центру -->
    <div class="flex justify-center">
      <div class="w-full max-w-4xl p-3 sm:p-4 lg:p-6">
        <!-- Question area -->
        <div class="border rounded-lg p-3 sm:p-4 lg:p-6 mb-3 sm:mb-4 lg:mb-6">
          <TestQuestion
            v-if="currentQuestion"
            :question="currentQuestion"
            :variant="questionVariant"
            :show-answers="showAnswers"
            :show-explanation="showExplanation"
            :user-answer="userAnswers[currentQuestion?.id]"
            :disabled="isTestCompleted"
            @answer="$emit('answer', $event)"
          />
          <div v-else class="text-center py-8">
            <UIcon name="i-heroicons-question-mark-circle" class="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p class="text-gray-600 dark:text-gray-400">{{ t('test.pass.noQuestion') }}</p>
          </div>
        </div>

        <!-- Navigation buttons -->
        <div class="border rounded-lg p-3 sm:p-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <UButton
              :disabled="!canGoPrevious"
              variant="soft"
              size="sm"
              @click="$emit('previous')"
            >
              <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
              <span class="hidden sm:inline">{{ t('test.pass.previous') }}</span>
            </UButton>

            <div class="flex items-center justify-center gap-2">
              <span class="text-xs sm:text-sm font-medium">
                {{ t('test.pass.questionProgress', { current: currentQuestionIndex + 1, total: totalQuestions }) }}
              </span>
            </div>

            <UButton
              v-if="!isLastQuestion"
              :disabled="!canGoNext"
              variant="soft"
              size="sm"
              @click="$emit('next')"
            >
              <span class="hidden sm:inline">{{ t('test.pass.next') }}</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </UButton>

            <UButton
              v-else
              color="primary"
              size="sm"
              @click="$emit('finish')"
            >
              <span class="hidden sm:inline">{{ t('test.pass.finish') }}</span>
              <UIcon name="i-heroicons-check" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  test: Test
  currentQuestion?: TestQuestion
  currentQuestionIndex: number
  totalQuestions: number
  navigation: TestNavigation
  timer: TestTimer
  userAnswers: Record<string, UserAnswer>
  questionVariant?: 'default' | 'compact' | 'preview'
  showAnswers?: boolean
  showExplanation?: boolean
  showExitButton?: boolean
  canGoPrevious?: boolean
  canGoNext?: boolean
  isTestCompleted?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentQuestion: undefined,
  questionVariant: 'default',
  showAnswers: false,
  showExplanation: false,
  showExitButton: true,
  canGoPrevious: true,
  canGoNext: true,
  isTestCompleted: false
})

defineEmits<{
  sectionChange: [sectionIndex: number]
  questionChange: [questionIndex: number]
  answer: [answer: UserAnswer]
  previous: []
  next: []
  finish: []
  exit: []
}>()

const isNavigationOpen = ref(false)

const isLastQuestion = computed(() => 
  props.currentQuestionIndex === props.totalQuestions - 1
)
</script> 