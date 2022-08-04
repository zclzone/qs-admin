import type { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes as routes } from './routes'

const isHash = import.meta.env.VITE_USE_HASH === 'true'
export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    router.hasRoute(name!) && router.removeRoute(name!)
  })
  routes.forEach((route) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
}

export function setupRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
}
