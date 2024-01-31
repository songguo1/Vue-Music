import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/css/common.css"
import api from "./api"
import "./assets/font/iconfont.css"
import Tabs from "./components/tabs"

Vue.use(Tabs)
Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
