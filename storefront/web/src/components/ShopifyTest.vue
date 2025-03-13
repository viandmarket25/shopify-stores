<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Shopify Connection Test</h2>
    <button 
      @click="testConnection" 
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Test Connection
    </button>
    <div v-if="status" class="mt-4">
      <p>Status: {{ status }}</p>
      <p v-if="error" class="text-red-500">Error: {{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { shopifyClient } from '../services/shopify'

const status = ref('')
const error = ref(null)

const testConnection = async () => {
  try {
    status.value = 'Testing connection...'
    const products = await shopifyClient.getProducts()
    status.value = `Connection successful! Found ${products.length} products.`
    error.value = null
  } catch (e) {
    status.value = 'Connection failed'
    error.value = e.message
  }
}
</script> 