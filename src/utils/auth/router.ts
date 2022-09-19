import { router } from '@/router'

export function toLogin() {
  const needRedirect = !['/404', '/login'].includes(router.currentRoute.value.path)
  router.replace({
    path: '/login',
    query: needRedirect ? { ...router.currentRoute.value.query, redirect: router.currentRoute.value.path } : {},
  })
}
