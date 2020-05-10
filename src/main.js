import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import FlagIcon from 'vue-flag-icon'
import './assets/styles.scss'

Vue.use(Buefy)
Vue.use(FlagIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
