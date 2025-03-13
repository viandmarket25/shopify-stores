<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-3xl font-light text-center mb-12">Our Products</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductList
  }
}
</script> 