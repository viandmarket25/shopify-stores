  import ServiceWidget from "../components/services.vue"

   import ServiceDetailsWidget from "../components/service-details.vue"
<template>
    <div style=" " class="bg-white- ">
   
   
   
   
     <!-- ========== END HEADER ========== -->
   
     <!-- ========== MAIN CONTENT ========== -->
     <main id="content" role="main" class="shrink-0">
   
   
   
       
      
   
   
   
   <!-- End Hero -->
   
   
   
   
   <br/>
   
   
   
   <!-- End Hero -->
   
   <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto">
    <div style="border:1px solid transparent;"  class="max-w-5xl mx-auto">
      <!-- Grid -->
      <div class="grid gap-10 ">



   
   <ServiceWidget/><ServiceDetailsWidget/>
   
   
   
  </div></div></div>
   
     </main>
     <!-- ========== END MAIN CONTENT ========== -->
   
   <Footer/>
   </div>
   
   </template>
   
   <script>
   
   import Header from "../components/header.vue"
      import Footer from "../components/footer.vue"
      import AnimatedText from "../components/animated-text.vue"
      import WelcomeAnimated from "../components/welcome-animated.vue"
      import Satisfaction from "../components/satisfy.vue"
   

      import config from "../services/config.js";
  import ServiceWidget from "../components/services.vue"

   import ServiceDetailsWidget from "../components/service-details.vue"


import zhC from "../translations/zh.json";
import enC from "../translations/en.json";



   export default {
     name: 'MarketingPage',
     data() {
   return {
     blogs:[],
     region:'zh',
     content:{},

   }
  },
     components:{
       Header,Footer,AnimatedText, WelcomeAnimated,
       Satisfaction,ServiceWidget,ServiceDetailsWidget
     },
     async created(){
   //this.getBlogs();

   let regionCookie = await config.getRegion(this.$cookies)


   this.region=regionCookie 
   if(regionCookie=='zh'){
    this.content=zhC


   //console.log( this.content)


   }else if(regionCookie=='en'){
    this.content=enC

    //console.log( this.content)


   }


   //config.setRegion(this.region, this.$cookies)
  },
   }
   </script>
   
   <style>
   /* You can add any custom styles here */
   
   </style>
   