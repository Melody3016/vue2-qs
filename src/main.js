import Vue from 'vue'
import { tabs, tabPane } from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(tabs)
Vue.use(tabPane)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
