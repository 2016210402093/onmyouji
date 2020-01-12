import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/api'
import store from './store'

Vue.prototype.$api = api; //挂载api方便调用
Vue.config.productionTip = false
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
