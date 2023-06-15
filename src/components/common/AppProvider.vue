<script setup lang="ts">
import { kebabCase } from 'lodash-es'
import { useCssVar } from '@vueuse/core'
import type { GlobalThemeOverrides } from 'naive-ui'
import { useThemeStore } from '@/store'

type ThemeVars = Exclude<GlobalThemeOverrides['common'], undefined>
type ThemeVarsKeys = keyof ThemeVars

const themStore = useThemeStore()

watch(
  () => themStore.naiveThemeOverrides.common,
  (common) => {
    for (const key in common) {
      useCssVar(`--${kebabCase(key)}`, document.documentElement).value = common[key as ThemeVarsKeys] || ''
      if (key === 'primaryColor')
        window.localStorage.setItem('__THEME_COLOR__', common[key as ThemeVarsKeys] || '')
    }
  },
  { immediate: true },
)

watch(
  () => themStore.darkMode,
  (newValue) => {
    if (newValue)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  },
  {
    immediate: true,
  },
)

function handleWindowResize() {
  themStore.setIsMobile(document.body.offsetWidth <= 640)
}
onMounted(() => {
  handleWindowResize()
  window.addEventListener('resize', handleWindowResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize)
})
</script>

<template>
  <n-config-provider wh-full :theme-overrides="themStore.naiveThemeOverrides" :theme="themStore.naiveTheme">
    <slot />
  </n-config-provider>
</template>
