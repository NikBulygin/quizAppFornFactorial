<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <UCard class="max-w-md w-full text-center">
      <div class="mb-6">
        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-500">
          <UIcon name="i-heroicons-book-open" class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-2xl font-bold mb-2">Storybook</h1>
        <p class="text-muted-foreground">Перенаправление на Storybook UI</p>
      </div>
      
      <div class="space-y-3">
        <UButton 
          color="primary"
          size="lg"
          class="w-full"
          @click="redirectToStorybook"
        >
          Открыть Storybook
        </UButton>
        <UButton 
          color="gray"
          variant="outline"
          size="lg"
          class="w-full"
          @click="goHome" 
        >
          Вернуться на главную
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const redirectToStorybook = () => {
  if (import.meta.client) {
    window.location.href = '/api/storybook/index.html'
  }
}

const goHome = () => {
  navigateTo('/')
}

definePageMeta({
  layout: false
})
</script> 