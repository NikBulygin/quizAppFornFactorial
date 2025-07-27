<template>
  <UModal 
    :title="t('test.edit.editSection')"
    :description="t('test.edit.sectionDescriptionPlaceholder')"
    :ui="{ content: 'min-w-[90vw] min-h-[60vh]' }">
    <UButton 
      :label="t('test.edit.editSection')" 
      variant="subtle" 
      icon="i-heroicons-pencil"
    />

    <template #body>
      <div class="flex flex-col items-center justify-center h-full w-full p-8 gap-8">
        <UFormField
          :label="t('test.edit.sectionTitle')"
          required
          class="w-full max-w-xl"
        >
          <UInput
            v-model="editedSection.title"
            :placeholder="t('test.edit.sectionTitlePlaceholder')"
            size="lg"
          />
        </UFormField>
        <UFormField
          :label="t('test.edit.sectionDescription')"
          class="w-full max-w-xl"
        >
          <UTextarea
            v-model="editedSection.description"
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
            v-model.number="editedSection.questionCount"
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
            @click="cancelEditSection"
          >
            {{ t('test.edit.actions.cancel') }}
          </UButton>
          <UButton
            color="primary"
            size="lg"
            @click="updateSection"
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

interface Props {
  section: TestSection
}

const props = defineProps<Props>()

const editedSection = ref({
  title: props.section.title,
  description: props.section.description || '',
  questionCount: props.section.questionCount || 1
})

function updateSection() {
  const section: TestSection = {
    ...props.section,
    title: editedSection.value.title,
    description: editedSection.value.description,
    questionCount: editedSection.value.questionCount
  }
  
  emit('section-updated', section)
}

function cancelEditSection() {
  editedSection.value = {
    title: props.section.title,
    description: props.section.description || '',
    questionCount: props.section.questionCount || 1
  }
}

const emit = defineEmits<{
  'section-updated': [section: TestSection]
}>()
</script> 