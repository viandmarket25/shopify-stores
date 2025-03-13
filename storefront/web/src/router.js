import { createRouter, createWebHistory } from 'vue-router';
import PendingView from './views/pending.vue'; // Replace with your actual component
import MarketingView from './views/marketing.vue'
import JoinView from './views/join.vue'
import PrivacyView from './views/privacy.vue'
import WaitlistView from './views/waitlist.vue'
import QuoteView from './views/quote.vue'
import ContactView from './views/contact.vue'



import BlogsView from './views/blogs.vue'


import ServicesView from './views/service.vue'

import FocusView from './views/market-focus.vue'
import AdvantageView from './views/advantage.vue'
import AboutView from './views/about.vue'

import ProductsView from './views/products.vue'

import BlogDetail from './views/pages/blog-detail.vue'


//import ProductDetails from "./vnav-widgets/product-details.vue"
import CartView from "./views/cart.vue"

import FilterView from "./views/filter.vue"

import SearchResults from "./views/search-results.vue"

import CheckoutView from "./views/checkout.vue"
import ProductDetails from "./views/good.vue"

import AccountView from "./views/account.vue"

const routes = [

  {
    path: '/account',
    name: 'AccountView',
    component: AccountView,
  },

  {
    path: '/search/:query',
    name: 'SearchResults',
    component: SearchResults,
  },
 
   
  {
    path: '/goods/',
    name: 'ProductDetail',
    component: ProductDetails,
  },

  {
    path: '/goods/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },

  {
    path: '/filter',
    name: 'FilterView',
    component: FilterView,
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView,
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },
 

  {
    path: '/services',
    name: 'ServicesView',
    component: ServicesView,
  },
  {
    path: '/focus',
    name: 'FocusView',
    component: FocusView,
  },

  {
    path: '/advantage',
    name: 'AdvantageView',
    component: AdvantageView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },


  {
    path: '/',
    name: 'MarketingView',
    component: MarketingView,
  },
  {
    path: '/blogs',
    name: 'BlogView',
    component: BlogsView,
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView,
  },
  {
    path: '/blogs/:id/:title',
    name: 'BlogDetail',
    component: BlogDetail,
  },

  {
    path: '/waitlist',
    name: 'WaitlistView',
    component: WaitlistView,
  },
  {
    path: '/privacy',
    name: 'PrivacyView',
    component: PrivacyView,
  },
 
  {
    path: '/join',
    name: 'JoinView',
    component: JoinView,
  },
  {
    path: '/quote',
    name: 'QuoteView',
    component: QuoteView,
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
  },
  {
    path: '/pending',
    name: 'PendingView',
    component: PendingView,
  },
  // Add your routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
