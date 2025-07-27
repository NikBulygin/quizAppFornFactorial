<template>
  <div class="w-full h-screen">
    <ScalarApiReference 
      :configuration="scalarConfig"
      :spec-url="specUrl"
    />
  </div>
</template>

<script setup>
const scalarConfig = {
  darkMode: true,
  hideModels: false,
  metaData: {
    title: 'QuizApp API Documentation',
    description: 'API documentation for the QuizApp platform'
  },
  proxyUrl: 'https://proxy.scalar.com',
  searchHotKey: 'k',
  showSidebar: true
}

const specUrl = '/api/_nitro/openapi.json'

definePageMeta({
  layout: false
})
</script> 