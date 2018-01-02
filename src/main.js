
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'




Vue.use(Element)
// Vue.use(Axios)
//
// Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
