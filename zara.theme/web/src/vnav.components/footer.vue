<template>
  <footer class="bg-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <!-- Newsletter -->
      <div class="max-w-md mx-auto text-center mb-16">
        <h3 class="text-sm font-light tracking-widest mb-6">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <div class="flex">
          <input 
            type="email" 
            v-model="email"
            placeholder="Your email address"
            class="flex-1 border-b border-gray-200 py-2 px-4 text-sm focus:outline-none focus:border-gray-400 transition-colors duration-300"
          >
          <button 
            @click="subscribe"
            class="ml-4 px-6 py-2 bg-black text-white text-xs tracking-widest hover:bg-gray-800 transition-colors duration-300"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div v-for="(section, index) in footerSections" :key="index">
          <h4 class="text-xs tracking-widest mb-6">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="(link, idx) in section.links" :key="idx">
              <router-link 
                :to="link.path"
                class="text-[11px] text-gray-500 hover:text-black transition-colors duration-300"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Media & Copyright -->
      <div class="border-t border-gray-100 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex space-x-8 mb-4 md:mb-0">
            <a v-for="social in socialMedia" 
              :key="social.id"
              :href="social.url"
              target="_blank"
              class="text-gray-400 hover:text-black transition-colors duration-300"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
          <p class="text-[11px] text-gray-400">
            © {{ new Date().getFullYear() }} WORKMIRROW. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      footerSections: [
        {
          title: 'HELP',
          links: [
            { name: 'Shop at ZARA.com', path: '/help/shop' },
            { name: 'Product', path: '/help/product' },
            { name: 'Payment', path: '/help/payment' },
            { name: 'Shipping', path: '/help/shipping' },
            { name: 'Returns', path: '/help/returns' }
          ]
        },
        {
          title: 'FOLLOW US',
          links: [
            { name: 'Newsletter', path: '/newsletter' },
            { name: 'Instagram', path: '/instagram' },
            { name: 'Facebook', path: '/facebook' },
            { name: 'Twitter', path: '/twitter' },
            { name: 'Pinterest', path: '/pinterest' }
          ]
        },
        {
          title: 'COMPANY',
          links: [
            { name: 'About Us', path: '/about' },
            { name: 'Offices', path: '/offices' },
            { name: 'Stores', path: '/stores' },
            { name: 'Work With Us', path: '/careers' }
          ]
        },
        {
          title: 'POLICIES',
          links: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Use', path: '/terms' },
            { name: 'Cookies Settings', path: '/cookies' }
          ]
        }
      ],
      socialMedia: [
        { id: 1, icon: 'fab fa-facebook-f', url: '#' },
        { id: 2, icon: 'fab fa-instagram', url: '#' },
        { id: 3, icon: 'fab fa-twitter', url: '#' },
        { id: 4, icon: 'fab fa-pinterest-p', url: '#' }
      ]
    }
  },
  methods: {
    subscribe() {
      if (this.validateEmail(this.email)) {
        // Implement newsletter subscription logic
        console.log('Subscribed:', this.email)
        this.email = ''
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  }
}
</script>
