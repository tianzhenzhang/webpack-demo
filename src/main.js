import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './commom/style/style.css'
import store from './vuex/store.js'

Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
