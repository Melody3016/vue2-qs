import Vue from 'vue'
import VueRouter from 'vue-router'
import Test1 from '../views/Test1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
