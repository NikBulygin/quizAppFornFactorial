<template>
  <div class="space-y-6">
    <!-- Заголовок и фильтры -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-xl font-semibold">{{ t('leaderboard.title') }}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('leaderboard.subtitle') }}</p>
      </div>
      
      <!-- Фильтры -->
      <div class="flex flex-wrap gap-2">
        <USelect
          v-model="sortBy"
          :options="sortOptions"
          :placeholder="t('leaderboard.sortBy')"
          size="sm"
        />
        
        <UButton
          :variant="sortOrder === 'asc' ? 'solid' : 'outline'"
          size="sm"
          @click="toggleSortOrder"
        >
          <UIcon 
            :name="sortOrder === 'asc' ? 'i-heroicons-arrow-up' : 'i-heroicons-arrow-down'"
            class="w-4 h-4"
          />
        </UButton>
        
        <UInput
          v-model="searchTerm"
          :placeholder="t('leaderboard.search')"
          size="sm"
          class="w-48"
        >
          <template #leading>
            <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4" />
          </template>
        </UInput>
      </div>
    </div>

    <!-- Таблица результатов -->
    <UCard>
      <UTable
        :rows="filteredAndSortedResults"
        :columns="columns"
        :loading="loading"
        :empty-state="{ icon: 'i-heroicons-trophy', label: t('leaderboard.noResults') }"
      >
        <!-- Кастомные ячейки -->
        <template #rank-data="{ row, index }">
          <div class="flex items-center gap-2">
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              :class="getRankClass(index + 1)"
            >
              {{ index + 1 }}
            </div>
            <UAvatar
              :src="row.user.picture"
              :alt="row.user.name"
              size="sm"
            />
          </div>
        </template>

        <template #user-data="{ row }">
          <div class="flex items-center gap-3">
            <UAvatar
              :src="row.user.picture"
              :alt="row.user.name"
              size="md"
            />
            <div class="min-w-0 flex-1">
              <div class="font-medium truncate">{{ row.user.name }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 truncate">
                {{ row.user.email }}
              </div>
            </div>
          </div>
        </template>

        <template #score-data="{ row }">
          <div class="text-center">
            <div class="text-lg font-bold" :class="getScoreColorClass(row.percentage)">
              {{ row.totalPoints }}/{{ row.maxPoints }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ row.percentage }}%
            </div>
          </div>
        </template>

        <template #time-data="{ row }">
          <div class="text-center">
            <div class="font-medium">{{ formatTime(row.timeSpent) }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ formatDate(row.completedAt) }}
            </div>
          </div>
        </template>

        <template #status-data="{ row }">
          <UBadge
            :color="row.isPassed ? 'success' : 'error'"
            size="sm"
          >
            {{ row.isPassed ? t('leaderboard.passed') : t('leaderboard.failed') }}
          </UBadge>
        </template>

        <template #attempts-data="{ row }">
          <div class="text-center">
            <span class="font-medium">{{ row.attempts }}</span>
            <div class="text-xs text-gray-600 dark:text-gray-400">
              {{ t('leaderboard.attempts') }}
            </div>
          </div>
        </template>

        <template #actions-data="{ row }">
          <div class="flex items-center gap-1">
            <UButton
              variant="ghost"
              size="sm"
              @click="$emit('viewResult', row)"
            >
              <UIcon name="i-heroicons-eye" class="w-4 h-4" />
            </UButton>
            
            <UButton
              v-if="row.user.id === currentUserId"
              variant="ghost"
              size="sm"
              @click="$emit('retake', row)"
            >
              <UIcon name="i-heroicons-arrow-path" class="w-4 h-4" />
            </UButton>
          </div>
        </template>
      </UTable>
    </UCard>

    <!-- Пагинация -->
    <div v-if="totalPages > 1" class="flex items-center justify-between">
      <div class="text-sm text-gray-600 dark:text-gray-400">
        {{ t('leaderboard.showing', { from: (currentPage - 1) * pageSize + 1, to: Math.min(currentPage * pageSize, totalResults), total: totalResults }) }}
      </div>
      
      <UPagination
        v-model="currentPage"
        :page-count="totalPages"
        :total="totalResults"
        :ui="{ wrapper: 'flex items-center gap-1' }"
      />
    </div>

    <!-- Статистика -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-2xl font-bold text-primary">{{ totalParticipants }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('leaderboard.totalParticipants') }}</div>
        </div>
      </UCard>
      
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-2xl font-bold text-success">{{ passedCount }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('leaderboard.passedCount') }}</div>
        </div>
      </UCard>
      
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-2xl font-bold text-warning">{{ averageScore }}%</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('leaderboard.averageScore') }}</div>
        </div>
      </UCard>
      
      <UCard>
        <div class="text-center space-y-2">
          <div class="text-2xl font-bold text-info">{{ formatTime(averageTime) }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('leaderboard.averageTime') }}</div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  testId: string
  results: TestResult[]
  currentUserId?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentUserId: undefined,
  loading: false
})

