<template>
  <div class="product-grid">
    <div v-if="loading" class="min-h-[400px] flex items-center justify-center">
      <p class="text-sm text-gray-500">Loading collection...</p>
    </div>
    
    <div v-else-if="error" class="min-h-[400px] flex items-center justify-center">
      <p class="text-sm text-red-500">{{ error }}</p>
    </div>
    
    <div v-else-if="products.length === 0" class="min-h-[400px] flex items-center justify-center">
      <p class="text-sm text-gray-500">No products available</p>
    </div>
    
    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 lg:gap-x-8">
      <div v-for="product in products" 
           :key="product.id"
           @click="goToProduct(product)"
           class="group cursor-pointer"
      >
        <!-- Image Container -->
        <div class="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img 
            :src="product.images[0]?.src || '/placeholder-image.jpg'" 
            :alt="product.title"
            class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            @error="handleImageError"
          >
          
          <!-- Quick Add Button -->
          <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <button 
              @click.stop="quickAdd(product)"
              class="w-full bg-white/90 backdrop-blur-sm py-3 text-xs tracking-wider hover:bg-white transition-colors"
            >
              Quick Add
            </button>
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="mt-4 space-y-1">
          <p class="text-xs tracking-wider">{{ product.title }}</p>
          <p class="text-xs text-gray-600">${{ formatPrice(product.variants[0]?.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShopifyService } from '../services/shopifyService';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      loading: true,
      error: null
    }
  },
  methods: {
    formatPrice(price) {
      return price ? Number(price).toFixed(2) : '0.00'
    },
    handleImageError(e) {
      e.target.src = '/placeholder-image.jpg'
    },
    quickAdd(product) {
      // TODO: Implement quick add functionality
      console.log('Quick add:', product.title);
    },
    goToProduct(product) {
      console.log('Product clicked:', product);
      if (product.handle) {
        console.log('Navigating to:', `/products/${product.handle}`);
        this.$router.push(`/products/${product.handle}`);
      } else {
        console.warn('No handle found for product:', product);
      }
    }
  },
  async created() {
    try {
      this.loading = true;
      this.products = await ShopifyService.getProducts();
      this.loading = false;
    } catch (err) {
      this.error = 'Unable to load products. Please try again later.';
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.loading, .error {
  text-align: center;
  padding: 2rem;
}

.error {
  color: red;
}
</style> 