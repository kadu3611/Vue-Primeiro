import Vue from 'vue'
import Router from 'vue-router'
import About from '../Views/About'
import Config from '../Views/Config'
import Home from '../Views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
