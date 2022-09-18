import type { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { EMPTY_ROUTE, NOT_FOUND_ROUTE, basicRoutes as routes } from './routes'
import { getToken } from '@/utils/auth/token'
import { isNullOrWhitespace } from '@/utils/common'
import { usePermissionStore, useUserStore } from '@/store'
import type { RouteType } from '~/types/router'

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

export async function addDynamicRoutes() {
  const token = getToken()

  // 没有token情况
  if (isNullOrWhitespace(token)) {
    router.addRoute(EMPTY_ROUTE)
    return
  }

  // 有token的情况
  try {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    !userStore.userId && (await userStore.getUserInfo())
    const accessRoutes = permissionStore.generateRoutes(userStore.role)
    accessRoutes.forEach((route: RouteType) => {
      !router.hasRoute(route.name) && router.addRoute(route)
    })
    router.hasRoute(EMPTY_ROUTE.name) && router.removeRoute(EMPTY_ROUTE.name)
    router.addRoute(NOT_FOUND_ROUTE)
  }
  catch (error) {
    console.error(error)
  }
}

export async function setupRouter(app: App) {
  await addDynamicRoutes()
  setupRouterGuard(router)
  app.use(router)
}
