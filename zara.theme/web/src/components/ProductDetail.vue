<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center">
    <p class="text-sm text-gray-500">Loading product...</p>
  </div>
  
  <div v-else-if="error" class="min-h-screen flex items-center justify-center">
    <p class="text-sm text-red-500">{{ error }}</p>
  </div>
  
  <div v-else-if="!product" class="min-h-screen flex items-center justify-center">
    <p class="text-sm text-gray-500">Product not found</p>
  </div>
  
  <div v-else class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Image Gallery -->
      <div class="space-y-4">
        <div v-for="image in product.images" 
             :key="image.src" 
             class="aspect-[3/4] bg-gray-100"
        >
          <img 
            :src="image.src" 
            :alt="product.title"
            class="w-full h-full object-cover object-center"
          >
        </div>
      </div>
      
      <!-- Product Info -->
      <div class="sticky top-20 h-fit">
        <div class="max-w-xl space-y-8">
          <!-- Title and Price -->
          <div class="space-y-4">
            <h1 class="text-xl tracking-wider font-light">{{ product.title }}</h1>
            <p class="text-lg">${{ formatPrice(selectedVariant?.price || product.variants[0]?.price) }}</p>
          </div>
          
          <!-- Variants -->
          <div v-if="product.variants.length > 1" class="space-y-4">
            <p class="text-xs tracking-wider">SELECT SIZE</p>
            <div class="grid grid-cols-4 gap-2">
              <button 
                v-for="variant in product.variants" 
                :key="variant.id"
                @click="selectedVariant = variant"
                :class="[
                  'py-3 text-xs tracking-wider border',
                  selectedVariant?.id === variant.id 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 hover:border-black'
                ]"
              >
                {{ variant.title }}
              </button>
            </div>
          </div>
          
          <!-- Add to Cart -->
          <button 
            @click="addToCart"
            :disabled="!selectedVariant"
            class="w-full bg-black text-white py-4 text-sm tracking-wider hover:bg-black/90 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Add to Bag
          </button>
          
          <!-- Description -->
          <div class="prose prose-sm max-w-none pt-8 border-t">
            <div v-html="product.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShopifyService } from '../services/shopifyService';

export default {
  name: 'ProductDetail',
  props: {
    handle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: null,
      selectedVariant: null,
      loading: true,
      error: null
    }
  },
  methods: {
    formatPrice(price) {
      return price ? Number(price).toFixed(2) : '0.00'
    },
    addToCart() {
      if (!this.selectedVariant) return;
      // TODO: Implement add to cart functionality
      console.log('Adding to cart:', {
        product: this.product.title,
        variant: this.selectedVariant.title,
        price: this.selectedVariant.price
      });
    }
  },
  async created() {
    try {
      this.loading = true;
      console.log('Loading product with handle:', this.handle);
      this.product = await ShopifyService.getProduct(this.handle);
      console.log('Loaded product:', this.product);
      if (this.product) {
        this.selectedVariant = this.product.variants[0];
      }
    } catch (err) {
      console.error('Error loading product:', err);
      this.error = 'Unable to load product. Please try again later.';
    } finally {
      this.loading = false;
    }
  }
}
</script> 