<template>
  <div>
    <slot v-if="!isLoading" name="default" :loggedIn="loggedIn" :user="user" :clear="clear" />
    <slot v-else name="placeholder">
      <div class="flex items-center justify-center py-4">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin w-6 h-6 text-gray-400" />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession()
const isLoading = ref(false)

onMounted(() => { 
  isLoading.value = false 
})
</script> 