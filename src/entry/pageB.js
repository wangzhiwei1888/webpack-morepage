// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../pageB/App'
import router from '../pageB/router'

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// 引入数据交互配置文件
import '../pageB/config/http'

// 引入vuex
import { store } from '../pageB/store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
