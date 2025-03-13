<template>
  <div class="app relative">
    <Header />
    <main class="relative pt-14">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './vnav.components/header.vue'
import Footer from './vnav.components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

body.overflow-hidden {
  overflow: hidden !important;
}

.z-[999] {
  z-index: 999 !important;
}
</style>
