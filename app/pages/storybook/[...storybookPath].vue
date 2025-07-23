<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div class="mb-6">
        <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Storybook</h1>
        <p class="text-gray-600">Перенаправление на Storybook UI</p>
      </div>
      
      <div class="space-y-3">
        <button @click="redirectToStorybook" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
          Открыть Storybook
        </button>
        <button @click="goHome" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors">
          Вернуться на главную
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const redirectToStorybook = () => {
  if (import.meta.client) {
    window.location.href = '/storybook/'
  }
}

const goHome = () => {
  navigateTo('/')
}

definePageMeta({
  layout: false
})
</script> 