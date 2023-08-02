import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryView from '../views/CategoryViwe.vue'
import SudentView from '../views/StudentView.vue'
import EventDetailView from '../views/EventDetailView.vue'

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
      component: CategoryView
    },
    {
    path: '/student',
    name: 'student',
    component: SudentView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }

    
  ]
})

export default router
