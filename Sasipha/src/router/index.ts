import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryView from '../views/CategoryViwe.vue'
import SudentView from '../views/StudentView.vue'
import EventDetailView from '@/views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutViewVue from '@/views/event/EventLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1')  })
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
      name: 'event-layout',
      components: EventLayoutViewVue,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail',
          props: true,
          component: EventDetailView,
        },
        {
          path: 'edit',
          name: 'event-edit',
          props: true,
          component: EventEditView 
        },
        {
          path: 'register',
          name: 'event-register',
          props: true,
          component: EventRegisterView 

        }
      ]
    },
    

    
  ]
})

export default router
