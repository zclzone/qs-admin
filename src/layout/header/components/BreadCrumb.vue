<script setup lang="ts">
import { renderIcon } from '@/utils/common'

const router = useRouter()
const route = useRoute()

function handleBreadClick(path: string) {
  if (path === route.path)
    return
  router.push(path)
}
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in route.matched.filter(item => !!item.meta?.title)" :key="item.path" @click="handleBreadClick(item.path)">
      <component :is="renderIcon(item.meta?.icon as string, { size: 16 })" v-if="item.meta?.icon" />
      {{ item.meta.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
