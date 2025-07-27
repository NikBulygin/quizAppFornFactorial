<template>
  <div class="ai-test-generator">
    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-purple-500" />
          <h3 class="text-lg font-semibold">{{ t('aiTestGenerator.title') }}</h3>
        </div>
      </template>

      <div class="space-y-6">
        <!-- Форма генерации -->
        <UForm :validate="validate" :state="state" class="space-y-6" @submit="onSubmit">
          <!-- Тема теста -->
          <UFormField
            :label="t('aiTestGenerator.topic')"
            name="topic"
          >
            <UInput
              v-model="state.topic"
              :placeholder="t('aiTestGenerator.topicPlaceholder')"
              :disabled="isGenerating"
            />
            <template #help>
              {{ t('aiTestGenerator.topicHelp') }}
            </template>
          </UFormField>

          <!-- Описание -->
          <UFormField
            :label="t('aiTestGenerator.descriptionLabel')"
            name="description"
          >
            <UTextarea
              v-model="state.description"
              :placeholder="t('aiTestGenerator.descriptionPlaceholder')"
              :disabled="isGenerating"
              :rows="3"
            />
            <template #help>
              {{ t('aiTestGenerator.descriptionHelp') }}
            </template>
          </UFormField>

          <!-- Настройки -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Количество легких вопросов -->
            <UFormField
              :label="t('aiTestGenerator.easyQuestions')"
              name="easyQuestions"
            >
              <UInput
                v-model.number="state.easyQuestions"
                type="number"
                min="0"
                max="50"
                :disabled="isGenerating"
              />
              <template #help>
                {{ t('aiTestGenerator.easyQuestionsHelp') }}
              </template>
            </UFormField>

            <!-- Количество средних вопросов -->
            <UFormField
              :label="t('aiTestGenerator.mediumQuestions')"
              name="mediumQuestions"
            >
              <UInput
                v-model.number="state.mediumQuestions"
                type="number"
                min="0"
                max="50"
                :disabled="isGenerating"
              />
              <template #help>
                {{ t('aiTestGenerator.mediumQuestionsHelp') }}
              </template>
            </UFormField>

            <!-- Количество сложных вопросов -->
            <UFormField
              :label="t('aiTestGenerator.hardQuestions')"
              name="hardQuestions"
            >
              <UInput
                v-model.number="state.hardQuestions"
                type="number"
                min="0"
                max="50"
                :disabled="isGenerating"
              />
              <template #help>
                {{ t('aiTestGenerator.hardQuestionsHelp') }}
              </template>
            </UFormField>

            <!-- Время -->
            <UFormField
              :label="t('aiTestGenerator.timeLimit')"
              name="timeLimit"
            >
              <UInput
                v-model.number="state.timeLimit"
                type="number"
                min="10"
                max="180"
                :disabled="isGenerating"
              />
              <template #help>
                {{ t('aiTestGenerator.timeLimitHelp') }}
              </template>
            </UFormField>
          </div>

          <!-- Теги -->
          <UFormField
            :label="t('aiTestGenerator.tags')"
            name="tags"
          >
            <UInput
              v-model="state.tags"
              :placeholder="t('aiTestGenerator.tagsPlaceholder')"
              :disabled="isGenerating"
            />
            <template #help>
              {{ t('aiTestGenerator.tagsHelp') }}
            </template>
          </UFormField>

          <!-- Дополнительные требования -->
          <UFormField
            :label="t('aiTestGenerator.additionalPrompts')"
            name="additionalPrompts"
          >
            <UTextarea
              v-model="state.additionalPrompts"
              :placeholder="t('aiTestGenerator.additionalPromptsPlaceholder')"
              :disabled="isGenerating"
              :rows="3"
            />
            <template #help>
              {{ t('aiTestGenerator.additionalPromptsHelp') }}
            </template>
          </UFormField>

          <!-- Кнопка генерации -->
          <div class="flex justify-end">
            <UButton
              type="submit"
              :loading="isGenerating"
              :disabled="!state.topic.trim()"
              color="primary"
            >
              <UIcon name="i-heroicons-sparkles" class="w-4 h-4 mr-2" />
              {{ t('aiTestGenerator.generate') }}
            </UButton>
          </div>
        </UForm>

        <!-- Сообщения об ошибках -->
        <UAlert
          v-if="error"
          color="error"
          variant="soft"
          :title="t('common.error')"
          :description="error"
        />

        <!-- Результат генерации -->
        <div v-if="generatedTest" class="space-y-4">
          <UAlert
            color="success"
            variant="soft"
            :title="t('aiTestGenerator.successTitle')"
            :description="t('aiTestGenerator.successDescription')"
          />

          <!-- Предварительный просмотр -->
          <UCard>
            <template #header>
              <h4 class="font-semibold">{{ t('aiTestGenerator.preview') }}</h4>
            </template>

            <div class="space-y-4">
              <div>
                <h5 class="font-medium text-lg">{{ generatedTest.title }}</h5>
                <p v-if="generatedTest.description" class="text-gray-600 dark:text-gray-400">
                  {{ generatedTest.description }}
                </p>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span class="text-gray-500">{{ t('test.card.questions') }}:</span>
                  <span class="font-medium">{{ generatedTest.questions.length }}</span>
                </div>
                <div>
                  <span class="text-gray-500">{{ t('test.card.minutes') }}:</span>
                  <span class="font-medium">{{ generatedTest.timeLimit }}</span>
                </div>
                <div>
                  <span class="text-gray-500">{{ t('aiTestGenerator.difficulty') }}:</span>
                  <span class="font-medium">
                    {{ t('question.difficulties.easy') }}: {{ state.easyQuestions }}, 
                    {{ t('question.difficulties.medium') }}: {{ state.mediumQuestions }}, 
                    {{ t('question.difficulties.hard') }}: {{ state.hardQuestions }}
                  </span>
                </div>
                <div>
                  <span class="text-gray-500">{{ t('test.edit.tags') }}:</span>
                  <span class="font-medium">{{ generatedTest.tags?.join(', ') || '-' }}</span>
                </div>
              </div>

              <!-- Действия -->
              <div class="flex gap-2">
                <UButton
                  @click="editGeneratedTest"
                  color="primary"
                >
                  <UIcon name="i-heroicons-pencil-square" class="w-4 h-4 mr-2" />
                  {{ t('aiTestGenerator.edit') }}
                </UButton>
                <UButton
                  @click="saveGeneratedTest"
                  color="success"
                >
                  <UIcon name="i-heroicons-check" class="w-4 h-4 mr-2" />
                  {{ t('aiTestGenerator.save') }}
                </UButton>
                <UButton
                  @click="regenerateTest"
                  variant="outline"
                >
                  <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 mr-2" />
                  {{ t('aiTestGenerator.regenerate') }}
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError } from '@nuxt/ui'

