import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router";

import store from "@/store";

import 'swiper/css/swiper.css'

import '@/mock/mockService.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
