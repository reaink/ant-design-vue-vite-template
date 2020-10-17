import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

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
    },
  ],
})

export default router
