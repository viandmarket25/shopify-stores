<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 z-[100] transition-all duration-300">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-14">
        <!-- Hamburger Menu -->
        <button @click="toggleMenu" class="hover:text-gray-600 transition-colors duration-300 p-2">
          <svg class=" w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </button>

        <!-- Logo -->
        <router-link to="/" class="  text-xl font-extralight tracking-[0.15em] transition-opacity hover:opacity-70">
     
            <span class="relative top-0.5 h-[50px] w-[140px] flex items-center justify-center "  >
                <div  class="max-w-[40px] max-h-full" v-html="AppLogo" ></div>
            </span>
        </router-link>

        <!-- Right Navigation -->
        <div class="flex items-center space-x-8">
          <button @click="toggleSearch" class="text-xs tracking-widest hover:text-gray-600 transition-colors duration-300">
            SEARCH
          </button>
          <router-link to="/login" class="text-xs tracking-widest hover:text-gray-600 transition-colors duration-300 hidden md:block">
            LOG IN
          </router-link>
          <router-link to="/help" class="text-xs tracking-widest hover:text-gray-600 transition-colors duration-300 hidden md:block">
            HELP
          </router-link>
          <router-link to="/cart" class="text-xs tracking-widest hover:text-gray-600 transition-colors duration-300">
            SHOPPING BAG [{{ cartCount }}]
          </router-link>
        </div>
      </nav>

      <!-- Left Side Menu -->
      <Transition name="slide">
        <div v-show="isMenuOpen" class="fixed inset-0 z-[9999]">
          <!-- Overlay -->
          <div class="fixed inset-0 bg-black/20" @click="closeMenu"></div>
          
          <!-- Menu Content -->
          <div class="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-lg">
            <div class="p-6">
              <button @click="closeMenu" class="absolute top-4 right-4 p-2 transition-opacity hover:opacity-70">
                <svg class=" w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
              </button>
              
              <!-- Menu Items with Collections -->
              <div class="space-y-6 mt-12">
                <div v-for="item in menuItemsWithCollections" :key="item.id">
                  <div 
                    class="flex justify-between items-center cursor-pointer py-2 group"
                    @click="toggleCollection(item.id)"
                  >
                    <span class="text-xs tracking-widest font-light group-hover:text-gray-600 transition-colors duration-300">
                      {{ item.name }}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 transition-transform duration-300" 
                         :class="openCollections.includes(item.id) ? 'rotate-180' : ''"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <!-- Collections Submenu -->
                  <div 
                    v-if="openCollections.includes(item.id)"
                    class="pl-0 mt-2 space-y-3 overflow-hidden transition-all duration-300"
                  >
                    <router-link 
                      v-for="collection in item.collections" 
                      :key="collection.id"
                      :to="collection.path"
                      class="block text-[11px] text-gray-500 hover:text-black transition-colors duration-300 py-1"
                      @click="closeMenu"
                    >
                      {{ collection.name }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Search Overlay -->
      <div 
        v-if="isSearchOpen" 
        class="fixed inset-0 bg-white/95 backdrop-blur-sm z-[999]"
      >
        <div class="container mx-auto px-4 pt-16">
          <div class="relative">
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search products..."
              class="w-full text-lg border-b border-gray-300 pb-2 focus:outline-none"
            >
            <button @click="toggleSearch" class="absolute right-0 top-0">
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import logo from '../assets/images/zara.svg?raw'
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
      searchQuery: '',
      AppLogo:ref(logo),
      cartCount: 0,
      openCollections: [],
      menuItemsWithCollections: [
        {
          id: 1,
          name: 'WOMEN',
          path: '/women',
          collections: [
            { id: 1, name: 'New In', path: '/women/new' },
            { id: 2, name: 'Dresses', path: '/women/dresses' },
            { id: 3, name: 'Tops', path: '/women/tops' },
            { id: 4, name: 'Basics', path: '/women/basics' }
          ]
        },
        {
          id: 2,
          name: 'MEN',
          path: '/men',
          collections: [
            { id: 1, name: 'New In', path: '/men/new' },
            { id: 2, name: 'Shirts', path: '/men/shirts' },
            { id: 3, name: 'Pants', path: '/men/pants' },
            { id: 4, name: 'Basics', path: '/men/basics' }
          ]
        },
        {
          id: 3,
          name: 'KIDS',
          path: '/kids',
          collections: [
            { id: 1, name: 'Girls', path: '/kids/girls' },
            { id: 2, name: 'Boys', path: '/kids/boys' },
            { id: 3, name: 'Baby', path: '/kids/baby' }
          ]
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
        this.isSearchOpen = false
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.classList.remove('overflow-hidden')
    },
    toggleCollection(id) {
      const index = this.openCollections.indexOf(id)
      if (index === -1) {
        this.openCollections.push(id)
      } else {
        this.openCollections.splice(index, 1)
      }
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen
      if (this.isSearchOpen) this.isMenuOpen = false
    },
    checkLoginStatus() {
      // Implement login check logic here
      this.isLoggedIn = false
    },
    updateCartCount() {
      // Implement cart count update logic here
      this.cartCount = 0
    }
  },
  mounted() {
    this.checkLoginStatus()
    this.updateCartCount()
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fixed {
  position: fixed !important;
}

.z-[9999] {
  z-index: 9999 !important;
}
</style>
