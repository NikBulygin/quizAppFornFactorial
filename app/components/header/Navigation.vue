<template>
  <nav class="hidden md:flex items-center space-x-8">
    <NuxtLink 
      to="/" 
      class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
      active-class="font-semibold"
    >
      Главная
    </NuxtLink>
    <NuxtLink 
      to="/quizzes" 
      class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
      active-class="font-semibold"
    >
      Тесты
    </NuxtLink>
    <NuxtLink 
      to="/create" 
      class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
      active-class="font-semibold"
    >
      Создать
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
// Компонент навигации
</script> 