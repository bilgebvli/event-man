import { createRouter, createWebHistory } from 'vue-router'
import ExploreHubs from '../views/exploreHubs/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exploreHub',
      component: ExploreHubs
    },
    {
      path: '/auth/sign-in',
      name: 'signIn',
      component: () => import('../views/auth/signIn.vue')
    },
    {
      path: '/auth/sign-up',
      name: 'signUp',
      component: () => import('../views/auth/signUp.vue')
    },
    {
      path: '/:hubId',
      name: 'hubDetail',
      component: () => import('../views/exploreHubs/hubDetail/index.vue')
    },
    {
      path: '/businesses',
      name: 'businesses',
      component: () => import('../views/businesses/index.vue')
    },
    {
      path: '/businesses/addBusiness',
      name: 'addBusiness',
      component: () => import('../views/businesses/actions/addBusiness.vue')
    },
    {
      path: '/businesses/editBusiness/:businessId',
      name: 'editBusiness',
      component: () => import('../views/businesses/actions/editBusiness.vue')
    },
  ]
})

export default router
