import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailsView from '../views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventEditView from '../views/event/Edit.vue'
import EventRegisterView from '../views/event/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/about-us',
      redirect: { name: 'about'}
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetailsView
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView
        }
      ]
    },
  ]
})

export default router
