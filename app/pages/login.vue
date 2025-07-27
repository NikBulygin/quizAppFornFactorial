<script setup>
const router = useRouter()
const route = useRoute()
const { loggedIn } = useUserSession()

onMounted(async () => {
  if (loggedIn.value) {
    const redirectTo = route.query.redirect || route.query.callback || '/'
    await router.push(String(redirectTo))
  } else {
    const currentPath = route.fullPath
    const auth0Url = `/api/auth/auth0?redirect=${encodeURIComponent(currentPath)}`
    await navigateTo(auth0Url, { external: true })
  }
})

if (import.meta.client && !loggedIn.value) {
  const currentPath = route.fullPath
  const auth0Url = `/api/auth/auth0?redirect=${encodeURIComponent(currentPath)}`
  window.location.href = auth0Url
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8" />
  </div>
</template> 