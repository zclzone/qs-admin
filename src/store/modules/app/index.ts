import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      reloadFlag: <boolean> true,
      collapsed: <boolean> false,
    }
  },
  actions: {
    async reloadPage() {
      window.$loadingBar?.start()
      this.reloadFlag = false
      await nextTick()
      this.reloadFlag = true

      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
        window.$loadingBar?.finish()
      }, 100)
    },
    switchCollapsed() {
      this.collapsed = !this.collapsed
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed
    },
  },
})
