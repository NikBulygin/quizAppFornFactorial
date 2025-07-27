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
          v-if="test"
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
const editTestStore = useEditTestStore()

const loading = ref(true)
const error = ref<string | null>(null)
const test = ref<Test | null>(null)
const isEditing = ref(false)

const testId = computed(() => route.params.id as string)

const loadTest = async () => {
  loading.value = true
  error.value = null
  
  try {
    if (testId.value === 'new') {
      const { user } = useUserSession()
      
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
        authorId: user.value?.id || 'current-user',
        tags: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      isEditing.value = false
    } else {
      const fetchedTest = await editTestStore.fetchTest(testId.value, false)
      test.value = fetchedTest
      isEditing.value = true
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred'
  } finally {
    loading.value = false
  }
}

const handleSave = async (savedTest: Test) => {
  try {
    if (isEditing.value) {
      await editTestStore.updateTestApi(testId.value, savedTest, false)
    } else {
      await editTestStore.createTest(savedTest, false)
    }
    
    await router.push('/test/list')
  } catch (err) {
    console.error('Error saving test:', err)
  }
}

const handleCancel = () => {
  router.back()
}

onMounted(() => {
  loadTest()
})

watch(testId, () => {
  loadTest()
})
</script> 