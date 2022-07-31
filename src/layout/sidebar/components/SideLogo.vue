<script setup lang="ts">
import { useAppStore } from '@/store'
const title = import.meta.env.VITE_APP_TITLE

const appStore = useAppStore()
</script>

<template>
  <router-link h-60 f-c-c to="/">
    <icon-custom-logo text-36 color-primary />
    <h2 v-show="!appStore.collapsed" ml-15 color-primary text-18 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </router-link>
</template>
