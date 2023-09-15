<script setup lang="ts">
import { useThemeStore } from '@/store'

const title = import.meta.env.VITE_APP_TITLE

const themeStore = useThemeStore()
</script>

<template>
  <router-link class="h-60 f-c-c" to="/">
    <img src="@/assets/images/logo.png" height="42">
    <h2 v-show="!themeStore.sider.collapsed" class="ml-20 color-primary text-18 font-bold max-w-140 flex-shrink-0">
      {{ title }}
    </h2>
  </router-link>
</template>
