<template>
  <div>
    <UButton
      v-if="!loggedIn"
      :label="t('auth.signIn')"
      variant="subtle"
      size="sm"
      icon="i-heroicons-arrow-right-on-rectangle"
      :to="loginUrl"
    />

    <UDropdownMenu
      v-else
      :items="profileMenuItems"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8
      }"
      :ui="{
        content: 'w-48'
      }"
    >
      <UButton
        variant="ghost"
        size="sm"
        class="p-1"
      >
        <UAvatar
          :src="user?.picture"
          :alt="user?.name || user?.email"
          size="sm"
          class="w-8 h-8"
        />
      </UButton>
    </UDropdownMenu>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { t } = useI18n()
const { loggedIn, user, clear } = useUserSession()
const route = useRoute()

const loginUrl = computed(() => {
  return `/login?redirect=${encodeURIComponent(route.fullPath)}`
})

const profileMenuItems = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: user.value?.name || user.value?.email || t('auth.profile'),
      icon: 'i-heroicons-user-circle',
      to: '/me'
    }
  ],
  [
    {
      label: t('auth.signOut'),
      icon: 'i-heroicons-arrow-left-on-rectangle',
      onSelect: () => clear()
    }
  ]
])
</script> 