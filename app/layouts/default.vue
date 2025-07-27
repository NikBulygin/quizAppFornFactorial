<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Логотип и навигация -->
          <div class="flex items-center gap-8">
            <CommonLogo />
            
            <!-- Навигация -->
            <nav class="hidden md:flex items-center gap-6">
              <NuxtLink
                to="/"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                active-class="text-primary-600 dark:text-primary-400 font-medium"
              >
                {{ t('navigation.home') }}
              </NuxtLink>
              <NuxtLink
                to="/test/search"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                active-class="text-primary-600 dark:text-primary-400 font-medium"
              >
                {{ t('navigation.findTests') }}
              </NuxtLink>
              <NuxtLink
                to="/my-tests"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                active-class="text-primary-600 dark:text-primary-400 font-medium"
              >
                {{ t('navigation.myTests') }}
              </NuxtLink>
            </nav>
          </div>
          
          <!-- Переключатели языка, темы и профиль -->
          <div class="flex items-center gap-2">
            <SettingsLanguageSwitch />
            <SettingsThemeSwitch />
            <UserProfileButton />
          </div>
        </div>
      </div>
    </header>

    <!-- Основной контент -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <!-- Слева: Автор -->
          <CommonAuthor />
          
          <!-- Справа: Логотип -->
          <CommonLogo />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout с Header и Footer
</script>

