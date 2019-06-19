import Vue from 'vue'
import App from './App.vue'
import VueTestUi from '../packages/index.js'
Vue.use(VueTestUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
