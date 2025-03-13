<template>
    <div style=" " class="bg-white- ">
   
   
   
   
     <!-- ========== END HEADER ========== -->
   
     <!-- ========== MAIN CONTENT ========== -->
     <main id="content" role="main" class="shrink-0">



   
   
       
      
   
   
   
   <!-- End Hero -->
   
   
   
   
   <br/>
   
   
   
   <!-- End Hero -->
   
   
   
   
   
   
   


     <div  style="margin-top:40px;" class="mt-5 sm:mt-10 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <!-- Title -->
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800">
            {{content.servAdv}}
          </h2>
          <p class="text-gray-500">
            {{ content.servAdvV }}
          
          </p>
        </div>
        <!-- End Title -->

    
      </div>
    </div>







    <br/>


        <div class="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-12">
  
  
    <!-- Icon Block -->
    <div  v-if="region=='en'">

      <!--  class="w-12 h-12 text-gray-800 bg-purple-50 p-1 rounded-xl " class="w-9 h-9 text-gray-800 dark:text-white" -->

     
      <svg :class="iconClass"  :fill="iconColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
        <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>


    <!---

      <svg class="w-12 h-12 text-gray-100  bg-gray-50 p-1 rounded-md "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
-->


      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.contP}}</h3>
        <p class="mt-1 text-gray-600 ">
         {{content.contPV}}
        </p>
      </div>
    </div>
    <!-- End Icon Block -->




    <!-- Icon Block -->
    <div v-if="region=='en'">
    

      <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
  <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clip-rule="evenodd" />
</svg>





      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.prdM}}</h3>
        <p class="mt-1 text-gray-600 ">
         {{content.weoD}}
        </p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div v-if="region=='zh'">
      
      <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
</svg>


      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.manR}}</h3>
        <p class="mt-1 text-gray-600 ">
         {{content.wePrC}}
        </p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div v-if="region=='zh'">
     

      <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>



      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.brExt}}</h3>
        <p class="mt-1 text-gray-600 ">
         {{content.wComExt}}
        </p>
      </div>
    </div>
    <!-- End Icon Block -->






    <!-- Icon Block -->
    <div>
  

      <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
      </svg>

      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800">{{content.glSup}}</h3>
        <p class="mt-1 text-gray-600 ">{{content.glSupV}}</p>
      </div>
    </div>
    <!-- End Icon Block -->



     <!-- Icon Block -->
     <div  v-if="region=='en'">
  

 

<svg  :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
</svg>



  <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
    <div class="bg-gray-400 w-9 h-0.5"></div>
  </div>
  <div class="mt-5">
    <h3 class="text-lg font-semibold text-gray-800">{{content.prdSx}}</h3>
    <p class="mt-1 text-gray-600 ">{{content.prdSxV}}</p>
  </div>
</div>
<!-- End Icon Block -->

    <!-- Icon Block -->
    <div v-if="region=='en'">
 
      <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
        <path d="M16.5 7.5h-9v9h9v-9z" />
        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clip-rule="evenodd" />
      </svg>


      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.medH}}</h3>
        <p class="mt-1 text-gray-600 ">{{content.medHV}}</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
  

<svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.624 7.084a.75.75 0 00-1.248.832l2.223 3.334H9a.75.75 0 000 1.5h2.25v1.5H9a.75.75 0 000 1.5h2.25v1.5a.75.75 0 001.5 0v-1.5H15a.75.75 0 000-1.5h-2.25v-1.5H15a.75.75 0 000-1.5h-1.599l2.223-3.334a.75.75 0 10-1.248-.832L12 10.648 9.624 7.084z" clip-rule="evenodd" />
</svg>


      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">{{content.fin}}</h3>
        <p class="mt-1 text-gray-600 ">{{content.finV}}</p>
      </div>
    </div>


   <!-- Icon Block -->
   <div>
  



  <svg :class="iconClass"  :fill="iconColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
</svg>

  
        <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
          <div class="bg-gray-400 w-9 h-0.5"></div>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 ">{{content.cantF}}</h3>
          <p class="mt-1 text-gray-600 ">{{ content.cantFV }}</p>
        </div>
      </div>




    <!-- End Icon Block -->
  </div>




   
   
   
   
   
     </main>
     <!-- ========== END MAIN CONTENT ========== -->




   </div>
   
   </template>
   
   <script>
   
   import Header from "../components/header.vue"
      import Footer from "../components/footer.vue"
      import AnimatedText from "../components/animated-text.vue"
      import WelcomeAnimated from "../components/welcome-animated.vue"
      import Satisfaction from "../components/satisfy.vue"
   

      import config from "../services/config.js";


import zhC from "../translations/zh.json";
import enC from "../translations/en.json";



   export default {
     name: 'MarketingPage',
     data() {
   return {
     blogs:[],
     region:'zh',
     content:{},

     iconColor:'#202020',
     iconClass:'w-12 h-12 text-gray-100 bg-gray-50 p-2 rounded-xl '

   }
  },
     components:{
       Header,Footer,AnimatedText, WelcomeAnimated,
       Satisfaction
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
   