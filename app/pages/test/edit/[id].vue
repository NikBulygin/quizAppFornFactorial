<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <UButton
          variant="ghost"
          icon="i-heroicons-arrow-left"
          @click="$router.back()"
          class="mb-4"
        >
          {{ t('navigation.back') }}
        </UButton>
        
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ isEditing ? t('test.edit.editTitle') : t('test.edit.createTitle') }}
        </h1>
      </div>

      <div v-if="loading" class="flex items-center justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin" />
        <span class="ml-2">{{ t('common.loading') }}</span>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ t('common.error') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
        <UButton @click="loadTest">
          {{ t('common.retry') }}
        </UButton>
      </div>

      <div v-else>
        <TestEdit
          :test="test"
          :is-editing="isEditing"
          @save="handleSave"
          @cancel="handleCancel"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Состояние
const loading = ref(true)
const error = ref<string | null>(null)
const test = ref<Test | null>(null)
const isEditing = ref(false)

// Получаем ID теста из URL
const testId = computed(() => route.params.id as string)

// Загрузка теста
const loadTest = async () => {
  loading.value = true
  error.value = null
  
  try {
    if (testId.value === 'new') {
      // Создание нового теста
      test.value = {
        id: '',
        title: '',
        description: '',
        image: '',
        deadline: '',
        timeLimit: 60,
        randomizeQuestions: false,
        randomizeAnswers: false,
        difficultyDistribution: {
          easy: 40,
          medium: 50,
          hard: 10
        },
        sections: [],
        questions: [],
        author: {
          id: 'current-user',
          name: 'Current User',
          email: 'user@example.com',
          picture: '',
          role: 'user'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      isEditing.value = false
    } else {
      // Редактирование существующего теста
      // Здесь должна быть загрузка теста с сервера
      // Пока используем мок данные
      test.value = {
        id: testId.value,
        title: 'Sample Test',
        description: 'This is a sample test for editing',
        image: 'https://via.placeholder.com/300x200',
        deadline: '2024-12-31T23:59:59Z',
        timeLimit: 60,
        randomizeQuestions: true,
        randomizeAnswers: false,
        difficultyDistribution: {
          easy: 40,
          medium: 50,
          hard: 10
        },
        sections: [
          {
            id: 'section-1',
            title: 'Basic Questions',
            description: 'Fundamental concepts',
            questions: ['question-1', 'question-2']
          }
        ],
        questions: [
          {
            id: 'question-1',
            title: 'What is 2 + 2?',
            description: 'Basic arithmetic',
            difficulty: 'easy',
            points: 1,
            answers: [
              { id: 'answer-1', text: '3' },
              { id: 'answer-2', text: '4' },
              { id: 'answer-3', text: '5' }
            ],
            correctAnswerIds: ['answer-2']
          }
        ],
        author: {
          id: 'user-1',
          name: 'John Doe',
          email: 'john@example.com',
          picture: 'https://via.placeholder.com/100x100',
          role: 'user'
        },
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      }
      isEditing.value = true
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred'
  } finally {
    loading.value = false
  }
}

// Обработчики событий
const handleSave = async (savedTest: Test) => {
  try {
    // Здесь должна быть логика сохранения на сервер
    console.log('Saving test:', savedTest)
    
    // Имитация сохранения
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Перенаправляем на страницу теста или список тестов
    await router.push('/test/list')
  } catch (err) {
    console.error('Error saving test:', err)
    // Показать уведомление об ошибке
  }
}

const handleCancel = () => {
  // Возвращаемся назад
  router.back()
}

// Загружаем тест при монтировании компонента
onMounted(() => {
  loadTest()
})

// Загружаем тест при изменении ID
watch(testId, () => {
  loadTest()
})
</script> 