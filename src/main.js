import Vue from 'vue'
import {
  tabs, tabPane, Container, Header, Aside, Main,
  Menu, Submenu, MenuItemGroup, MenuItem
} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(tabs)
Vue.use(tabPane)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
