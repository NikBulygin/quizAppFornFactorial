<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Войти в аккаунт
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Используйте Auth0 для безопасного входа
        </p>
      </div>
      
      <div class="mt-8 space-y-6">
        <div v-if="error" class="rounded-md bg-red-50 p-4">
          <div class="text-sm text-red-700">
            Ошибка входа. Попробуйте еще раз.
          </div>
        </div>
        
        <UButton 
          @click="loginWithAuth0"
          size="lg"
          color="primary"
          variant="solid"
          class="w-full justify-center"
          :loading="isLoading"
        >
          <Icon name="i-logos-auth0" class="mr-2" />
          Войти через Auth0
        </UButton>
        
        <div class="text-center">
          <NuxtLink to="/" class="text-sm text-gray-600 hover:text-gray-900">
            ← Вернуться на главную
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const error = computed(() => route.query.error)
const isLoading = ref(false)

const loginWithAuth0 = async () => {
  isLoading.value = true
  try {
    await navigateTo('/api/auth/auth0', { external: true })
  } catch (err) {
    console.error('Login error:', err)
    isLoading.value = false
  }
}

// Если пользователь уже авторизован, перенаправляем на главную
const { loggedIn } = useUserSession()
watch(loggedIn, (newValue) => {
  if (newValue) {
    router.push('/')
  }
}, { immediate: true })
</script> 