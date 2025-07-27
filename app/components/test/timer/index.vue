<template>
  <div class="flex items-center gap-1 sm:gap-2">
    <UIcon 
      :name="timer.mode === 'countdown' ? 'i-heroicons-clock' : 'i-heroicons-clock'"
      :class="[
        'w-4 h-4 sm:w-5 sm:h-5',
        getTimerColor()
      ]"
    />
    
    <div class="flex items-center gap-1">
      <span 
        :class="[
          'font-mono text-sm sm:text-base lg:text-lg font-bold',
          getTimerColor()
        ]"
      >
        {{ formatTime(displayTime) }}
      </span>
      
      <span 
        v-if="timer.mode === 'countdown' && timer.deadline"
        class="text-xs hidden sm:inline"
      >
        {{ t('timer.untilDeadline') }}
      </span>
      <span 
        v-else-if="timer.mode === 'countdown' && timer.timeLimit"
        class="text-xs hidden sm:inline"
      >
        {{ t('timer.remaining') }}
      </span>
      <span 
        v-else-if="timer.mode === 'time'"
        class="text-xs hidden sm:inline"
      >
        {{ t('timer.currentTime') }}
      </span>
    </div>

    <!-- Предупреждение о времени -->
    <div 
      v-if="showWarning && isWarningActive"
      class="flex items-center gap-1 text-xs"
    >
      <UIcon name="i-heroicons-exclamation-triangle" class="w-3 h-3 sm:w-4 sm:h-4" color="warning" />
      <span class="text-xs" :class="getWarningColor()">{{ t('timer.timeRunningOut') }}</span>
    </div>

    <!-- Истекшее время -->
    <div 
      v-if="timer.isExpired"
      class="flex items-center gap-1 text-xs"
    >
      <UIcon name="i-heroicons-x-circle" class="w-3 h-3 sm:w-4 sm:h-4" color="error" />
      <span class="text-xs" :class="getErrorColor()">{{ t('timer.timeExpired') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  timer: TestTimer
  showWarning?: boolean
  warningThreshold?: number
  startTime?: number // время начала теста в секундах
}

const props = withDefaults(defineProps<Props>(), {
  showWarning: true,
  warningThreshold: 300, // 5 minutes
  startTime: 0
})

const currentTime = ref(0)

onMounted(() => {
  updateCurrentTime()
  const interval = setInterval(updateCurrentTime, 1000)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})

const updateCurrentTime = () => {
  currentTime.value = Math.floor(Date.now() / 1000)
}

const displayTime = computed(() => {
  if (props.timer.mode === 'countdown') {
    if (props.timer.deadline) {
      const deadlineTime = Math.floor(new Date(props.timer.deadline).getTime() / 1000)
      const remaining = deadlineTime - currentTime.value
      return Math.max(0, remaining)
    }
    if (props.timer.timeLimit) {
      const elapsed = currentTime.value - props.startTime
      const remaining = props.timer.timeLimit - elapsed
      return Math.max(0, remaining)
    }
    return 0
  } else {
    const now = new Date()
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return Math.floor((now.getTime() - startOfDay.getTime()) / 1000)
  }
})

const isWarningActive = computed(() => {
  if (!props.showWarning || props.timer.mode !== 'countdown') return false
  return displayTime.value <= (props.warningThreshold || 300)
})

const getTimerColor = () => {
  if (props.timer.isExpired) {
    return 'text-error-600 dark:text-error-400'
  }
  
  if (props.timer.mode === 'countdown') {
    if (isWarningActive.value) {
      return 'text-warning-600 dark:text-warning-400'
    }
    return 'text-primary-600 dark:text-primary-400'
  }
  
  return 'text-info-600 dark:text-info-400'
}

const getWarningColor = () => {
  return 'text-warning-600 dark:text-warning-400'
}

const getErrorColor = () => {
  return 'text-error-600 dark:text-error-400'
}

const formatTime = (seconds: number) => {
  if (seconds < 0) seconds = 0
  
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  } else {
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
}
</script> 