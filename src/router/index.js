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
  },
  {
    path: '/test3',
    name: 'Test3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test3.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test4.vue')
  },
  {
    path: '/test5',
    name: 'Test5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test5.vue')
  },
  {
    path: '/test6',
    name: 'Test6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test6.vue')
  },
  {
    path: '/test7',
    name: 'Test7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test7.vue')
  },
  {
    path: '/test8',
    name: 'Test8',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test8.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
