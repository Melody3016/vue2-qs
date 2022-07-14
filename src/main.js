import Vue from 'vue'
import {
  Tabs, TabPane, Container, Header, Aside, Main,
  Menu, Submenu, MenuItemGroup, MenuItem, Select, Option,
  Form, FormItem, Table, TableColumn, Input, Button, Card,
  Dialog, Checkbox, Divider, CheckboxGroup, Upload
} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(TabPane)
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
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Button)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(Divider)
Vue.use(CheckboxGroup)
Vue.use(Upload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
