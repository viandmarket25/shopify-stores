<template>
    <div class="carousel-container w-full  hidden lg:block ">
      <div class="carousel gap-x-3 " ref="carousel">
        <div v-for="(box, index) in boxes" :key="index" class="box bg-gray-50 ">
            <a  class="group block bg-white mb-2" href="#">
       <div class="  overflow-hidden bg-gray-100 rounded-xs dark:bg-neutral-800">
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

         <div class="mt-3 flex flex-wrap gap-2">
          
          
         </div>
       </div>
     </a>
        </div>
      </div>
      <div class="scroll-buttons">
            <button class="scroll-button bg-white w-10 h-10 rounded-full " @click="scrollLeft">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </button>

            <button class="scroll-button bg-white w-10 h-10 rounded-full " @click="scrollRight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" class="size-4 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
      </div>
    </div>
    <div v-if="false" class="indicator-container hidden lg:hidden ">
      <div class="indicator-line">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          :class="['indicator', { active: index === currentIndex }]"
          @click="scrollTo(index)"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        boxes: Array(10).fill(null), // Simulate 10 boxes
      };
    },
    methods: {
      scrollLeft() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.scrollCarousel();
        }
      },
      scrollRight() {
        if (this.currentIndex < this.boxes.length - 1) {
          this.currentIndex++;
          this.scrollCarousel();
        }
      },
      scrollTo(index) {
        this.currentIndex = index;
        this.scrollCarousel();
      },
      scrollCarousel() {
        const carousel = this.$refs.carousel;
        const boxWidth = carousel.scrollWidth / this.boxes.length;
        carousel.scrollTo({ left: this.currentIndex * boxWidth, behavior: 'smooth' });
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
   
   
    margin: auto;
  }
  
  .carousel {
    overflow: hidden;
    display: flex;
    scroll-snap-type: x mandatory;
   
  }
  
  .box {
    height: 300px;
    width: 300px;
  
    margin-right: 5px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
  
  .scroll-buttons {
    position: absolute;
    top: 50%;
    left:10%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: calc(80% + 10px); /* Width of carousel plus margin */
  }
  
  .scroll-button {
  
    border: none;
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }
  
  .scroll-button:hover {
    background-color: #bbb;
  }
  
  .indicator-container {
    display: flex;
    justify-content: center;
  }
  
  .indicator-line {
    display: flex;
    align-items: center;
  }
  
  .indicator {
    height: 2px;
    width: 20px;
    background-color: #bbb;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .indicator.active {
    background-color: #717171;
  }
  
  @media (max-width: 768px) {
    .box {
      width: 150px;
    }
  
    .scroll-button {
     
    }
  
    .indicator {
      height: 1px;
      width: 10px;
      margin: 0 3px;
    }
  }
  </style>
  