import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import Cart from '../components/Cart.vue'

Vue.use(Router)

const routes = [
  {
    path: '/cart',
    // 临时使用
    alias: '/',
    name: 'cart',
    component: Cart
  }
]


export default new Router({ routes })