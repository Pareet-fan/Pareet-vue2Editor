import '@/common/global.less'
import '@/common/iconfont.css'
import '@/common/init'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