const { t } = useI18n()
const router = useRouter()
const editTestStore = useEditTestStore()

const isGenerating = ref(false)
const error = ref<string | null>(null)
const generatedTest = ref<Test | null>(null)

const validate = (values: typeof state): FormError[] => {
  const errors: FormError[] = []

  if (!values.topic || values.topic.trim().length === 0) {
    errors.push({ name: 'topic', message: t('aiTestGenerator.errors.topicRequired') })
  } else if (values.topic.trim().length < 3) {
    errors.push({ name: 'topic', message: t('aiTestGenerator.errors.topicTooShort') })
  }

  if (values.easyQuestions < 0 || values.easyQuestions > 50) {
    errors.push({ name: 'easyQuestions', message: t('aiTestGenerator.errors.easyQuestionsRange') })
  }
  if (values.mediumQuestions < 0 || values.mediumQuestions > 50) {
    errors.push({ name: 'mediumQuestions', message: t('aiTestGenerator.errors.mediumQuestionsRange') })
  }
  if (values.hardQuestions < 0 || values.hardQuestions > 50) {
    errors.push({ name: 'hardQuestions', message: t('aiTestGenerator.errors.hardQuestionsRange') })
  }
  if (values.timeLimit < 10 || values.timeLimit > 180) {
    errors.push({ name: 'timeLimit', message: t('aiTestGenerator.errors.timeLimitRange') })
  }

  return errors
}

const state = reactive({
  topic: '',
  description: '',
  easyQuestions: 3,
  mediumQuestions: 5,
  hardQuestions: 2,
  timeLimit: 60,
  tags: '',
  additionalPrompts: ''
})

async function onSubmit(event: FormSubmitEvent<unknown>) {
  const formData = event.data as typeof state
  
  isGenerating.value = true
  error.value = null
  generatedTest.value = null

  try {
    const totalQuestions = formData.easyQuestions + formData.mediumQuestions + formData.hardQuestions
    
    if (totalQuestions === 0) {
      error.value = t('aiTestGenerator.errors.noQuestions')
      return
    }

    const response = await $fetch<{ success: boolean; data?: Test; error?: string }>('/api/ai/generate-test', {
      method: 'POST',
      body: {
        topic: formData.topic.trim(),
        description: formData.description.trim() || undefined,
        easyQuestions: formData.easyQuestions,
        mediumQuestions: formData.mediumQuestions,
        hardQuestions: formData.hardQuestions,
        timeLimit: formData.timeLimit,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        additionalPrompts: formData.additionalPrompts.trim() || undefined
      }
    })

    if (response.success && response.data) {
      const processedTest = {
        ...response.data,
        questions: response.data.questions.map(q => ({
          ...q,
          correctAnswerIds: q.correctAnswerIds || []
        }))
      }
      generatedTest.value = processedTest
    } else {
      error.value = response.error || t('aiTestGenerator.generationError')
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : t('aiTestGenerator.generationError')
  } finally {
    isGenerating.value = false
  }
}

const editGeneratedTest = () => {
  if (!generatedTest.value) return
  
  const processedTest = {
    ...generatedTest.value,
    questions: generatedTest.value.questions.map(q => ({
      ...q,
      correctAnswerIds: q.correctAnswerIds || []
    }))
  }
  
  editTestStore.setCurrentTest(processedTest)
  router.push('/test/edit/new')
}

const saveGeneratedTest = async () => {
  if (!generatedTest.value) return

  try {
    const processedTest = {
      ...generatedTest.value,
      questions: generatedTest.value.questions.map(q => ({
        ...q,
        correctAnswerIds: q.correctAnswerIds || []
      }))
    }
    
    await editTestStore.createTest(processedTest)
    await router.push('/test/list')
  } catch {
    error.value = t('aiTestGenerator.saveError')
  }
}

const regenerateTest = () => {
  generatedTest.value = null
  const form = document.querySelector('form')
  if (form) {
    form.dispatchEvent(new Event('submit', { bubbles: true }))
  }
}
</script> 