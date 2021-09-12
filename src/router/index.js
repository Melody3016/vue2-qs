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
    component: () => import('../views/Test2.vue'),
    props: route => (route.query)
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../views/Test3.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import('../views/Test4.vue')
  },
  {
    path: '/test5',
    name: 'Test5',
    component: () => import('../views/Test5.vue')
  },
  {
    path: '/test6',
    name: 'Test6',
    component: () => import('../views/Test6.vue')
  },
  {
    path: '/test7',
    name: 'Test7',
    component: () => import('../views/Test7.vue')
  },
  {
    path: '/test8',
    name: 'Test8',
    component: () => import('../views/Test8.vue')
  },
  {
    path: '/test9',
    name: 'Test9',
    component: () => import('../views/Test9.vue'),
    meta: { msg: '我是test9路由信息' },
    children: [
      {
        path: 'test91',
        name: 'Test91',
        component: () => import('../views/Test91.vue'),
        meta: { msg: '我是test9下的test91路由信息' }
      },
      {
        path: 'test92',
        name: 'Test92',
        component: () => import('../views/Test92.vue')
      },
      {
        path: 'test93',
        name: 'Test93',
        component: () => import('../views/Test93.vue')
      }
    ]
  },
  {
    path: '/test10',
    name: 'Test10',
    component: () => import('../views/Test10.vue')
  },
  {
    path: '/test11',
    name: 'Test11',
    component: () => import('../views/Test11.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
