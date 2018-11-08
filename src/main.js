import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import VueCookies from 'vue-cookies'
import {$axios} from './assets/lib/interceptors'
import store from '@/store/index'
import utils from '@/assets/lib/utils'
import ws from '@/assets/lib/ws'
import device from './assets/js/device/index'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.css'

Vue.use(elementUI)
Vue.prototype.$http = $axios
Vue.prototype.$Socket_IP = 'mgz' // Socket连接ip(hosts)
Vue.prototype.$Socket_url = Vue.prototype.$Socket_IP + ':8003/' // Socket连接url
Vue.prototype.$cookies = VueCookies
Vue.prototype.$utils = utils
Vue.prototype.$ws = ws
Vue.prototype.$device = device
Vue.prototype.$elementUI_loadingOption = {
  lock: true,
  text: '连接断开，正在重连',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.8)'
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
