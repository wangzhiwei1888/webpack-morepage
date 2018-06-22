import Vue from 'vue'
import Router from 'vue-router'
import SelfHelloWorld from '../selfcomponents/SelfHelloWorld'
import '../assets/style.scss'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelfHelloWorld',
      component: SelfHelloWorld
    }
  ]
})
