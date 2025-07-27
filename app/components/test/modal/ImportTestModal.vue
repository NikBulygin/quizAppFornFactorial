<template>
  <UModal 
    :title="t('test.edit.importTest')"
    :description="t('test.edit.importTestDescription')"
    :ui="{ content: 'min-w-[90vw] min-h-[60vh]' }">
    <UButton 
      :label="t('test.edit.actions.import')" 
      variant="subtle" 
      icon="i-heroicons-arrow-up-tray"
    />
    <template #body>
      <div class="space-y-4">
        <!-- Вкладки для выбора способа импорта -->
        <div class="flex border-b">
          <button
            class="px-4 py-2 border-b-2 transition-colors"
            :class="importMethod === 'text' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            @click="importMethod = 'text'"
          >
            {{ t('test.edit.importText') }}
          </button>
          <button
            class="px-4 py-2 border-b-2 transition-colors"
            :class="importMethod === 'file' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            @click="importMethod = 'file'"
          >
            {{ t('test.edit.importFile') }}
          </button>
        </div>

        <!-- Импорт через текст -->
        <div v-if="importMethod === 'text'">
          <UFormField :label="t('test.edit.importJson')">
            <UTextarea
              v-model="importJson"
              :placeholder="t('test.edit.importJsonPlaceholder')"
              :rows="10"
            />
          </UFormField>
        </div>

        <!-- Импорт через файл -->
        <div v-if="importMethod === 'file'">
          <UFormField :label="t('test.edit.importFile')">
            <div class="space-y-2">
              <input
                ref="fileInput"
                type="file"
                accept=".json"
                @change="handleFileUpload"
                class="hidden"
              />
              <UButton
                variant="outline"
                @click="fileInput?.click()"
                class="w-full"
              >
                <UIcon name="i-heroicons-arrow-up-tray" class="w-4 h-4 mr-2" />
                {{ t('test.edit.selectFile') }}
              </UButton>
              <p v-if="selectedFileName" class="text-sm text-gray-600">
                {{ t('test.edit.selectedFile') }}: {{ selectedFileName }}
              </p>
            </div>
          </UFormField>
        </div>
        
        <div class="flex justify-end gap-2">
          <UButton
            variant="outline"
            @click="cancelImport"
          >
            {{ t('test.edit.actions.cancel') }}
          </UButton>
          <UButton
            color="primary"
            @click="performImport"
            :disabled="!canImport"
          >
            {{ t('test.edit.actions.import') }}
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { t } = useI18n()

const importJson = ref('')
const importMethod = ref<'text' | 'file'>('text')
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFileName = ref<string | null>(null)

const canImport = computed(() => {
  if (importMethod.value === 'text') {
    return importJson.value.trim() !== ''
  } else if (importMethod.value === 'file') {
    return selectedFileName.value !== null
  }
  return false
})

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFileName.value = target.files[0]?.name || null
  } else {
    selectedFileName.value = null
  }
}

const performImport = () => {
  try {
    if (importMethod.value === 'text') {
      emit('import', importJson.value)
    } else if (importMethod.value === 'file') {
      if (!fileInput.value?.files || fileInput.value.files.length === 0) {
        throw new Error(t('test.edit.errors.fileRequired'))
      }
      const file = fileInput.value.files[0]
      if (!file) {
        throw new Error(t('test.edit.errors.fileRequired'))
      }
      if (file.type !== 'application/json') {
        throw new Error(t('test.edit.errors.invalidFileType'))
      }
      
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          emit('import', event.target.result as string)
        }
      }
      reader.readAsText(file)
    }
  } catch (error) {
  }
}

const cancelImport = () => {
  importJson.value = ''
  selectedFileName.value = null
  importMethod.value = 'text'
  emit('cancel')
}

const emit = defineEmits<{
  import: [jsonString: string]
  cancel: []
}>()
</script> 