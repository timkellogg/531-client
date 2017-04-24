import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { sync } from 'vuex-router-sync'
import store from './state'
import router from './router'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
