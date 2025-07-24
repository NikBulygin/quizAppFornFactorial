import type { User } from '~/types'
import { useUserStore } from '~/stores/user'

export const useAuth = () => {
  const userStore = useUserStore()
  const { loggedIn, user, clear } = useUserSession()

  const isLoading = computed(() => userStore.isLoading.value)
  const error = computed(() => userStore.error.value)
  const currentUser = computed(() => userStore.user.value || user.value as User | null)

  const login = async () => {
    try {
      await navigateTo('/api/auth/auth0')
    } catch {
      // Handle login error silently
    }
  }

  const logout = async () => {
    try {
      await navigateTo('/api/auth/logout')
      userStore.clearUser()
      clear()
    } catch {
      // Handle logout error silently
    }
  }

  const fetchUserData = async (userId: string) => {
    return await userStore.fetchUserById(userId)
  }

  return {
    loggedIn,
    user: currentUser,
    isLoading,
    error,
    login,
    logout,
    fetchUserData,
    clear: () => {
      userStore.clearUser()
      clear()
    }
  }
} 