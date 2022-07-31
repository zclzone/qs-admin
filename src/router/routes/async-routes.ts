import type { RoutesType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export const asyncRoutes: RoutesType = [
  {
    name: 'Demo',
    path: '/demo',
    component: Layout,
    redirect: '/demo/unocss',
    meta: {
      title: '示例页面',
      icon: 'material-symbols:menu-book-outline-rounded',
      customIcon: 'logo',
      role: ['admin'],
    },
    children: [
      {
        name: 'Unocss',
        path: 'unocss',
        component: () => import('@/views/demo/unocss/index.vue'),
        meta: {
          title: 'unocss',
          icon: 'logos:unocss',
          role: ['admin'],
        },
      },
      {
        name: 'Animation',
        path: 'animation',
        component: () => import('@/views/demo/animation/index.vue'),
        meta: {
          title: 'animation',
          icon: 'clarity:animation-line',
          role: ['admin'],
        },
      },
    ],
  },
]
