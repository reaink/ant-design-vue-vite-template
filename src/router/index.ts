import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

/**
 * meta.layout 指定使用的 layouts 目录下的布局组件
 */
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: {
        name: 'Home',
      },
    },
    {
      path: '/home',
      name: 'HomeLayout',
      component: defineAsyncComponent(() => import('/@/views/Home/Layout.vue')),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: defineAsyncComponent(() => import('/@/views/Home/Home.vue')),
        },
        {
          path: 'posts',
          name: 'Posts',
          component: defineAsyncComponent(() => import('/@/views/Home/Posts.vue')),
        },
      ],
    },
    {
      path: '/about',
      name: 'About',
      component: defineAsyncComponent(() => import('/@/views/About.vue')),
      meta: {
        layout: 'empty', // 自定义布局
      },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: defineAsyncComponent(() => import('/@/views/404.vue')),
      meta: {
        layout: 'empty',
      },
    },
    {
      path: '/:pathMatch(.*)',
      redirect: {
        name: 'NotFound',
      },
    },
  ],
})

export default router
