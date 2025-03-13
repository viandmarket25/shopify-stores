import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/home.vue';
import ProductList from './components/ProductList.vue';
import ProductDetail from './components/ProductDetail.vue';
import ProductsView from './views/products.vue';


const routes = [

  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/products/:handle',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
