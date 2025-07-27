<template>
  <div 
    :class="[
      'flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all duration-200',
      'border border-default',
      { 'cursor-pointer hover:shadow-md': clickable }
    ]"
    @click="$emit('click', user)"
  >
    <UAvatar 
      :src="user.picture" 
      :alt="user.name || user.nickname || 'User'"
      :size="avatarSize"
      class="flex-shrink-0"
    />
    
    <div v-if="variant === 'full'" class="flex-1 min-w-0">
      <div class="flex items-center gap-1 sm:gap-2 flex-wrap">
        <h3 class="font-medium truncate text-sm sm:text-base">
          {{ user.name || user.nickname || 'Unknown User' }}
        </h3>
      </div>
      
      <p v-if="user.email" class="text-xs sm:text-sm truncate">
        {{ user.email }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: User
  variant?: 'compact' | 'full'
  size?: 'sm' | 'md' | 'lg'
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'compact',
  size: 'md',
  clickable: false
})

defineEmits<{
  click: [user: User]
}>()

const avatarSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'sm'
    case 'lg': return 'lg'
    default: return 'md'
  }
})
</script>
