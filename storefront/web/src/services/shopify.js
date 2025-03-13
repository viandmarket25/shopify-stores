import Client from 'shopify-buy';
import { shopifyConfig } from '../config/shopify';

const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export const shopifyClient = {
  // Fetch all products
  getProducts: async () => {
    try {
      const products = await client.product.fetchAll();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Fetch a single product by ID
  getProduct: async (productId) => {
    try {
      const product = await client.product.fetch(productId);
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Create checkout
  createCheckout: async (cart) => {
    try {
      const checkout = await client.checkout.create();
      return checkout;
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  },

  // Add items to checkout
  addItemsToCheckout: async (checkoutId, items) => {
    try {
      const checkout = await client.checkout.addLineItems(checkoutId, items);
      return checkout;
    } catch (error) {
      console.error('Error adding items to checkout:', error);
      throw error;
    }
  }
}; 