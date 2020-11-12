import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/userPage/raitichan',
    name: 'Raitichan',
    component: () => import('../views/userPage/raitichan/Raitichan.vue')
  },
  {
    path: '/userPage/sin_ni',
    name: 'Sin_ni',
    component: () => import('../views/userPage/sin_ni/SinNi.vue')
  },
  {
    path: '/userPage/igarashi',
    name: 'Igarashi',
    component: () => import('../views/userPage/igarashi/Igarashi.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
