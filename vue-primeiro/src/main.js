// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueMaterial)
// definimos um tema padrão para nosso MD
Vue.material.theme.register('default', {
  primary: 'light-blue',
  accent: 'pink'
})

Vue.config.productionTip = false
