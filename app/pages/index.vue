<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 py-16">
      <!-- Основной контент -->
      <div class="flex flex-col items-center justify-center text-center space-y-12">
        
        <!-- Заголовок приложения -->
        <div class="space-y-6">
          <div class="flex items-center justify-center space-x-3">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
        </div>
            <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              QuizApp
            </h1>
      </div>

          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {{ t('home.description') }}
          </p>
        </div>

        <!-- Кнопки действий -->
        <div class="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <UButton
            to="/test/edit/new"
            color="primary"
            size="xl"
            class="flex-1 h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            icon="i-heroicons-plus-circle"
          >
            {{ t('home.createTest') }}
          </UButton>
          
                <UButton
            to="/test/search"
            variant="solid"
            size="xl"
            class="flex-1 h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
            icon="i-heroicons-play-circle"
          >
            {{ t('home.takeTest') }}
                </UButton>
        </div>

        <!-- Дополнительная информация -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mt-16">
          <div class="text-center space-y-4">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
              <UIcon name="i-heroicons-light-bulb" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ t('home.create.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ t('home.create.description') }}
            </p>
              </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
              <UIcon name="i-heroicons-users" class="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ t('home.share.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ t('home.share.description') }}
            </p>
              </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto">
              <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ t('home.analyze.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ t('home.analyze.description') }}
            </p>
          </div>
      </div>

        <!-- Быстрые ссылки -->
        <div class="flex flex-wrap justify-center gap-4 mt-12">
          <UButton
            to="/my-tests"
            variant="ghost"
            size="lg"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            icon="i-heroicons-document-text"
          >
            {{ t('navigation.myTests') }}
          </UButton>
          
          <UButton
            to="/test/search"
            variant="ghost"
            size="lg"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            icon="i-heroicons-magnifying-glass"
          >
            {{ t('navigation.findTests') }}
          </UButton>

          <UButton
            to="/ai-generator"
            variant="ghost"
            size="lg"
            class="text-purple-600 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
            icon="i-heroicons-sparkles"
          >
            {{ t('aiTestGenerator.title') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('home.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('home.seo.description')
    }
  ]
})
</script>
