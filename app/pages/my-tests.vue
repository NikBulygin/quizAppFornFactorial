<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('myTests.title') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ t('myTests.description') }}
        </p>
      </div>

      <!-- Фильтры -->
      <div class="mb-6">
        <div class="flex flex-wrap gap-4">
          <UInput
            v-model="filters.search"
            :placeholder="t('myTests.searchPlaceholder')"
            icon="i-heroicons-magnifying-glass"
            class="w-64"
          />
          <USelect
            v-model="filters.status"
            :items="statusOptions"
            :placeholder="t('myTests.filterByStatus')"
            class="w-48"
          />
          <UButton
            variant="outline"
            @click="clearFilters"
          >
            {{ t('myTests.clearFilters') }}
          </UButton>
        </div>
      </div>

      <!-- Загрузка -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin" />
        <span class="ml-2">{{ t('common.loading') }}</span>
      </div>

      <!-- Ошибка -->
      <div v-else-if="error" class="text-center py-12">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ t('common.error') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
        <UButton @click="loadMyTests">
          {{ t('common.retry') }}
        </UButton>
      </div>

      <!-- Пустое состояние -->
      <div v-else-if="filteredTests.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ t('myTests.noTests') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          {{ t('myTests.noTestsDescription') }}
        </p>
        <UButton
          color="primary"
          @click="$router.push('/test/search')"
        >
          {{ t('myTests.findTests') }}
        </UButton>
      </div>

      <!-- Список тестов -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestCard
          v-for="test in filteredTests"
          :key="test.id"
          :test="test.test"
          :user-result="getTestResult(test)"
          :attempts="getAttemptsCount(test.testId)"
          :can-retake="test.status === 'completed'"
          clickable
          @click="viewTest(test)"
          @start="startTest(test)"
          @retake="retakeTest(test)"
          @view-result="viewResult(test)"
        />
      </div>

      <!-- Пагинация -->
      <div v-if="filteredTests.length > 0" class="mt-8 flex justify-center">
        <UPagination
          v-model="currentPage"
          :total="totalPages"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

interface PassedTestWithTest extends PassedTest {
  test?: Test
}

const loading = ref(true)
const error = ref<string | null>(null)
const myTests = ref<PassedTestWithTest[]>([])
const currentPage = ref(1)
const itemsPerPage = 12

const filters = ref({
  search: '',
  status: null as string | null
})

const statusOptions = computed(() => [
  { label: t('myTests.allStatuses'), value: null },
  { label: t('myTests.status.inProgress'), value: 'in_progress' },
  { label: t('myTests.status.completed'), value: 'completed' },
  { label: t('myTests.status.cancelled'), value: 'cancelled' },
  { label: t('myTests.status.created'), value: 'created' }
])

const filteredTests = computed(() => {
  let tests = myTests.value

  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    tests = tests.filter(test => 
      test.test?.title.toLowerCase().includes(search) ||
      test.test?.description?.toLowerCase().includes(search) || false
    )
  }

  if (filters.value.status) {
    tests = tests.filter(test => test.status === filters.value.status)
  }

  return tests
})

const totalPages = computed(() => 
  Math.ceil(filteredTests.value.length / itemsPerPage)
)

const loadMyTests = async () => {
  loading.value = true
  error.value = null
  
  try {
    const { user } = useUserSession()
    const userId = user.value?.id
    
    if (!userId) {
      throw new Error('User not authenticated')
    }

    const [passedTestsResponse, createdTestsResponse] = await Promise.all([
      $fetch<PassedTestListApiResponse>('/api/passed-test/my'),
      $fetch<TestListApiResponse>('/api/test')
    ])

    const passedTests: PassedTestWithTest[] = []
    const createdTests: PassedTestWithTest[] = []

    if (passedTestsResponse.success && passedTestsResponse.data) {
      const passedTestsWithData = await Promise.all(
        passedTestsResponse.data.map(async (passedTest) => {
          try {
            const testResponse = await $fetch<TestApiResponse>(`/api/test/${passedTest.testId}`)
            if (testResponse.success && testResponse.data) {
              return {
                ...passedTest,
                test: testResponse.data
              }
            }
          } catch {
          }
          return passedTest
        })
      )
      passedTests.push(...passedTestsWithData.filter(test => test.test))
    }

    if (createdTestsResponse.success && createdTestsResponse.data) {
      const userCreatedTests = createdTestsResponse.data.filter(test => test.authorId === userId)
      createdTests.push(...userCreatedTests.map(test => ({
        id: `created-${test.id}`,
        testId: test.id,
        userId: userId,
        status: 'created' as const,
        startTime: test.createdAt || new Date().toISOString(),
        endTime: undefined,
        timeSpent: 0,
        userAnswers: {},
        totalScore: 0,
        maxScore: 0,
        percentage: 0,
        isPassed: false,
        createdAt: test.createdAt || new Date().toISOString(),
        updatedAt: test.updatedAt || new Date().toISOString(),
        test: test
      })))
    }

    myTests.value = [...passedTests, ...createdTests]
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred'
  } finally {
    loading.value = false
  }
}

const clearFilters = () => {
  filters.value.search = ''
  filters.value.status = null
}

const getTestResult = (passedTest: PassedTestWithTest): TestResult | undefined => {
  if (passedTest.status !== 'completed') return undefined
  
  return {
    id: passedTest.id,
    testId: passedTest.testId,
    userId: passedTest.userId,
    totalPoints: passedTest.totalScore,
    maxPoints: passedTest.maxScore,
    percentage: passedTest.percentage,
    isPassed: passedTest.isPassed,
    timeSpent: passedTest.timeSpent,
    completedAt: passedTest.endTime || passedTest.updatedAt,
    answers: passedTest.userAnswers
  }
}

const getAttemptsCount = (testId: string): number => {
  return myTests.value.filter(test => test.testId === testId).length
}

const viewTest = (passedTest: PassedTestWithTest) => {
  if (passedTest.status === 'in_progress') {
    router.push(`/test/pass/${passedTest.testId}`)
  } else {
    router.push(`/test/${passedTest.testId}`)
  }
}

const startTest = async (passedTest: PassedTestWithTest) => {
  try {
    const response = await $fetch<PassedTestApiResponse>('/api/passed-test', {
      method: 'POST',
      body: { testId: passedTest.testId }
    })
    
    if (response.success && response.data) {
      router.push(`/test/pass/${passedTest.testId}`)
    }
  } catch {
  }
}

const retakeTest = async (passedTest: PassedTestWithTest) => {
  try {
    const response = await $fetch<PassedTestApiResponse>('/api/passed-test', {
      method: 'POST',
      body: { testId: passedTest.testId }
    })
    
    if (response.success && response.data) {
      router.push(`/test/pass/${passedTest.testId}`)
    }
  } catch {
  }
}

const viewResult = (passedTest: PassedTestWithTest) => {
  router.push(`/test/result/${passedTest.id}`)
}

onMounted(() => {
  loadMyTests()
})
</script> 