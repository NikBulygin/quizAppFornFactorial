<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="pending" class="flex justify-center">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8" />
    </div>
    
    <div v-else-if="userProfile" class="max-w-2xl mx-auto">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('auth.userProfile') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Информация о пользователе
        </p>
      </div>

      <!-- Информация о пользователе -->
      <UCard class="mb-6">
        <template #header>
          <h2 class="text-xl font-semibold">{{ t('user.profile.information') }}</h2>
        </template>
        
        <div class="flex items-center gap-6">
          <UAvatar
            :src="userProfile.picture"
            :alt="userProfile.name || 'Пользователь'"
            size="xl"
            class="w-20 h-20"
          />
          
          <div class="flex-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
              {{ userProfile.name || t('user.profile.noName') }}
            </h3>
            <p v-if="userProfile.nickname" class="text-gray-600 dark:text-gray-400 mb-2">
              @{{ userProfile.nickname }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500">
              ID: {{ userProfile.id }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500">
              {{ t('user.profile.registeredAt') }}: {{ formatDate(userProfile.updatedAt || '') }}
            </p>
          </div>
        </div>
      </UCard>

      <!-- Статистика -->
      <UCard class="mb-6">
        <template #header>
          <h2 class="text-xl font-semibold">{{ t('user.profile.statistics') }}</h2>
        </template>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="text-2xl font-bold text-primary-600">{{ stats.totalQuizzes }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('user.profile.totalQuizzes') }}</div>
          </div>
          <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="text-2xl font-bold text-green-600">{{ stats.completedQuizzes }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('user.profile.completedQuizzes') }}</div>
          </div>
          <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="text-2xl font-bold text-blue-600">{{ stats.averageScore }}%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('user.profile.averageScore') }}</div>
          </div>
        </div>
      </UCard>

      <!-- Действия для своего профиля -->
      <UCard v-if="isOwnProfile">
        <template #header>
          <h2 class="text-xl font-semibold">{{ t('user.profile.actions') }}</h2>
        </template>
        
        <div class="space-y-3">
          <UButton
            :label="t('user.profile.editProfile')"
            variant="outline"
            icon="i-heroicons-pencil-square"
            to="/me"
          />
          <UButton
            :label="t('auth.signOut')"
            variant="outline"
            color="error"
            icon="i-heroicons-arrow-left-on-rectangle"
            @click="clear"
          />
        </div>
      </UCard>
    </div>

    <!-- Пользователь не найден -->
    <div v-else class="text-center py-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t('auth.userNotFound') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {{ t('auth.userNotFoundDescription') }}
      </p>
      <UButton
        label="На главную"
        to="/"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { loggedIn, user, clear } = useUserSession()
const userStore = useUserStore()

// Получаем ID пользователя из URL
const userId = route.params.id as string

// Проверяем, является ли это профилем текущего пользователя
const isOwnProfile = computed(() => {
  return loggedIn.value && user.value?.id === userId
})

// Загружаем данные пользователя
const userProfile = ref<UserApiResponse | null>(null)
const pending = ref(true)

// Заглушка для статистики
const stats = ref({
  totalQuizzes: 15,
  completedQuizzes: 12,
  averageScore: 85,
  totalTimeSpent: 3600
})

// Загружаем данные при монтировании
onMounted(async () => {
  try {
    if (userId) {
      const data = await userStore.fetchUserById(userId)
      userProfile.value = data
    }
  } catch (error) {
    console.error('Error loading user profile:', error)
  } finally {
    pending.value = false
  }
})

// Функция форматирования даты
const formatDate = (dateString: string) => {
  if (!dateString) return 'Не указано'
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 