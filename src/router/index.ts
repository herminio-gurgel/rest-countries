import { createRouter, createWebHistory } from 'vue-router'
import TheNavigationBar from '@/components/TheNavigationBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheNavigationBar,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('../views/DetailView.vue'),
        },
      ],
    },
  ],
})

export default router
