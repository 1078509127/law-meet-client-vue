import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import 'default-passive-events'
//import './permission'
//import './store'
import './utils/request'

//Vue.prototype.$axios = axios
Vue.use(ElementUI)
//Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
