import Vue from 'vue'
import App from './App'
import router from './router'
import zepto from 'webpack-zepto'

/** 公用部分设置 */
import 'assets/weui.min.css'
window.weui = require('weui.js')
window.$ = zepto

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})
