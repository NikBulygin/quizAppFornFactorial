<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <UButton
          variant="ghost"
          icon="i-heroicons-arrow-left"
          @click="$router.back()"
          class="mb-4"
        >
          {{ t('navigation.back') }}
        </UButton>
        
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ t('aiTestGenerator.title') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ t('aiTestGenerator.description') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <AiTestGenerator />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('aiTestGenerator.title'),
  description: t('aiTestGenerator.description'),
  ogTitle: t('aiTestGenerator.title'),
  ogDescription: t('aiTestGenerator.description'),
})
</script> 