<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('testSearch.title') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ t('testSearch.description') }}
        </p>
      </div>

      <!-- Поиск и фильтры -->
      <div class="mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Поиск по названию -->
            <UInput
              v-model="filters.search"
              :placeholder="t('testSearch.searchPlaceholder')"
              icon="i-heroicons-magnifying-glass"
              @input="debouncedSearch"
            />
            
            <!-- Фильтр по тегам -->
            <USelect
              v-model="filters.tags"
              :items="availableTags"
              :placeholder="t('testSearch.filterByTags')"
              multiple
              @update:model-value="debouncedSearch"
            />
            
            <!-- Фильтр по сложности -->
            <USelect
              v-model="filters.difficulty"
              :items="difficultyOptions"
              :placeholder="t('testSearch.filterByDifficulty')"
              @update:model-value="debouncedSearch"
            />
            
            <!-- Кнопка поиска -->
            <UButton
              color="primary"
              @click="searchTests"
              :loading="loading"
            >
              {{ t('testSearch.search') }}
            </UButton>
          </div>
          
          <!-- Выбранные теги -->
          <div v-if="filters.tags.length > 0" class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="tag in filters.tags"
              :key="tag"
              color="primary"
              variant="soft"
              class="cursor-pointer"
              @click="removeTag(tag)"
            >
              {{ tag }}
              <UIcon name="i-heroicons-x-mark" class="w-3 h-3 ml-1" />
            </UBadge>
          </div>
        </div>
      </div>

      <!-- Результаты поиска -->
      <div v-if="!loading && !error">
        <!-- Статистика -->
        <div class="mb-6 flex items-center justify-between">
          <p class="text-gray-600 dark:text-gray-400">
            {{ t('testSearch.resultsCount', { count: total, found: tests.length }) }}
          </p>
          
          <!-- Сортировка -->
          <USelect
            v-model="sortBy"
            :items="sortOptions"
            :placeholder="t('testSearch.sortBy')"
            class="w-48"
            @update:model-value="searchTests"
          />
        </div>

        <!-- Список тестов -->
        <div v-if="tests.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestCard
            v-for="test in tests"
            :key="test.id"
            :test="test"
            clickable
            @click="viewTest(test)"
            @start="startTest(test)"
          />
        </div>

        <!-- Пустое состояние -->
        <div v-else class="text-center py-12">
          <UIcon name="i-heroicons-magnifying-glass" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ t('testSearch.noResults') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ t('testSearch.noResultsDescription') }}
          </p>
          <UButton
            variant="outline"
            @click="clearFilters"
          >
            {{ t('testSearch.clearFilters') }}
          </UButton>
        </div>

        <!-- Пагинация -->
        <div v-if="tests.length > 0" class="mt-8 flex justify-center">
          <UPagination
            v-model="currentPage"
            :total="totalPages"
            :ui="{ wrapper: 'flex items-center gap-1' }"
            @update:model-value="handlePageChange"
          />
        </div>
      </div>

      <!-- Загрузка -->
      <div v-else-if="loading" class="flex items-center justify-center py-12">
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
        <UButton @click="searchTests">
          {{ t('common.retry') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

// Состояние
const loading = ref(false)
const error = ref<string | null>(null)
const tests = ref<Test[]>([])
const total = ref(0)
const currentPage = ref(1)
const itemsPerPage = 12

// Фильтры
const filters = ref({
  search: '',
  tags: [] as string[],
  difficulty: null as string | null
})

// Сортировка
const sortBy = ref('relevance')

// Опции
const difficultyOptions = computed(() => [
  { label: t('testSearch.allDifficulties'), value: null },
  { label: t('question.difficulties.easy'), value: 'easy' },
  { label: t('question.difficulties.medium'), value: 'medium' },
  { label: t('question.difficulties.hard'), value: 'hard' }
])

const sortOptions = computed(() => [
  { label: t('testSearch.sort.relevance'), value: 'relevance' },
  { label: t('testSearch.sort.newest'), value: 'newest' },
  { label: t('testSearch.sort.oldest'), value: 'oldest' },
  { label: t('testSearch.sort.title'), value: 'title' }
])

const availableTags = computed(() => {
  // В реальном приложении здесь был бы API для получения всех доступных тегов
  return [
    'математика', 'алгебра', 'геометрия', 'физика', 'химия', 'биология',
    'история', 'география', 'литература', 'английский', 'программирование'
  ].map(tag => ({ label: tag, value: tag }))
})

const totalPages = computed(() => 
  Math.ceil(total.value / itemsPerPage)
)

// Debounced поиск
const debouncedSearch = useDebounceFn(() => {
  currentPage.value = 1
  searchTests()
}, 300)

// Методы
const searchTests = async () => {
  loading.value = true
  error.value = null
  
  try {
    const params = new URLSearchParams()
    
    if (filters.value.search) {
      params.append('search', filters.value.search)
    }
    
    if (filters.value.tags.length > 0) {
      params.append('tags', filters.value.tags.join(','))
    }
    
    if (filters.value.difficulty) {
      params.append('difficulty', filters.value.difficulty)
    }
    
    params.append('limit', itemsPerPage.toString())
    params.append('offset', ((currentPage.value - 1) * itemsPerPage).toString())
    
    const response = await $fetch<TestSearchResponse>(`/api/test/search?${params}`)
    
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to search tests')
    }

    tests.value = response.data
    total.value = response.total || 0
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred'
  } finally {
    loading.value = false
  }
}

const clearFilters = () => {
  filters.value.search = ''
  filters.value.tags = []
  filters.value.difficulty = null
  currentPage.value = 1
  searchTests()
}

const removeTag = (tag: string) => {
  filters.value.tags = filters.value.tags.filter(t => t !== tag)
  debouncedSearch()
}

const handlePageChange = () => {
  searchTests()
}

const viewTest = (test: Test) => {
  router.push(`/test/${test.id}`)
}

const startTest = async (test: Test) => {
  try {
    const response = await $fetch<PassedTestApiResponse>('/api/passed-test', {
      method: 'POST',
      body: { testId: test.id }
    })
    
    if (response.success && response.data) {
      router.push(`/test/pass/${test.id}`)
    }
  } catch (err) {
    console.error('Failed to start test:', err)
  }
}

// Инициализация
onMounted(() => {
  searchTests()
})
</script> 