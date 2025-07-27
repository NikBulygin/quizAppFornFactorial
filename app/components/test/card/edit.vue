<template>
  <UCard>
    <template #header>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h3 class="text-base sm:text-lg font-semibold">
          {{ isEditing ? 'Редактировать тест' : 'Создать тест' }}
        </h3>
        <UButton
          v-if="isEditing"
          type="button"
          color="red"
          variant="soft"
          size="sm"
          @click="$emit('delete')"
        >
          <UIcon name="i-heroicons-trash" class="w-4 h-4" />
          <span class="hidden sm:inline">Удалить</span>
        </UButton>
      </div>
    </template>

    <form @submit.prevent="$emit('save', formData)">
      <div class="space-y-3 sm:space-y-4 lg:space-y-6">
        <!-- Basic Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <UFormField label="Название теста" required>
            <UInput
              v-model="formData.title"
              placeholder="Введите название теста"
              :error="errors.title"
              size="sm"
            />
          </UFormField>

          <UFormField label="Сложность" required>
            <USelect
              v-model="formData.difficulty"
              :options="difficultyOptions"
              placeholder="Выберите сложность"
              :error="errors.difficulty"
              size="sm"
            />
          </UFormField>
        </div>

        <UFormField label="Описание" required>
          <UTextarea
            v-model="formData.description"
            placeholder="Введите описание теста"
            :rows="2"
            :error="errors.description"
            size="sm"
          />
        </UFormField>

        <!-- Image Upload -->
        <UFormField label="Изображение">
          <CommonImageUpload
            v-model="formData.image"
            :alt="formData.title || 'Test image'"
            :convert-url-to-base64="false"
            :compress-files="true"
            :max-file-size="5 * 1024 * 1024"
            @upload="handleImageUpload"
            @error="handleImageError"
          />
        </UFormField>

        <!-- Settings -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <UFormField label="Время выполнения (мин)" required>
            <UInput
              v-model.number="formData.estimatedTime"
              type="number"
              min="1"
              placeholder="45"
              :error="errors.estimatedTime"
              size="sm"
            />
          </UFormField>

          <UFormField label="Общий балл" required>
            <UInput
              v-model.number="formData.totalPoints"
              type="number"
              min="1"
              placeholder="100"
              :error="errors.totalPoints"
              size="sm"
            />
          </UFormField>

          <UFormField label="Дедлайн">
            <UInput
              v-model="formData.deadline"
              type="datetime-local"
              :error="errors.deadline"
              size="sm"
            />
          </UFormField>
        </div>

        <!-- Tags -->
        <UFormField label="Теги">
          <UInputTags
            v-model="formData.tags"
            placeholder="Добавить тег"
            :error="errors.tags"
            size="sm"
          />
        </UFormField>

        <!-- Status -->
        <UFormField label="Статус" required>
          <USelect
            v-model="formData.status"
            :options="statusOptions"
            placeholder="Выберите статус"
            :error="errors.status"
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
          Отмена
        </UButton>
        <div class="flex items-center gap-2">
          <UButton
            v-if="isEditing"
            type="button"
            variant="outline"
            size="sm"
            @click="$emit('preview')"
          >
            <UIcon name="i-heroicons-eye" class="w-4 h-4" />
            <span class="hidden sm:inline">Предварительный просмотр</span>
          </UButton>
          <UButton
            type="submit"
            color="primary"
            :loading="isSaving"
            size="sm"
            @click="$emit('save', formData)"
          >
            <UIcon name="i-heroicons-check" class="w-4 h-4" />
            {{ isEditing ? 'Сохранить' : 'Создать' }}
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { ImageUploadResult } from '~/shared/utils/image'

interface Props {
  test?: Test
  isSaving?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  test: undefined,
  isSaving: false
})

defineEmits<{
  save: [test: Partial<Test>]
  cancel: []
  delete: []
  preview: []
}>()

const formData = ref<Partial<Test>>({
  title: props.test?.title || '',
  description: props.test?.description || '',
  difficulty: props.test?.difficulty || 'beginner',
  status: props.test?.status || 'draft',
  image: props.test?.image || undefined,
  estimatedTime: props.test?.estimatedTime || 30,
  totalPoints: props.test?.totalPoints || 100,
  deadline: props.test?.deadline || undefined,
  tags: props.test?.tags || []
})

const errors = ref<Record<string, string>>({})

const isEditing = computed(() => !!props.test)

const difficultyOptions = [
  { label: 'Начинающий', value: 'beginner' },
  { label: 'Средний', value: 'intermediate' },
  { label: 'Продвинутый', value: 'advanced' },
  { label: 'Эксперт', value: 'expert' }
]

const statusOptions = [
  { label: 'Черновик', value: 'draft' },
  { label: 'Опубликован', value: 'published' },
  { label: 'Архив', value: 'archived' }
]

const handleImageUpload = (result: ImageUploadResult) => {
}

const handleImageError = (error: string) => {
}

const _validateForm = () => {
  errors.value = {}
  
  if (!formData.value.title?.trim()) {
    errors.value.title = 'Название обязательно'
  }
  
  if (!formData.value.description?.trim()) {
    errors.value.description = 'Описание обязательно'
  }
  
  if (!formData.value.difficulty) {
    errors.value.difficulty = 'Выберите сложность'
  }
  
  if (!formData.value.estimatedTime || formData.value.estimatedTime < 1) {
    errors.value.estimatedTime = 'Время должно быть больше 0'
  }
  
  if (!formData.value.totalPoints || formData.value.totalPoints < 1) {
    errors.value.totalPoints = 'Балл должен быть больше 0'
  }
  
  return Object.keys(errors.value).length === 0
}
</script> 