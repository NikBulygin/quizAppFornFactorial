<template>
  <UModal 
    :title="t('question.edit.title')"
    :description="t('question.edit.descriptionPlaceholder')"
    :ui="{ content: 'min-w-[90vw] min-h-[90vh]' }">
    <UButton 
      :label="t('test.edit.addQuestion')" 
      variant="subtle" 
      icon="i-heroicons-plus"
    />

    <template #body>
      <TestQuestionEdit
        @save="addQuestion"
        @cancel="cancelAddQuestion"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { t } = useI18n()

function cancelAddQuestion() {
  // Модальное окно закроется автоматически
}

function addQuestion(question: Partial<TestQuestion>) {
  // Генерируем id, если его нет
  const newQuestion: TestQuestion = {
    id: question.id || `question-${Date.now()}`,
    title: question.title || '',
    description: question.description || '',
    difficulty: question.difficulty || 'easy',
    points: question.points || 1,
    image: question.image || '',
    answers: question.answers || [],
    correctAnswerIds: question.correctAnswerIds || [],
    explanation: question.explanation || ''
  }
  
  // Emit event to parent
  emit('question-added', newQuestion)
}

const emit = defineEmits<{
  'question-added': [question: TestQuestion]
}>()
</script> 