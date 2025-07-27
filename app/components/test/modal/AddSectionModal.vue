<template>
  <UModal 
    :title="t('test.edit.addSection')"
    :description="t('test.edit.sectionDescriptionPlaceholder')"
    :ui="{ content: 'min-w-[90vw] min-h-[60vh]' }">
    <UButton 
      :label="t('test.edit.addSection')" 
      variant="subtle" 
      icon="i-heroicons-plus"
    />

    <template #body>
      <div class="flex flex-col items-center justify-center h-full w-full p-8 gap-8">
        <UFormField
          :label="t('test.edit.sectionTitle')"
          required
          class="w-full max-w-xl"
        >
          <UInput
            v-model="newSection.title"
            :placeholder="t('test.edit.sectionTitlePlaceholder')"
            size="lg"
          />
        </UFormField>
        <UFormField
          :label="t('test.edit.sectionDescription')"
          class="w-full max-w-xl"
        >
          <UTextarea
            v-model="newSection.description"
            :placeholder="t('test.edit.sectionDescriptionPlaceholder')"
            :rows="3"
            size="lg"
          />
        </UFormField>
        <UFormField
          :label="t('test.edit.sectionQuestionCount')"
          required
          class="w-full max-w-xl"
        >
          <UInput
            v-model.number="newSection.questionCount"
            type="number"
            min="1"
            max="100"
            :placeholder="t('test.edit.sectionQuestionCountPlaceholder')"
            size="lg"
          />
        </UFormField>
        <div class="flex flex-row gap-6 mt-8">
          <UButton
            variant="outline"
            size="lg"
            @click="cancelAddSection"
          >
            {{ t('test.edit.actions.cancel') }}
          </UButton>
          <UButton
            color="primary"
            size="lg"
            @click="addSection"
          >
            {{ t('test.edit.actions.save') }}
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { t } = useI18n()

const newSection = ref({
  title: '',
  description: '',
  questionCount: 10
})

function addSection() {
  const section: TestSection = {
    id: `section-${Date.now()}`,
    title: newSection.value.title,
    description: newSection.value.description,
    questionCount: newSection.value.questionCount,
    questions: []
  }
  
  // Emit event to parent
  emit('section-added', section)
  
  // Reset form
  newSection.value = { title: '', description: '', questionCount: 10 }
}

function cancelAddSection() {
  // Reset form
  newSection.value = { title: '', description: '', questionCount: 10 }
}

const emit = defineEmits<{
  'section-added': [section: TestSection]
}>()
</script> 