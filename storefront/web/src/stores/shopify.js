import { defineStore } from 'pinia';
import { shopifyClient } from '../services/shopify';

export const useShopifyStore = defineStore('shopify', {
  state: () => ({
    products: [],
    cart: [],
    checkout: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const products = await shopifyClient.getProducts();
        this.products = products;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async addToCart(product) {
      try {
        if (!this.checkout) {
          this.checkout = await shopifyClient.createCheckout();
        }
        
        await shopifyClient.addItemsToCheckout(this.checkout.id, [{
          variantId: product.variants[0].id,
          quantity: 1
        }]);
        
        this.cart.push(product);
      } catch (error) {
        this.error = error.message;
      }
    }
  }
}); 