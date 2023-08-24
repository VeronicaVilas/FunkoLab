import {createRouter, createWebHashHistory} from 'vue-router'

import Home from "../views/Home.vue"
import Cart from "../views/Cart.vue"

export const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/carrinho',
        name: 'carrinho',
        component: Cart
      }
    ]
  })