import type { Router } from 'vue-router'
import type { RouteType } from '~/types/router'
import { usePermissionStore, useUserStore } from '@/store'
import { NOT_FOUND_ROUTE } from '@/router/routes'
import { getToken, refreshAccessToken, removeToken } from '@/utils/auth/token'
import { toLogin } from '@/utils/auth/router'
import { isNullOrWhitespace } from '@/utils/common'

const WHITE_LIST = ['/login']
export function createPermissionGuard(router: Router) {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to) => {
    const token = getToken()

    /** 没有token的情况 */
    if (isNullOrWhitespace(token)) {
      if (WHITE_LIST.includes(to.path))
        return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    /** 有token的情况 */

    if (to.path === '/login')
      return { path: '/', replace: true }

    // 已经拿到用户信息
    if (userStore.userId) {
      refreshAccessToken()
      return true
    }
    await userStore.getUserInfo().catch((error) => {
      removeToken()
      toLogin()
      window.$message?.error(error.message || '获取用户信息失败！')
    })
    const accessRoutes = permissionStore.generateRoutes(userStore.role)
    accessRoutes.forEach((route: RouteType) => {
      !router.hasRoute(route.name) && router.addRoute(route)
    })
    router.addRoute(NOT_FOUND_ROUTE)
    return { ...to, replace: true }
  })
}
