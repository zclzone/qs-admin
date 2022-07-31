import type { RouteType, RoutesType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export const basicRoutes: RoutesType = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },

  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },

  {
    name: 'Dashboard',
    path: '/',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        name: 'Workbench',
        path: 'workbench',
        component: () => import('@/views/workbench/index.vue'),
        meta: {
          title: '工作台',
          icon: 'mdi:home',
        },
      },
    ],
  },

  {
    name: 'ErrorPage',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: 'ErrorPage',
      index: 99,
      icon: 'mdi:alert-circle-outline',
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
          icon: 'tabler:error-404',
        },
      },
    ],
  },

  {
    name: 'ExternalLink',
    path: '/external-link',
    component: Layout,
    meta: {
      title: '外部链接',
      icon: 'mdi:link-variant',
      index: 3,
    },
    children: [
      {
        name: 'LinkGithubSrc',
        path: 'https://github.com/zclzone/qs-admin',
        component: () => {},
        meta: {
          title: '源码 - github',
          icon: 'mdi:github',
        },
      },
      {
        name: 'LinkGiteeSrc',
        path: 'https://gitee.com/zclzone/qs-admin-ts',
        component: () => {},
        meta: {
          title: '源码 - gitee',
          icon: 'simple-icons:gitee',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE: RouteType = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export { asyncRoutes } from './async-routes'