defineEmits<{
  viewResult: [result: TestResult]
  retake: [result: TestResult]
}>()

// Состояние
const sortBy = ref('score')
const sortOrder = ref<'asc' | 'desc'>('desc')
const searchTerm = ref('')
const currentPage = ref(1)
const pageSize = ref(10)

// Опции сортировки
const sortOptions = computed(() => [
  { label: t('leaderboard.sortByScore'), value: 'score' },
  { label: t('leaderboard.sortByTime'), value: 'time' },
  { label: t('leaderboard.sortByDate'), value: 'date' },
  { label: t('leaderboard.sortByName'), value: 'name' },
  { label: t('leaderboard.sortByAttempts'), value: 'attempts' }
])

// Колонки таблицы
const columns = computed(() => [
  {
    key: 'rank',
    label: t('leaderboard.rank'),
    sortable: false
  },
  {
    key: 'user',
    label: t('leaderboard.user'),
    sortable: true
  },
  {
    key: 'score',
    label: t('leaderboard.score'),
    sortable: true
  },
  {
    key: 'time',
    label: t('leaderboard.time'),
    sortable: true
  },
  {
    key: 'status',
    label: t('leaderboard.status'),
    sortable: true
  },
  {
    key: 'attempts',
    label: t('leaderboard.attempts'),
    sortable: true
  },
  {
    key: 'actions',
    label: t('leaderboard.actions'),
    sortable: false
  }
])

// Вычисляемые свойства
const filteredResults = computed(() => {
  if (!searchTerm.value) return props.results
  
  const search = searchTerm.value.toLowerCase()
  return props.results.filter(result => 
    result.user.name.toLowerCase().includes(search) ||
    result.user.email.toLowerCase().includes(search)
  )
})

const sortedResults = computed(() => {
  const results = [...filteredResults.value]
  
  results.sort((a, b) => {
    let aValue: any
    let bValue: any
    
    switch (sortBy.value) {
      case 'score':
        aValue = a.percentage
        bValue = b.percentage
        break
      case 'time':
        aValue = a.timeSpent
        bValue = b.timeSpent
        break
      case 'date':
        aValue = new Date(a.completedAt).getTime()
        bValue = new Date(b.completedAt).getTime()
        break
      case 'name':
        aValue = a.user.name.toLowerCase()
        bValue = b.user.name.toLowerCase()
        break
      case 'attempts':
        aValue = a.attempts || 1
        bValue = b.attempts || 1
        break
      default:
        aValue = a.percentage
        bValue = b.percentage
    }
    
    if (sortOrder.value === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })
  
  return results
})

const totalResults = computed(() => sortedResults.value.length)
const totalPages = computed(() => Math.ceil(totalResults.value / pageSize.value))

const filteredAndSortedResults = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return sortedResults.value.slice(start, end)
})

// Статистика
const totalParticipants = computed(() => props.results.length)

const passedCount = computed(() => 
  props.results.filter(r => r.isPassed).length
)

const averageScore = computed(() => {
  if (props.results.length === 0) return 0
  const total = props.results.reduce((sum, r) => sum + r.percentage, 0)
  return Math.round(total / props.results.length)
})

const averageTime = computed(() => {
  if (props.results.length === 0) return 0
  const total = props.results.reduce((sum, r) => sum + r.timeSpent, 0)
  return Math.round(total / props.results.length)
})

// Методы
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

const getRankClass = (rank: number) => {
  if (rank === 1) return 'bg-yellow-500 text-white'
  if (rank === 2) return 'bg-gray-400 text-white'
  if (rank === 3) return 'bg-orange-500 text-white'
  return 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
}

const getScoreColorClass = (percentage: number) => {
  if (percentage >= 80) return 'text-success'
  if (percentage >= 60) return 'text-warning'
  return 'text-error'
}

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}`
  }
  return `${minutes} ${t('leaderboard.minutes')}`
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Следим за изменениями фильтров
watch([searchTerm, sortBy, sortOrder], () => {
  currentPage.value = 1
})
</script> 