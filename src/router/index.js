import Vue from 'vue'
import VueRouter from 'vue-router'
import layout_home from '../views/layout-home.vue'
import layout_projcet_list from '../views/layout-project-list.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout_home
  },

  {
     path: '/projects',
     name: 'Projects',
     component: layout_projcet_list
  },
  

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
