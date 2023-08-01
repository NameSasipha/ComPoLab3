import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryViwe.vue')
    },
    {
    path: '/student',
    name: 'student',
    component: () => import('../views/StudentView.vue')}

    
  ]
})

export default router
