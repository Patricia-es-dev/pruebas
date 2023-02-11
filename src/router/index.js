import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../ui/views/Home'
import Patricia from '../ui/views/Patricia'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patricia-anton',
    name: 'Patricia',
    component: Patricia
  }
]

const router = new VueRouter({
  routes
})

export default router
