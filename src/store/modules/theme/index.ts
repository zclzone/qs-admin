import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import { defineStore } from 'pinia'
import { getNaiveThemeOverrides, initThemeSettings } from './helpers'

type ThemeState = Theme.Setting

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => initThemeSettings(),
  getters: {
    naiveThemeOverrides(): GlobalThemeOverrides {
      return getNaiveThemeOverrides({ primary: this.primaryColor, ...this.otherColor })
    },
    naiveTheme(): BuiltInGlobalTheme | undefined {
      return this.darkMode ? darkTheme : undefined
    },
  },
  actions: {
    /** 设置暗黑模式 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
    /** 切换/关闭 暗黑模式 */
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    /** 设置主题色 */
    setPrimaryColor(color: string) {
      this.primaryColor = color
    },
  },
})
