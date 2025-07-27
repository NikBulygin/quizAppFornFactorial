<template>
  <UCard>
    <template #header>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h3 class="text-base sm:text-lg font-semibold">
          {{ isEditing ? t('timer.settings.editTitle') : t('timer.settings.title') }}
        </h3>
        <UButton
          v-if="isEditing"
          color="error"
          variant="soft"
          size="sm"
          @click="$emit('delete')"
        >
          <UIcon name="i-heroicons-trash" class="w-4 h-4" />
          <span class="hidden sm:inline">{{ t('timer.settings.actions.delete') }}</span>
        </UButton>
      </div>
    </template>

    <form @submit.prevent="$emit('save', formData)">
      <div class="space-y-3 sm:space-y-4 lg:space-y-6">
        <!-- Timer Mode -->
        <UFormField :label="t('timer.settings.mode')" required>
          <URadioGroup
            v-model="formData.mode"
            :options="modeOptions"
            :error="errors.mode"
            size="sm"
          />
        </UFormField>

        <!-- Countdown Settings -->
        <div v-if="formData.mode === 'countdown'" class="space-y-3 sm:space-y-4">
          <!-- Timer Type Selection -->
          <UFormField :label="t('timer.settings.countdownType')">
            <URadioGroup
              v-model="countdownType"
              :options="countdownTypeOptions"
              size="sm"
            />
          </UFormField>

          <!-- Deadline Settings -->
          <div v-if="countdownType === 'deadline'" class="space-y-3 sm:space-y-4">
            <UFormField :label="t('timer.settings.deadline')">
              <UInput
                v-model="formData.deadline"
                type="datetime-local"
                :error="errors.deadline"
                size="sm"
              />
              <template #help>
                <span class="text-xs sm:text-sm">{{ t('timer.settings.deadlineHelp') }}</span>
              </template>
            </UFormField>
          </div>

          <!-- Time Limit Settings -->
          <div v-if="countdownType === 'timeLimit'" class="space-y-3 sm:space-y-4">
            <UFormField :label="t('timer.settings.timeLimit')">
              <UInput
                v-model.number="formData.timeLimitMinutes"
                type="number"
                min="1"
                placeholder="60"
                :error="errors.timeLimit"
                size="sm"
              />
              <template #help>
                <span class="text-xs sm:text-sm">{{ t('timer.settings.timeLimitHelp') }}</span>
              </template>
            </UFormField>
          </div>

          <!-- Warning Settings -->
          <div class="space-y-3 sm:space-y-4">
            <UFormField :label="t('timer.settings.warnings')">
              <UCheckbox
                v-model="formData.showWarning"
                :label="t('timer.settings.showWarning')"
                size="sm"
              />
            </UFormField>

            <UFormField
              v-if="formData.showWarning"
              :label="t('timer.settings.warningThreshold')"
            >
              <UInput
                v-model.number="formData.warningThreshold"
                type="number"
                min="1"
                placeholder="300"
                :error="errors.warningThreshold"
                size="sm"
              />
              <template #help>
                <span class="text-xs sm:text-sm">
                  {{ formatTime(formData.warningThreshold || 0) }}
                </span>
              </template>
            </UFormField>
          </div>
        </div>

        <!-- Time Mode Settings -->
        <div v-if="formData.mode === 'time'" class="space-y-3 sm:space-y-4">
          <UAlert
            color="info"
            variant="soft"
            icon="i-heroicons-information-circle"
            size="sm"
          >
            <template #title>
              <span class="text-sm">{{ t('timer.modes.time') }}</span>
            </template>
            <template #description>
              <span class="text-xs sm:text-sm">{{ t('timer.settings.timeModeInfo') }}</span>
            </template>
          </UAlert>
        </div>

        <!-- Display Settings -->
        <div class="space-y-3 sm:space-y-4">
          <h4 class="text-sm sm:text-base font-semibold">{{ t('timer.settings.displaySettings') }}</h4>
          
          <UFormField :label="t('timer.settings.showProgress')">
            <UCheckbox
              v-model="formData.showProgress"
              :label="t('timer.settings.showProgress')"
              size="sm"
            />
          </UFormField>
        </div>

        <!-- Preview -->
        <div class="space-y-3 sm:space-y-4">
          <h4 class="text-sm sm:text-base font-semibold">{{ t('timer.settings.preview') }}</h4>
          <div class="p-3 sm:p-4 border rounded-lg">
            <TestTimer
              :timer="previewTimer"
              :show-warning="formData.showWarning"
              :warning-threshold="formData.warningThreshold"
            />
          </div>
        </div>
      </div>
    </form>

    <!-- Actions -->
    <template #footer>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <UButton
          variant="soft"
          size="sm"
          @click="$emit('cancel')"
        >
          {{ t('timer.settings.actions.cancel') }}
        </UButton>
        <div class="flex items-center gap-2">
          <UButton
            v-if="isEditing"
            variant="outline"
            color="info"
            size="sm"
            @click="$emit('preview')"
          >
            <UIcon name="i-heroicons-eye" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ t('timer.settings.actions.preview') }}</span>
          </UButton>
          <UButton
            type="submit"
            color="success"
            :loading="isSaving"
            size="sm"
            @click="$emit('save', formData)"
          >
            <UIcon name="i-heroicons-check" class="w-4 h-4" />
            {{ isEditing ? t('timer.settings.actions.save') : t('timer.settings.actions.apply') }}
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  timer?: TestTimer
  isSaving?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  timer: undefined,
  isSaving: false
})

