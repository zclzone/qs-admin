<script setup lang="ts">
import { useAppStore } from '@/store'
const appStore = useAppStore()
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" v-if="appStore.reloadFlag" :key="route.path" />
    </transition>
  </router-view>
</template>
