import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


axios.get('https://api.clever-cloud.com/v2/products/instances')
  .then((res) => {
    store.dispatch('updateVariants', res.data)
  })
  .catch((error) => {
    console.error(error)
  })