defineEmits<{
  save: [timer: Partial<TestTimer>]
  cancel: []
  delete: []
  preview: []
}>()

const formData = ref<Partial<TestTimer> & {
  showWarning?: boolean
  warningThreshold?: number
  showProgress?: boolean
  timeLimitMinutes?: number
}>({
  mode: props.timer?.mode || 'countdown',
  deadline: props.timer?.deadline || undefined,
  timeLimit: props.timer?.timeLimit || undefined,
  timeLimitMinutes: props.timer?.timeLimit ? Math.floor(props.timer.timeLimit / 60) : undefined,
  isExpired: props.timer?.isExpired || false,
  showWarning: true,
  warningThreshold: 300,
  showProgress: true
})

const errors = ref<Record<string, string>>({})

const isEditing = computed(() => !!props.timer)

const modeOptions = [
  { label: t('timer.modes.countdown'), value: 'countdown' },
  { label: t('timer.modes.time'), value: 'time' }
]

const countdownTypeOptions = [
  { label: t('timer.types.deadline'), value: 'deadline' },
  { label: t('timer.types.timeLimit'), value: 'timeLimit' }
]

const countdownType = ref(props.timer?.mode === 'countdown' ? 
  (props.timer?.deadline ? 'deadline' : 'timeLimit') : 'deadline')

const previewTimer = computed(() => ({
  mode: formData.value.mode,
  deadline: countdownType.value === 'deadline' ? formData.value.deadline : undefined,
  timeLimit: countdownType.value === 'timeLimit' && formData.value.timeLimitMinutes ? 
    formData.value.timeLimitMinutes * 60 : undefined,
  isExpired: false
}))

watch(countdownType, (newType) => {
  if (newType === 'deadline') {
    formData.value.timeLimit = undefined
    formData.value.timeLimitMinutes = undefined
  } else {
    formData.value.deadline = undefined
  }
})

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours}ч ${minutes}м ${secs}с`
  } else if (minutes > 0) {
    return `${minutes}м ${secs}с`
  } else {
    return `${secs}с`
  }
}

const _validateForm = () => {
  errors.value = {}
  
  if (!formData.value.mode) {
    errors.value.mode = 'Выберите режим таймера'
  }
  
  if (formData.value.mode === 'countdown') {
    if (countdownType.value === 'deadline' && !formData.value.deadline) {
      errors.value.deadline = 'Укажите дедлайн'
    }
    if (countdownType.value === 'timeLimit' && !formData.value.timeLimitMinutes) {
      errors.value.timeLimit = 'Укажите время выполнения'
    }
  }
  
  return Object.keys(errors.value).length === 0
}
</script> 