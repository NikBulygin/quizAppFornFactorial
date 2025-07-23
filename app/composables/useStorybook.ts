import { ref, computed, type Ref } from 'vue'

export interface StorybookState {
  isLoading: Ref<boolean>
  showFallback: Ref<boolean>
  errorMessage: Ref<string>
  storybookFrame: Ref<HTMLIFrameElement | undefined>
}

// URL utilities
export const useStorybookUrl = () => {
  const buildStorybookUrl = (storybookPath: string[] = []) => {
    const basePath = '/storybook/index.html'
    
    if (storybookPath.length === 0) {
      return basePath
    }
    
    const storyPath = storybookPath.join('/')
    return `${basePath}?path=/story/${storyPath}`
  }

  const parseStorybookPath = (routeParams: string | string[]) => {
    if (Array.isArray(routeParams)) {
      return routeParams
    }
    
    if (typeof routeParams === 'string') {
      return routeParams.split('/')
    }
    
    return []
  }

  const validateStorybookPath = (path: string[]) => {
    return path.every(segment => 
      typeof segment === 'string' && 
      segment.length > 0 && 
      /^[a-zA-Z0-9-_]+$/.test(segment)
    )
  }

  return {
    buildStorybookUrl,
    parseStorybookPath,
    validateStorybookPath
  }
}

// Main storybook composable
export const useStorybook = (storybookPath: string[]) => {
  const { buildStorybookUrl } = useStorybookUrl()
  
  const isLoading = ref(true)
  const showFallback = ref(false)
  const storybookFrame = ref<HTMLIFrameElement>()
  const errorMessage = ref('Checking availability...')

  // Build storybook URL using utility
  const storybookUrl = computed(() => buildStorybookUrl(storybookPath))

  // Handlers
  const onLoad = () => {
    isLoading.value = false
    showFallback.value = false
  }

  const onError = () => {
    isLoading.value = false
    showFallback.value = true
    errorMessage.value = 'Failed to load iframe'
  }

  const retry = () => {
    isLoading.value = true
    showFallback.value = false
    errorMessage.value = 'Retrying...'
    
    if (storybookFrame.value) {
      storybookFrame.value.src = storybookUrl.value
    }
    
    setTimeout(() => {
      if (isLoading.value) {
        onError()
      }
    }, 5000)
  }

  // Check availability
  const checkAvailability = async () => {
    try {
      const response = await fetch('/storybook/index.html')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      errorMessage.value = `Files not found: ${message}`
      onError()
    }
  }

  // Auto timeout
  const setupTimeout = () => {
    setTimeout(() => {
      if (isLoading.value && !showFallback.value) {
        errorMessage.value = 'Timeout (5s)'
        onError()
      }
    }, 5000)
  }

  return {
    // State
    isLoading,
    showFallback,
    errorMessage,
    storybookFrame,
    storybookUrl,
    
    // Actions
    onLoad,
    onError,
    retry,
    checkAvailability,
    setupTimeout
  }
} 