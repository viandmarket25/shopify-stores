<template>
  <div class="products-container">
    <div v-if="loading">Loading products...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.images[0].src" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <p>{{ product.variants[0].price }}</p>
        <button @click="addToCart(product)" 
                class="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useShopifyStore } from '../stores/shopify';

const shopifyStore = useShopifyStore();

onMounted(async () => {
  await shopifyStore.fetchProducts();
});

const { products, loading, error } = storeToRefs(shopifyStore);
const addToCart = shopifyStore.addToCart;
</script> 