<template>
  <div class="space-y-4 sm:space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex items-center gap-3 sm:gap-4">
        <UAvatar 
          :src="user.picture" 
          :alt="user.name || user.nickname || 'User'"
          size="xl"
        />
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">
            {{ user.name || user.nickname || 'Unknown User' }}
          </h2>
        </div>
      </div>
      
      <UButton 
        v-if="editable"
        variant="outline"
        size="sm"
        @click="$emit('edit')"
      >
        Edit Profile
      </UButton>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <UCard>
        <template #header>
          <h3 class="text-base sm:text-lg font-semibold">Contact Information</h3>
        </template>
        
        <div class="space-y-3 sm:space-y-4">
          <div v-if="user.email">
            <label class="text-xs sm:text-sm font-medium">Email</label>
            <p class="text-xs sm:text-sm">{{ user.email }}</p>
          </div>
          
          <div v-if="user.nickname">
            <label class="text-xs sm:text-sm font-medium">Nickname</label>
            <p class="text-xs sm:text-sm">{{ user.nickname }}</p>
          </div>
          
          <div v-if="user.givenName || user.familyName">
            <label class="text-xs sm:text-sm font-medium">Full Name</label>
            <p class="text-xs sm:text-sm">
              {{ [user.givenName, user.familyName].filter(Boolean).join(' ') }}
            </p>
          </div>
          
          <div v-if="user.locale">
            <label class="text-xs sm:text-sm font-medium">Language</label>
            <p class="text-xs sm:text-sm">{{ user.locale }}</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-base sm:text-lg font-semibold">System Information</h3>
        </template>
        
        <div class="space-y-3 sm:space-y-4">
          <div>
            <label class="text-xs sm:text-sm font-medium">User ID</label>
            <p class="text-xs font-mono break-all">{{ user.id }}</p>
          </div>
          
          <div v-if="user.updatedAt">
            <label class="text-xs sm:text-sm font-medium">Last Updated</label>
            <p class="text-xs sm:text-sm">{{ formatDate(user.updatedAt) }}</p>
          </div>
          
          <div v-if="user.loggedInAt">
            <label class="text-xs sm:text-sm font-medium">Last Login</label>
            <p class="text-xs sm:text-sm">{{ formatDate(user.loggedInAt) }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <div v-if="showStats" class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      <UCard>
        <div class="text-center">
          <div class="text-xl sm:text-2xl font-bold">0</div>
          <div class="text-xs sm:text-sm">Quizzes Created</div>
        </div>
      </UCard>
      
      <UCard>
        <div class="text-center">
          <div class="text-xl sm:text-2xl font-bold">0</div>
          <div class="text-xs sm:text-sm">Quizzes Completed</div>
        </div>
      </UCard>
      
      <UCard>
        <div class="text-center">
          <div class="text-xl sm:text-2xl font-bold">0%</div>
          <div class="text-xs sm:text-sm">Average Score</div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: User
  showStats?: boolean
  editable?: boolean
}

withDefaults(defineProps<Props>(), {
  showStats: false,
  editable: false
})

defineEmits<{
  edit: []
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
