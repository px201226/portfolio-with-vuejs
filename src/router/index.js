import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '홈',
    component: () => import('../views/layout-home.vue')
  },

  {
    path: '/projects',
    name: '프로젝트',
    component: () => import('../views/layout-project-list.vue')
  },

  {
    path: '/projects/:id',
    name: '상세보기',
    component: () => import( '../views/layout-project-view.vue')
  },

  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
