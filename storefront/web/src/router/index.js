import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 