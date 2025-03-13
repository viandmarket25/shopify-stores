<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 z-[100] transition-all duration-300">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-[60px]">
        <!-- Hamburger and Logo -->
        <div class="flex items-center space-x-6">
          <button @click="toggleMenu" class="-ml-2 p-2 hover:opacity-70 transition-opacity">
            <svg class=" w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
          </button>
          <router-link to="/" class="text-xl font-extralight tracking-[0.15em] transition-opacity hover:opacity-70">
            <span class="relative h-[40px] w-[120px] flex items-center justify-center">
              <div class="max-w-[35px] max-h-full" v-html="AppLogo"></div>
            </span>
          </router-link>
        </div>

        <!-- Right Navigation -->
        <div class="flex items-center">
          <button @click="toggleSearch" class="p-2 hover:opacity-70 transition-opacity">
            <span class="hidden md:block text-xs tracking-widest">SEARCH</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div class="hidden md:flex items-center space-x-8 mx-8">
            <router-link to="/login" class="text-xs tracking-widest hover:opacity-70 transition-opacity">LOG IN</router-link>
            <router-link to="/help" class="text-xs tracking-widest hover:opacity-70 transition-opacity">HELP</router-link>
          </div>
          <router-link to="/cart" class="flex items-center p-2 hover:opacity-70 transition-opacity">
            <span class="hidden md:block text-xs tracking-widest">SHOPPING BAG [{{ cartCount }}]</span>
            <div class="relative md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {{ cartCount }}
              </span>
            </div>
          </router-link>
          <router-link 
            to="/products" 
            class="py-2 px-2 text-sm font-medium hover:text-gray-900"
          >
            Products
          </router-link>
        </div>
      </nav>

      <!-- Left Side Menu -->
      <Transition name="slide">
        <div v-show="isMenuOpen" class="fixed inset-0 z-[9999]">
          <!-- Overlay -->
          <div class="fixed inset-0 bg-black/20" @click="closeMenu"></div>
          
          <!-- Menu Content -->
          <div class="fixed left-0 top-0 bottom-0 w-[85vw] max-w-[400px] bg-white shadow-lg">
            <div class="flex flex-col h-full">
              <div class="p-4 flex justify-between items-center border-b">
                <span class="text-xs tracking-wider">MENU</span>
                <button @click="closeMenu" class="p-2 hover:opacity-70 transition-opacity">
                  <svg class=" w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
                </button>
              </div>
              
              <div class="flex-1 overflow-y-auto  py-6">
                <div class="space-y-6 space-x-6 mt-12">
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

              <div class="mt-auto border-t p-4 md:hidden">
                <router-link to="/login" class="block py-3 text-xs tracking-wider">LOG IN</router-link>
                <router-link to="/help" class="block py-3 text-xs tracking-wider">HELP</router-link>
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
                <svg class=" w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

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

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
