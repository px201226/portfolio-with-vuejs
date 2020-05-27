import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/layout-home.vue')
  },

  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/layout-project-list.vue')
  },

  {
    path: '/projects/:id',
    name: 'projectview',
    component: () => import( '../views/layout-project-view.vue')
  },

  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
