<template>
  <AuthState>
    <template #default="{ loggedIn, user, clear }">
      <div v-if="loggedIn" class="flex items-center gap-3">
        <UAvatar 
          v-if="user?.picture" 
          :src="user.picture" 
          :alt="user.name || 'User'"
          size="sm"
        />
        <div class="hidden sm:block">
          <p class="text-sm font-medium">{{ user?.name || user?.email }}</p>
        </div>
        <UButton 
          @click="clear"
          variant="outline"
          size="sm"
          color="gray"
        >
          Выйти
        </UButton>
      </div>
      
      <div v-else>
        <UButton 
          @click="login"
          color="primary"
          variant="solid"
          size="sm"
        >
          Войти
        </UButton>
      </div>
    </template>
    
    <template #placeholder>
      <USkeleton class="h-8 w-20" />
    </template>
  </AuthState>
</template>

<script setup lang="ts">
const login = () => {
  navigateTo('/login')
}
</script> 