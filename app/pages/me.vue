<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="!ready" class="flex justify-center">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8" />
    </div>
    
    <div v-else-if="loggedIn && user" class="max-w-2xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('auth.myProfile') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Управляйте своими настройками и информацией
        </p>
      </div>

      <UCard class="mb-6">
        <template #header>
          <h2 class="text-xl font-semibold">{{ t('user.profile.information') }}</h2>
        </template>
        
        <div class="flex items-center gap-6">
          <UAvatar
            :src="user.picture"
            :alt="user.name || user.email"
            size="xl"
            class="w-20 h-20"
          />
          
          <div class="flex-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
              {{ user.name || t('user.profile.noName') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              {{ user.email }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500">
              ID: {{ user.id }}
            </p>
          </div>
        </div>
      </UCard>

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

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">{{ t('user.profile.actions') }}</h2>
        </template>
        
        <div class="space-y-3">
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

    <div v-else class="text-center py-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t('auth.notAuthenticated') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {{ t('auth.notAuthenticatedDescription') }}
      </p>
      <UButton
        :label="t('auth.signIn')"
        size="lg"
        :to="loginUrl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { loggedIn, user, clear, ready } = useUserSession()
const route = useRoute()

const loginUrl = computed(() => {
  return `/login?redirect=${encodeURIComponent(route.fullPath)}`
})

const stats = ref({
  totalQuizzes: 0,
  completedQuizzes: 0,
  averageScore: 0,
  totalTimeSpent: 0
})
</script> 