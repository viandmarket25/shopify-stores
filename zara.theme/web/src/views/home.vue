<template>
  <div class="min-h-screen pt-14"> <!-- Added pt-14 for header height -->
    <!-- Main Hero -->
    <section v-if="false" class="relative h-screen overflow-hidden">
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-20">
        <div class="flex flex-col items-center justify-center h-full text-white">
          <h1 class="text-5xl md:text-7xl font-light tracking-[0.2em] mb-4">SUMMER 2023</h1>
          <p class="text-xl md:text-2xl tracking-widest">NEW COLLECTION</p>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <nav class="py-8 border-b border-gray-100">
      <div class="container mx-auto px-4">
        <ul class="flex justify-center space-x-12">
          <li v-for="category in categories" :key="category.id">
            <router-link 
              :to="category.path"
              class="text-sm tracking-widest hover:text-gray-600 transition-colors"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Featured Collections -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="collection in collections" 
               :key="collection.id"
               class="relative group overflow-hidden"
          >
            <img 
              :src="collection.image" 
              :alt="collection.title"
              class="w-full h-[80vh] object-cover transition-transform duration-700 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-end p-8">
              <div class="text-white">
                <h2 class="text-2xl font-light mb-4">{{ collection.title }}</h2>
                <router-link 
                  :to="collection.link"
                  class="inline-block border-b border-white pb-1 hover:border-opacity-50 transition-all"
                >
                  DISCOVER
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-center text-2xl tracking-widest mb-12">NEW ARRIVALS</h2>
        <ProductList />
      </div>
    </section>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'WOMEN', path: '/women' },
        { id: 2, name: 'MEN', path: '/men' },
        { id: 3, name: 'KIDS', path: '/kids' }
      ],
      collections: [
        {
          id: 1,
          title: 'SUMMER DRESSES',
          image: 'https://static.zara.net/assets/public/d9c6/12d0/d8664ba98027/50c6ecc23c62/03443400330-e1/03443400330-e1.jpg?ts=1738841324461&w=370',
          link: '/collection/summer-dresses'
        },
        {
          id: 2,
          title: 'BASICS',
          image: 'https://static.zara.net/assets/public/dc17/673e/04c8460b9b8c/2f7cd38451b0/04341761721-000-a11/04341761721-000-a11.jpg?ts=1740146918551&w=504',
          link: '/collection/basics'
        }
      ]
    }
  }
}
</script>
