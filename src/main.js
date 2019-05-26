import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'


Vue.config.productionTip = true

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


