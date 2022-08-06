import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/layout/index.vue'
// 公共路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: LayoutView,
    redirect: '/test1', // 访问layout，定向到子路由test2
    children: [
      {
        path: '/test1', // 一定要写绝对路径
        name: 'test1',
        component: () => import('../views/test1')
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('../views/test2')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: publicRoutes
})

export default router
