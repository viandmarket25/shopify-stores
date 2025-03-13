<template>

   

<MyCarousel class="" />



<div  class="flex overflow-auto bg-white nike-container mt-2 mb-14  lg:hidden md:hidden ">

  <div v-for="i in 8"  class="nike-box gap-x-3"> 
    <a  class="group block bg-white mb-2" href="#">
       <div class="  overflow-hidden bg-gray-100 rounded-xs ">
         <img class="h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover "
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7b5f4f3-3d1b-4af1-8197-1f0688a29290/pegasus-41-womens-road-running-shoes-tSbZGh.png" alt="Image Description">
       </div>

       <div class="pt-4 bg-white ">
         <h3 class="relative inline-block font-normal text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
           ¥200
         </h3>
         <p class="mt-1 text-[13px] font-normal text-gray-600 ">
           A revamped and dynamic approach to yoga analytics
         </p>

     
       </div>
     </a></div>
  
 
</div>


<Carousel v-if="false" class="bg-white  " v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10 " :key="slide">
      <div class="carousel__item bg-white ">
        
        <a  class="group block bg-white mb-2" href="#">
       <div class=" max-h-[200px] max-w-[200px] overflow-hidden bg-gray-100 rounded-xs dark:bg-neutral-800">
         <img class="h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover "
          src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc0%2Fc7%2Fc0c72dbd3bf29c0508ae8ad180b9dce3268093fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Image Description">
       </div>

       <div class="pt-4 bg-white ">
         <h3 class="relative inline-block font-normal text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
           ¥200
         </h3>
         <p class="mt-1 text-[13px] font-normal text-gray-600 ">
           A revamped and dynamic approach to yoga analytics
         </p>

         <div class="mt-3 flex flex-wrap gap-2">
          
          
         </div>
       </div>
     </a>
      
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>


<carousel v-if="false" :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>


   <!-- Card Grid -->
   <div v-if="false" class=" grid grid-cols-2  lg:grid-cols-4 gap-1 sm:gap-6 md:gap-8 lg:gap-12">
     




     <!-- Card -->
     <a v-for="i in 4" class="group block mb-2" href="#">
       <div class=" overflow-hidden bg-gray-100 rounded-xs dark:bg-neutral-800">
         <img class="h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover "
          src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc0%2Fc7%2Fc0c72dbd3bf29c0508ae8ad180b9dce3268093fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Image Description">
       </div>

       <div class="pt-4">
         <h3 class="relative inline-block font-normal text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
           ¥200
         </h3>
         <p class="mt-1 text-[13px] font-normal text-gray-600 ">
           A revamped and dynamic approach to yoga analytics
         </p>

         <div class="mt-3 flex flex-wrap gap-2">
           <span class="py-1.5  px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4  mb-1 inline-block ">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add
           </span>
          
         </div>
       </div>
     </a>
     <!-- End Card -->
   </div>
   <!-- End Card Grid -->
  


    <!-- ========== END HEADER ========== -->
</template>
  
<script>
import MyCarousel from "./carousel.vue"
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


  export default {
    name: 'MarketingPage',
    components:{
      MyCarousel,

      Carousel,
    Slide,
    Pagination,
    Navigation,
      
    },
    data() {
     return {
       // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },



       blogs:[],
       region:'zh',
       content:{},
  
     }
    },
  
    async created(){
 
    },
    methods:{
  
  
    }
  }
  </script>
  
  <style scoped>




/* WebKit-based browsers */
.nike-container::-webkit-scrollbar {
    width: 0;
    background: transparent;
}

.nike-container::-webkit-scrollbar-thumb {
    background: transparent;
}

.nike-container::-webkit-scrollbar-track {
    background: transparent;
}

/* Firefox */
.nike-container {
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
}

/* WebKit-based browsers */
::-webkit-scrollbar {
    width: 0; /* Remove scrollbar width */
    background: transparent; /* Optional: make the scrollbar background transparent */
}

::-webkit-scrollbar-thumb {
    background: transparent; /* Optional: make the scrollbar thumb transparent */
}

::-webkit-scrollbar-track {
    background: transparent; /* Optional: make the scrollbar track transparent */
}




  /* You can add any custom styles here */
  .carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}



.nike-container {
 
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
    scrollbar-color: transparent transparent;
}

.nike-box {
  max-height: 490px;
  width: 300px;
  background: #888;
  margin-right: 15px;
  flex-shrink: 0;
  scroll-snap-align: start;
}



  </style>
  