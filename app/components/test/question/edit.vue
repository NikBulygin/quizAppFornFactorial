<template>
  <UCard>
    <template #header>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h3 class="text-base sm:text-lg font-semibold">
          {{ isEditing ? t('question.edit.editTitle') : t('question.edit.title') }}
        </h3>
        <UButton
          v-if="isEditing"
          type="button"
          color="error"
          variant="soft"
          size="sm"
          @click="$emit('delete')"
        >
          <UIcon name="i-heroicons-trash" class="w-4 h-4" />
          <span class="hidden sm:inline">{{ t('question.edit.actions.delete') }}</span>
        </UButton>
      </div>
    </template>

    <form @submit.prevent="$emit('save', formData)">
      <div class="space-y-3 sm:space-y-4 lg:space-y-6">
        <!-- Basic Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <UFormField :label="t('question.edit.questionTitle')" required>
            <UInput
              v-model="formData.title"
              :placeholder="t('question.edit.questionTitlePlaceholder')"
              :error="errors.title"
              size="sm"
            />
          </UFormField>

          <UFormField :label="t('question.edit.difficulty')" required>
            <USelect
              v-model="formData.difficulty"
              :items="difficultyItems"
              :placeholder="t('question.edit.selectDifficulty')"
              :error="errors.difficulty"
              size="sm"
            />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <UFormField :label="t('question.edit.points')" required>
            <UInput
              v-model.number="formData.points"
              type="number"
              min="1"
              placeholder="5"
              :error="errors.points"
              size="sm"
            />
          </UFormField>
        </div>

        <UFormField :label="t('question.edit.description')">
          <UTextarea
            v-model="formData.description"
            :placeholder="t('question.edit.descriptionPlaceholder')"
            :rows="2"
            :error="errors.description"
            size="sm"
          />
        </UFormField>

        <!-- Image Upload -->
        <UFormField :label="t('question.edit.image')">
          <CommonImageUpload
            v-model="formData.image"
            :alt="formData.title || 'Question image'"
            :convert-url-to-base64="true"
            :compress-files="true"
            :max-file-size="5 * 1024 * 1024"
            @upload="handleImageUpload"
            @error="handleImageError"
          />
        </UFormField>

        <!-- Answers Section -->
        <div class="space-y-2 sm:space-y-3 lg:space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <h4 class="text-sm sm:text-base font-semibold">{{ t('question.edit.answers.title') }}</h4>
            <UButton
              type="button"
              variant="outline"
              size="sm"
              @click="addAnswer"
            >
              <UIcon name="i-heroicons-plus" class="w-4 h-4" />
              <span class="hidden sm:inline">{{ t('question.edit.answers.addAnswer') }}</span>
            </UButton>
          </div>

          <div v-if="formData.answers?.length === 0" class="text-center py-4 sm:py-6 lg:py-8">
            <UIcon name="i-heroicons-question-mark-circle" class="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2" />
            <p class="text-sm">{{ t('question.edit.answers.addPrompt') }}</p>
          </div>

          <div v-else class="space-y-2 sm:space-y-3">
            <div
              v-for="(answer, index) in formData.answers"
              :key="answer.id"
              class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 border rounded-lg"
            >
              <div class="flex-1 space-y-2">
                <UInput
                  v-model="answer.description"
                  :placeholder="`${t('question.edit.answers.answerPlaceholder')} ${index + 1}`"
                  :error="errors[`answer-${index}`]"
                  size="sm"
                />
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <UCheckbox
                    :model-value="formData.correctAnswerIds?.includes(answer.id)"
                    :label="t('question.edit.answers.correctLabel')"
                    size="sm"
                    @update:model-value="handleCorrectnessChange(answer.id, $event)"
                  />
                </div>
              </div>
              <UButton
                type="button"
                color="error"
                variant="soft"
                size="sm"
                @click="removeAnswer(index)"
              >
                <UIcon name="i-heroicons-trash" class="w-4 h-4" />
              </UButton>
            </div>
          </div>
        </div>

        <!-- Explanation -->
        <UFormField :label="t('question.edit.explanation')">
          <UTextarea
            v-model="formData.explanation"
            :placeholder="t('question.edit.explanationPlaceholder')"
            :rows="2"
            :error="errors.explanation"
            size="sm"
          />
        </UFormField>
      </div>
    </form>

    <!-- Actions -->
    <template #footer>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <UButton
          type="button"
          variant="soft"
          size="sm"
          @click="$emit('cancel')"
        >
          {{ t('question.edit.actions.cancel') }}
        </UButton>
        <div class="flex items-center gap-2">
          <UButton
            v-if="isEditing"
            type="button"
            variant="outline"
            color="info"
            size="sm"
            @click="$emit('preview')"
          >
            <UIcon name="i-heroicons-eye" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ t('question.edit.actions.preview') }}</span>
          </UButton>
          <UButton
            type="submit"
            color="success"
            :loading="isSaving"
            size="sm"
            @click="$emit('save', formData)"
          >
            <UIcon name="i-heroicons-check" class="w-4 h-4" />
            {{ isEditing ? t('question.edit.actions.save') : t('question.edit.actions.create') }}
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { ImageUploadResult } from '~/shared/utils/image'

