<template>
  <!---  background-color: rgb(251, 248, 204, 0.04);-->
  <div class=" " style=" ">
  
    <Header  />
  <router-view/>

  </div>

</template>




<script>

import Header from "./components/header.vue"
   import Footer from "./components/footer.vue"
   import AnimatedText from "./components/animated-text.vue"
   import WelcomeAnimated from "./components/welcome-animated.vue"
   import Satisfaction from "./components/satisfy.vue"
   import ProductList from './components/ProductList.vue'

export default {
  name: 'MarketingPage',
  components:{
    Header,Footer,AnimatedText, WelcomeAnimated,
    Satisfaction, ProductList
  }
}
</script>

<style>
/* You can add any custom styles here */

</style>



<style >





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
</style>
