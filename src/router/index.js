import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeitragComponent from '../views/BeitragComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demnächst/eins',
      name: 'erster Beitrag',
      component: BeitragComponent
    }
  ]
})

export default router