const { t } = useI18n()

interface Props {
  question?: TestQuestion
  isSaving?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  question: undefined,
  isSaving: false
})

defineEmits<{
  save: [question: Partial<TestQuestion>]
  cancel: []
  delete: []
  preview: []
}>()

const formData = ref<Partial<TestQuestion>>({
  title: props.question?.title || '',
  description: props.question?.description || '',
  difficulty: props.question?.difficulty || 'easy',
  points: props.question?.points || 5,
  image: props.question?.image || undefined,
  explanation: props.question?.explanation || '',
  answers: props.question?.answers || [],
  correctAnswerIds: props.question?.correctAnswerIds || []
})

const errors = ref<Record<string, string>>({})

const isEditing = computed(() => !!props.question)

const difficultyItems = [
  { label: t('question.difficulties.easy'), value: 'easy' },
  { label: t('question.difficulties.medium'), value: 'medium' },
  { label: t('question.difficulties.hard'), value: 'hard' }
]

const addAnswer = () => {
  if (!formData.value.answers) {
    formData.value.answers = []
  }
  
  formData.value.answers.push({
    id: `answer-${Date.now()}`,
    description: ''
  })
}

const removeAnswer = (index: number) => {
  if (formData.value.answers) {
    const removedAnswer = formData.value.answers[index]
    formData.value.answers.splice(index, 1)
    
    // Удаляем ID ответа из правильных ответов, если он там был
    if (formData.value.correctAnswerIds) {
      const answerIndex = formData.value.correctAnswerIds.indexOf(removedAnswer.id)
      if (answerIndex > -1) {
        formData.value.correctAnswerIds.splice(answerIndex, 1)
      }
    }
  }
}

// Обработчик изменения правильности ответа
const handleCorrectnessChange = (answerId: string, isCorrect: boolean) => {
  if (!formData.value.correctAnswerIds) {
    formData.value.correctAnswerIds = []
  }
  
  if (isCorrect) {
    // Добавляем ID в правильные ответы, если его там нет
    if (!formData.value.correctAnswerIds.includes(answerId)) {
      formData.value.correctAnswerIds.push(answerId)
    }
  } else {
    // Удаляем ID из правильных ответов
    const index = formData.value.correctAnswerIds.indexOf(answerId)
    if (index > -1) {
      formData.value.correctAnswerIds.splice(index, 1)
    }
  }
}

const handleImageUpload = (result: ImageUploadResult) => {
  console.log('Image uploaded:', result)
}

const handleImageError = (error: string) => {
  console.error('Image upload error:', error)
}
</script> 