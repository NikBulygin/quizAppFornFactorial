<template>
  <UContainer class="h-screen flex items-center justify-center bg-gradient-to-br from-error-50 to-warning-100 max-w-none">
    <UCard class="max-w-lg w-full mx-4">
      <template #header>
        <UContainer class="text-center max-w-none">
          <UIcon 
            :name="errorIcon" 
            :class="errorIconClass"
            class="w-20 h-20 mx-auto mb-4" 
          />
          <h1 class="text-3xl font-bold text-highlighted">{{ errorTitle }}</h1>
        </UContainer>
      </template>
      
      <UContainer class="text-center space-y-4 max-w-none">
        <p class="text-toned">{{ errorDescription }}</p>
        
        <UCard v-if="error.statusCode" class="bg-muted">
          <code class="text-sm font-mono text-default">
            Error {{ error.statusCode }}: {{ error.statusMessage }}
          </code>
        </UCard>
        
        <UContainer v-if="isDev && error.stack" class="max-w-none">
          <UCard class="bg-error-50 text-left">
            <details>
              <summary class="cursor-pointer font-medium text-error-700 mb-2">
                Stack Trace (Development)
              </summary>
              <pre class="text-xs overflow-auto text-muted">{{ error.stack }}</pre>
            </details>
          </UCard>
        </UContainer>
      </UContainer>
      
      <template #footer>
        <UContainer class="text-center space-y-4 max-w-none">
          <UContainer class="flex gap-2 justify-center max-w-none">
            <UButton 
              @click="handleError"
              color="primary"
              variant="solid"
              size="lg"
              icon="i-lucide-home"
            >
              Go Home
            </UButton>
            
            <UButton 
              @click="refresh"
              color="secondary"
              variant="outline"
              size="lg"
              icon="i-lucide-rotate-cw"
            >
              Retry
            </UButton>
          </UContainer>
          
          <p class="text-xs text-dimmed">
            {{ timestamp }}
          </p>
        </UContainer>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
    stack?: string
  }
}

const props = withDefaults(defineProps<ErrorProps>(), {
  error: () => ({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    message: 'Something went wrong'
  })
})

// Development mode check
const isDev = import.meta.dev

// Computed properties for error display
const errorIcon = computed(() => {
  const code = props.error.statusCode
  if (code === 404) return 'i-lucide-search'
  if (code === 403) return 'i-lucide-lock'
  if (code === 500) return 'i-lucide-triangle-alert'
  return 'i-lucide-x-circle'
})

const errorIconClass = computed(() => {
  const code = props.error.statusCode
  if (code === 404) return 'text-info'
  if (code === 403) return 'text-warning'
  if (code === 500) return 'text-error'
  return 'text-error'
})

const errorTitle = computed(() => {
  const code = props.error.statusCode
  if (code === 404) return 'Page Not Found'
  if (code === 403) return 'Access Forbidden'
  if (code === 500) return 'Server Error'
  return 'Something went wrong'
})

const errorDescription = computed(() => {
  const code = props.error.statusCode
  if (code === 404) return 'The page you are looking for does not exist.'
  if (code === 403) return 'You do not have permission to access this resource.'
  if (code === 500) return 'An internal server error occurred.'
  return props.error.message || 'An unexpected error occurred.'
})

const timestamp = computed(() => {
  return new Date().toLocaleString()
})

// Actions
const handleError = () => {
  clearError({ redirect: '/' })
}

const refresh = () => {
  clearError()
}

// Meta
useSeoMeta({
  title: `Error ${props.error.statusCode || ''}`,
  description: errorDescription.value
})
</script>
