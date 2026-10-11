import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import HeritageDetailView from '../views/HeritageDetailView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/heritage/:id',
    name: 'heritage-detail',
    component: HeritageDetailView
  }

]

const router = createRouter({
  history: createWebHistory('/pangasinan-tourism/'),
  routes
})

export default router