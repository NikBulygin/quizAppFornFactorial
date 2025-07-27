<template>
  <div class="space-y-3 sm:space-y-4">
    <!-- Предварительный просмотр изображения -->
    <div v-if="modelValue" class="relative">
      <img
        :src="modelValue"
        :alt="alt"
        class="w-full max-w-md h-auto object-cover rounded-lg border"
        @error="handleImageError"
      >
      <UButton
        type="button"
        color="error"
        variant="soft"
        size="sm"
        class="absolute top-0 right-4"
        @click="$emit('update:modelValue', '')"
      >
        <UIcon name="i-heroicons-x-mark" class="w-4 h-4" />
      </UButton>
    </div>

    <!-- Форма загрузки -->
    <div v-else class="space-y-3 sm:space-y-4">
      <!-- URL изображения -->
      <div class="space-y-2">
        <UFormField :label="t('imageUpload.urlLabel')">
          <div class="flex gap-2">
            <UInput
              v-model="imageUrl"
              :placeholder="t('imageUpload.urlPlaceholder')"
              :error="urlError"
              size="sm"
              @keyup.enter="handleUrlUpload"
            />
            <UButton
              type="button"
              variant="outline"
              size="sm"
              :loading="isLoading"
              @click="handleUrlUpload"
            >
              <UIcon name="i-heroicons-link" class="w-4 h-4" />
              <span class="hidden sm:inline">{{ t('imageUpload.addUrl') }}</span>
            </UButton>
          </div>
        </UFormField>
      </div>

      <!-- Разделитель -->
      <div class="text-center">
        <span class="text-xs sm:text-sm text-gray-500">{{ t('imageUpload.or') }}</span>
      </div>

      <!-- Загрузка файла -->
      <div class="space-y-2">
        <UFormField :label="t('imageUpload.fileLabel')">
          <UInput
            ref="fileInput"
            type="file"
            accept="image/*"
            :error="fileError"
            size="sm"
            @change="handleFileUpload"
          />
          <p class="text-xs text-gray-500 mt-1">
            {{ t('imageUpload.fileHelp') }}
          </p>
        </UFormField>
      </div>

      <!-- Ошибки -->
      <UAlert
        v-if="error"
        color="error"
        variant="soft"
        size="sm"
        :title="t('imageUpload.error')"
        :description="error"
      />
    </div>

    <!-- Прогресс загрузки -->
    <div v-if="isLoading" class="space-y-2">
      <div class="flex items-center justify-between text-sm">
        <span>{{ t('imageUpload.processing') }}</span>
        <span v-if="uploadProgress > 0">{{ uploadProgress }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="bg-primary h-2 rounded-full transition-all duration-300"
          :style="{ width: `${uploadProgress}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ImageUploadResult } from '~/utils/image'
import {
  handleImageFileUpload,
  handleImageUrlUpload,
  isSupportedImageFormat,
  isValidImageUrl
} from '~/utils/image'

const { t } = useI18n()

interface Props {
  modelValue?: string
  alt?: string
  convertUrlToBase64?: boolean
  compressFiles?: boolean
  maxFileSize?: number // в байтах
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  alt: 'Image',
  convertUrlToBase64: false,
  compressFiles: true,
  maxFileSize: 5 * 1024 * 1024 // 5MB
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'upload': [result: ImageUploadResult]
  'error': [error: string]
}>()

const imageUrl = ref('')
const urlError = ref('')
const fileError = ref('')
const error = ref('')
const isLoading = ref(false)
const uploadProgress = ref(0)
const fileInput = ref<HTMLInputElement>()

// Обработка загрузки по URL
const handleUrlUpload = async () => {
  if (!imageUrl.value.trim()) {
    urlError.value = t('imageUpload.urlRequired')
    return
  }

  if (!isValidImageUrl(imageUrl.value)) {
    urlError.value = t('imageUpload.invalidUrl')
    return
  }

  try {
    isLoading.value = true
    uploadProgress.value = 10
    error.value = ''
    urlError.value = ''

    const result = await handleImageUrlUpload(
      imageUrl.value,
      props.convertUrlToBase64
    )

    uploadProgress.value = 100
    
    emit('update:modelValue', result.data)
    emit('upload', result)
    
    // Очищаем поле URL
    imageUrl.value = ''
    
  } catch {
    error.value = t('imageUpload.urlError')
    emit('error', error.value)
  } finally {
    isLoading.value = false
    uploadProgress.value = 0
  }
}

// Обработка загрузки файла
const handleFileUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (!file) {
    fileError.value = t('imageUpload.fileRequired')
    return
  }

  // Проверяем размер файла
  if (file.size > props.maxFileSize) {
    fileError.value = t('imageUpload.fileTooLarge', { 
      maxSize: formatFileSize(props.maxFileSize) 
    })
    return
  }

  // Проверяем формат файла
  if (!isSupportedImageFormat(file)) {
    fileError.value = t('imageUpload.unsupportedFormat')
    return
  }

  try {
    isLoading.value = true
    uploadProgress.value = 20
    error.value = ''
    fileError.value = ''

    const result = await handleImageFileUpload(file, props.compressFiles)
    
    uploadProgress.value = 100
    
    emit('update:modelValue', result.data)
    emit('upload', result)
    
    // Очищаем input для возможности повторной загрузки
    if (fileInput.value) {
      fileInput.value.value = ''
    }
    
  } catch {
    error.value = t('imageUpload.fileError')
    emit('error', error.value)
  } finally {
    isLoading.value = false
    uploadProgress.value = 0
  }
}

// Обработка ошибки загрузки изображения
const handleImageError = () => {
  error.value = t('imageUpload.loadError')
  emit('error', error.value)
}

// Утилита для форматирования размера файла
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script> 