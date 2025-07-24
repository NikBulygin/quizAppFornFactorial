<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        Welcome to QuizzApp
      </h2>
      <p class="mt-4 text-lg">
        Create and take quizzes with friends
      </p>
    </div>

    <AuthState>
      <template #default="{ loggedIn, user }">
        <div v-if="loggedIn" class="mt-12 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg leading-6 font-medium">
                User Information
              </h3>
              <div class="flex gap-2">
                <UButton 
                  v-if="user?.id"
                  @click="fetchUserData(user.id)"
                  variant="outline"
                  size="sm"
                  :loading="isLoadingUserData"
                >
                  Get My Data
                </UButton>
              </div>
            </div>

            <div class="mb-6 p-4 rounded-lg">
              <h4 class="text-sm font-medium mb-2">
                API Testing - Get User Data:
              </h4>
              <div class="flex flex-wrap gap-2">
                <UButton 
                  @click="fetchUserData('google-oauth2|104616718598007796083')"
                  variant="outline"
                  size="sm"
                  :loading="isLoadingUserData"
                >
                  Test: My Profile
                </UButton>
                <UButton 
                  @click="fetchUserData('auth0|test-user-1')"
                  variant="outline"
                  size="sm"
                  :loading="isLoadingUserData"
                >
                  Test: Other User 1
                </UButton>
                <UButton 
                  @click="fetchUserData('google-oauth2|123456789')"
                  variant="outline"
                  size="sm"
                  :loading="isLoadingUserData"
                >
                  Test: Other User 2
                </UButton>
                <UInput 
                  v-model="customUserId"
                  placeholder="Enter user ID"
                  size="sm"
                  class="w-64"
                />
                <UButton 
                  @click="fetchUserData(customUserId)"
                  variant="outline"
                  size="sm"
                  :loading="isLoadingUserData"
                  :disabled="!customUserId"
                >
                  Get Data
                </UButton>
              </div>
            </div>
            
            <div v-if="userApiData" class="mt-5 space-y-6">
              <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <UAvatar 
                          v-if="userApiData.picture" 
                          :src="userApiData.picture" 
                          :alt="userApiData.name || 'User'"
                          size="lg"
                        />
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium truncate">
                            Name
                          </dt>
                          <dd class="text-lg font-medium">
                            {{ userApiData.name || 'Not specified' }}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <div class="flex items-center">
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium truncate">
                            Email
                          </dt>
                          <dd class="text-lg font-medium">
                            {{ userApiData.email || 'Not specified' }}
                          </dd>
                          <dd v-if="userApiData.emailVerified !== undefined" class="text-xs">
                            {{ userApiData.emailVerified ? '✅ Verified' : '❌ Not verified' }}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <div class="flex items-center">
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium truncate">
                            Nickname
                          </dt>
                          <dd class="text-lg font-medium">
                            {{ userApiData.nickname || 'Not specified' }}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        User ID
                      </dt>
                      <dd class="text-xs font-mono break-all mt-1">
                        {{ userApiData.id }}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        Profile Status
                      </dt>
                      <dd class="text-sm mt-1">
                        {{ userApiData.isOwnProfile ? '✅ My Profile' : '👤 Other Profile' }}
                        <span v-if="userApiData.source" class="ml-2 text-xs">({{ userApiData.source }})</span>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div v-if="userApiData.givenName || userApiData.familyName" class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        Full Name
                      </dt>
                      <dd class="text-sm mt-1">
                        {{ [userApiData.givenName, userApiData.familyName].filter(Boolean).join(' ') || 'Not specified' }}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div v-if="userApiData.locale" class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        Locale
                      </dt>
                      <dd class="text-sm mt-1">
                        {{ userApiData.locale }}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div v-if="userApiData.updatedAt" class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        Updated in Auth0
                      </dt>
                      <dd class="text-sm mt-1">
                        {{ formatDate(userApiData.updatedAt) }}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div v-if="userApiData.loggedInAt" class="overflow-hidden shadow rounded-lg">
                  <div class="p-5">
                    <dl>
                      <dt class="text-sm font-medium">
                        Login Time
                      </dt>
                      <dd class="text-sm mt-1">
                        {{ formatDate(userApiData.loggedInAt) }}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 p-4 rounded-lg">
              <h4 class="text-sm font-medium mb-2">
                Data Comparison - AuthState vs Auth0 API:
              </h4>
              <div class="text-xs space-y-1">
                <div>AuthState: {{ user?.name || 'no data' }} | Auth0 API: {{ userApiData?.name || 'no data' }}</div>
                <div>Last updated: {{ lastUpdated || 'not updated' }}</div>
              </div>
            </div>

            <div v-if="apiError" class="mt-4">
              <UAlert 
                color="red" 
                variant="subtle" 
                :title="apiError"
                class="text-sm"
              />
            </div>
          </div>
        </div>
        
        <div v-else class="mt-12 text-center">
          <p>Sign in to start using the application</p>
        </div>
      </template>
    </AuthState>
  </div>
</template>

<script setup lang="ts">
import type { UserApiResponse } from '~/types'
import { formatDate } from '~/utils'

const userApiData = ref<UserApiResponse | null>(null)
const isLoadingUserData = ref(false)
const apiError = ref<string | null>(null)
const lastUpdated = ref<string | null>(null)
const customUserId = ref('')

const fetchUserData = async (userId: string) => {
  if (!userId) return
  
  try {
    isLoadingUserData.value = true
    apiError.value = null
    
    const encodedUserId = encodeURIComponent(userId)
    const data = await $fetch<UserApiResponse>(`/api/user/${encodedUserId}`)
    userApiData.value = data
    lastUpdated.value = new Date().toLocaleString('en-US')
    
  } catch {
    apiError.value = 'Error loading user data'
  } finally {
    isLoadingUserData.value = false
  }
}
</script>