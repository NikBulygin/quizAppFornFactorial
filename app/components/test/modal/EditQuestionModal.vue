<template>
  <UModal 
    :title="t('question.edit.editTitle')"
    :description="t('question.edit.descriptionPlaceholder')"
    :ui="{ content: 'min-w-[90vw] min-h-[90vh]' }">
    <UButton 
      :label="t('question.edit.editTitle')" 
      variant="subtle" 
      icon="i-heroicons-pencil"
    />

    <template #body>
      <TestQuestionEdit
        :question="question"
        @save="updateQuestion"
        @cancel="cancelEditQuestion"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  question: TestQuestion
}

const props = defineProps<Props>()

function cancelEditQuestion() {
  // Модальное окно закроется автоматически
}

function updateQuestion(updatedQuestion: Partial<TestQuestion>) {
  // Обновляем вопрос с новыми данными
  const question: TestQuestion = {
    ...props.question,
    ...updatedQuestion
  }
  
  // Emit event to parent
  emit('question-updated', question)
}

const emit = defineEmits<{
  'question-updated': [question: TestQuestion]
}>()
</script> 