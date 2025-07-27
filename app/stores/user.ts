export const useUserStore = () => {
  const state = reactive<UserState>({
    user: null,
    userSession: null,
    isLoading: false,
    error: null
  })

  const fetchUserSession = async () => {
    try {
      state.isLoading = true
      state.error = null
      
      const session = useUserSession()
      
      if (session.user?.value) {
        state.user = session.user.value as User
        state.userSession = {
          user: state.user,
          loggedInAt: new Date().toISOString()
        }
      }
    } catch {
      state.error = 'Error fetching user data'
    } finally {
      state.isLoading = false
    }
  }

  const fetchUserById = async (userId: string): Promise<UserApiResponse> => {
    try {
      state.isLoading = true
      state.error = null

      const data = await $fetch<UserApiResponse>(`/api/user/${encodeURIComponent(userId)}`)

      if (data.isOwnProfile) {
        state.user = {
          id: data.id,
          name: data.name,
          email: data.email,
          picture: data.picture,
          nickname: data.nickname
        }
        
        if (data.loggedInAt) {
          state.userSession = {
            user: state.user,
            loggedInAt: data.loggedInAt
          }
        }
      }

      return data
    } catch {
      state.error = 'Error fetching user information'
      throw new Error('Failed to fetch user')
    } finally {
      state.isLoading = false
    }
  }

  const updateUserProfile = async (userData: Partial<User>) => {
    try {
      state.isLoading = true
      state.error = null

      if (state.user) {
        state.user = { ...state.user, ...userData }
        
        if (state.userSession) {
          state.userSession.user = state.user
        }
      }
    } catch {
      state.error = 'Error updating profile'
      throw new Error('Failed to update profile')
    } finally {
      state.isLoading = false
    }
  }

  const clearUser = () => {
    state.user = null
    state.userSession = null
    state.error = null
    state.isLoading = false
  }

  return {
    ...toRefs(state),
    fetchUserSession,
    fetchUserById,
    updateUserProfile,
    clearUser
  }
} 