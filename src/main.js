// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import '../static/css/common.css'
import '../static/css/style.css'
import '../static/css/swiper.css'
import '../static/js/rem.js'
// import {Button} from 'element-ui'

// Vue.use(Button)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
