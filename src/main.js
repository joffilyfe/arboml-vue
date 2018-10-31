import Vue from 'vue'
import App from './App.vue'

// Add Boostrap
import BootstrapVue from 'bootstrap-vue'

// Add boostrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
