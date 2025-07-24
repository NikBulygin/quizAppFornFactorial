<template>
  <UButton
    @click="login"
    color="primary"
    variant="solid"
    size="sm"
  >
    Войти
  </UButton>
</template>

<script setup lang="ts">
const login = () => {
  // Простая заглушка для входа
  console.log('Login clicked')
}
</script> 