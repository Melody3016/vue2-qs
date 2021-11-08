import Vue from 'vue'
import {
  tabs, tabPane, Container, Header, Aside, Main,
  Menu, Submenu, MenuItemGroup, MenuItem, Select, Option
} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

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
Vue.use(Select)
Vue.use(Option)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
