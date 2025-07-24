<template>
  <header class="shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <HeaderLogo />
        </div>

        <!-- Navigation -->
        <HeaderNavigation />

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <!-- Color Mode Toggle -->
          <HeaderColorModeToggle />

          <!-- Auth Button -->
          <HeaderAuthButton />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Основной header компонент, использующий подкомпоненты
</script>
