<template>
  <div style=" " class=" ">






    <body style="font-family:Nunito-Bold; " class="bg-white">


      <!-- ========== MAIN CONTENT bg-white 
    
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

  </div>

    
    ========== -->





      <CategorizedHeader v-if="false" class="lg:mb-[20px]  lg:block mt-2 " />
      <!-- ========== MAIN CONTENT ==========
  
  
   -->
      <main id="content" class="lg:mt-2 -mt-6 ">


        <!-- Slider 
      
      md:h-[calc(100vh-106px)] 
    
        -->
        <div class="px-0 lg:px-8 ">
          <div data-hs-carousel='{
          "loadingClasses": "opacity-0"
        }' class="relative">
            <div
              class="hs-carousel  relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-56px)] md:h-[calc(100vh-106px)] bg-gray-100  dark:bg-neutral-800">
              <div
                class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">


                <!-- Item -->
                <div class="hs-carousel-slide">
                  <div
                    class="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-56px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('./src/assets/store-landing/bg-6.webp')]">
                    <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                      <span class="block text-white">CoolApps</span>
                      <span class="block text-white text-xl md:text-3xl">From mobile apps to gaming consoles</span>
                      <div class="mt-5">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          href="#">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Item -->

                <!-- Item -->
                <div class="hs-carousel-slide">
                  <div
                    class="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-56px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('./src/assets/store-landing/bg-8.webp')]">
                    <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                      <span class="block text-white">Nike React</span>
                      <span class="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of
                        athletes</span>
                      <div class="mt-5">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          href="#">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Item -->

                <!-- Item -->
                <div class="hs-carousel-slide">
                  <div
                    class="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-56px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('./src/assets/store-landing/bg-7.webp')]">
                    <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                      <span class="block text-white">CoolApps</span>
                      <span class="block text-white text-xl md:text-3xl">From mobile apps to gaming consoles</span>
                      <div class="mt-5">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          href="#">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Item -->

                <!-- Item -->
                <div class="hs-carousel-slide">
                  <div
                    class="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-56px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('./src/assets/store-landing/bg-10.webp')]">
                    <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                      <span class="block text-white">Grumpy</span>
                      <span class="block text-white text-xl md:text-3xl">Bringing Art to everything</span>
                      <div class="mt-5">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          href="#">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Item -->
              </div>
            </div>

            <!-- Arrows -->
            <button type="button"
              class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
              <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                  </path>
                </svg>
              </span>
              <span class="sr-only">Previous</span>
            </button>

            <button type="button"
              class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
              <span class="sr-only">Next</span>
              <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
              </span>
            </button>
            <!-- End Arrows -->
          </div>
        </div>
        <!-- End Slider -->



        <div class="w-full flex py-12 justify-center">

          <div class=" max-w-[300px] lg:max-w-[400px] text-center">
            <p class="">Nike Pegasus 41</p>
            <p class=" text-3xl lg:text-5xl mt-3 font-extrabold ">DON'T WASTE YOUR ENERGY</p>
            <p class=" font-normal mt-4 ">Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new
              ReactX foam</p>


          </div>





        </div>

        <!-- Works -->
        <div class="max-w-7xl px-4 lg:px-6 lg:px-8 mb-[120px] mt-6 lg:py-4 mx-auto">


          <div class=" py-6 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <p class="font-medium text-black text-[16px] ">
              Latest Products
            </p>
          </div>

          <nav class="flex space-x-0" aria-label="Tabs" role="tablist">
            <button type="button" :class="latestFeaturedStyles.active" id="pills-with-brand-color-item-1"
              data-hs-tab="#pills-with-brand-color-1" aria-controls="pills-with-brand-color-1" role="tab">
              Women
            </button>

            <button type="button" :class="latestFeaturedStyles.inactive" id="pills-with-brand-color-item-2"
              data-hs-tab="#pills-with-brand-color-2" aria-controls="pills-with-brand-color-2" role="tab">
              Men
            </button>
            <button type="button" :class="latestFeaturedStyles.inactive" data-hs-tab="#pills-with-brand-color-3"
              aria-controls="pills-with-brand-color-3" role="tab">
              Baby
            </button>
            <button type="button" :class="latestFeaturedStyles.inactive" id="pills-with-brand-color-item-3"
              data-hs-tab="#pills-with-brand-color-3" aria-controls="pills-with-brand-color-3" role="tab">
              Kids
            </button>
          </nav>

          <div class="mt-3">
            <div id="pills-with-brand-color-1" role="tabpanel" aria-labelledby="pills-with-brand-color-item-1">
              <LatestCollectionItems />


            </div>
            <div id="pills-with-brand-color-2" class="hidden" role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-2">


            </div>
            <div id="pills-with-brand-color-3" class="hidden" role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-3">


            </div>
          </div>








        </div>
        <!-- End Works -->



        <!-- Contact -->
        <div v-if="false" class="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
          <div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h2 class="font-medium text-black text-2xl sm:text-4xl dark:text-white">
              Contacts
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
            <div
              class="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description">
            </div>
            <!-- End Col -->

            <div class="space-y-8 lg:space-y-16">
              <div>
                <h3 class="mb-5 font-semibold text-black dark:text-white">
                  Our address
                </h3>

                <!-- Grid -->
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div class="flex gap-4">
                    <svg class="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>

                    <div class="grow">
                      <p class="text-sm text-gray-600 dark:text-neutral-400">
                        United Kingdom
                      </p>
                      <address class="mt-1 text-black not-italic dark:text-white">
                        300 Bath Street, Tay House<br>
                        Glasgow G2 4JR
                      </address>
                    </div>
                  </div>
                </div>
                <!-- End Grid -->
              </div>

              <div>
                <h3 class="mb-5 font-semibold text-black dark:text-white">
                  Our contacts
                </h3>

                <!-- Grid -->
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div class="flex gap-4">
                    <svg class="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z">
                      </path>
                      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                    </svg>

                    <div class="grow">
                      <p class="text-sm text-gray-600 dark:text-neutral-400">
                        Email us
                      </p>
                      <p>
                        <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="mailto:example@site.so">
                          hello@example.so
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <svg class="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>

                    <div class="grow">
                      <p class="text-sm text-gray-600 dark:text-neutral-400">
                        Call us
                      </p>
                      <p>
                        <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="mailto:example@site.so">
                          +44 222 777-000
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- End Grid -->
              </div>
            </div>
            <!-- End Col -->
          </div>
        </div>
        <!-- End Contact -->
      </main>
      <!-- ========== END MAIN CONTENT ========== -->









    </body>


    <Footer />
  </div>

</template>

<script>

import LatestCollectionItems from "../vnav-widgets/latest-collection-items.vue"
import CategorizedHeader from "../components/categorized-header.vue"
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import AnimatedText from "../components/animated-text.vue"
import WelcomeAnimated from "../components/welcome-animated.vue"
import Satisfaction from "../components/satisfy.vue"


import config from "../services/config.js";

import zhC from "../translations/zh.json";
import enC from "../translations/en.json";
import jaC from "../translations/ja.json";


import contentUtils from "../utils/utils.js";


import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'




export default {
  name: 'MarketingPage',
  data() {
    return {

      latestFeaturedStyles: {

        active: 'hs-tab-active:border-b-2 hs-tab-active:border-b-gray-600 hs-tab-active:text-gray-900  hs-tab-active:dark:text-white py-1 px-2 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500   active',
        inactive: 'hs-tab-active:border-b-2 border-b-2 hs-tab-active:border-b-gray-600 hs-tab-active:text-gray-900  hs-tab-active:dark:text-white py-1 px-2 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500   '

      },
      blogs: [],
      region: 'zh',
      content: {},
      awaitingResponse: false,
      awaitingSubscribe: false,

      email: '',
      fullName: '',

    }
  },
  components: {
    LatestCollectionItems,
    CategorizedHeader,
    Header, Footer, AnimatedText, WelcomeAnimated,
    Satisfaction,
    Carousel,
    Slide,
    Pagination,
    Navigation,
   
  },
  async created() {
    //this.getBlogs();

    let regionCookie = await config.getRegion(this.$cookies)


    this.region = regionCookie
    if (regionCookie == 'zh') {
      this.content = zhC


      //console.log( this.content)


    } else if (regionCookie == 'en') {
      this.content = enC

      //console.log( this.content)


    } else if (regionCookie == 'ja') {
      this.content = jaC

      //console.log( this.content)



    }


   // this.addVisitor();

    //config.setRegion(this.region, this.$cookies)
  },
  methods: {


    async subscribe() {
      //alert('sub')
      const formData = new FormData();
      formData.append('fullName', this.fullName);
      formData.append('email', this.email);
      formData.append('websiteId', 1);


      if (this.email != '') {

        let response = await subscriberService.addSubscriber(formData, 1)
        this.awaitingSubscribe = true
        if (response.resultCode == 1) {

          this.awaitingSubscribe = false

          alert('thanks for subscribing 👍🏼')
          window.location.reload()

        }

      }

    },

    async addVisitor() {
      // Create the FormData object
      const formData = new FormData();
      // Get the IP address first
      let ip = await visitorService.getIpAddress();
      // Append the IP address and other data to the form data
      formData.append('page', "/home");
      formData.append('ipAddress', ip);
      formData.append('websiteId', 1);
      // Now that we have the IP, we can proceed with the addVisitor call
      let response = await visitorService.addVisitor(formData, 1);
      //console.log(response); // Log the response (optional)

    },
 
    async handleRegionChange() {

      config.setRegion(this.region, this.$cookies)

      alert(await config.getRegion(this.$cookies))

    },
    /*
   async getBlogs(){
    

     // zh, 
     let blogResponse=await  blogService.fetchBlogsLanguage(this.region,1) 

     if(blogResponse.resultCode==1){
       //alert()
       this.blogs=blogResponse.resultContent

       if(this.blogs.length>3){
        this.blogs.splice(0, 4);

       }
      

       for(let i=0; i<this.blogs.length; i++){
         this.blogs[i].seoSlug = this.blogs[i].title.split(' ').join('-')


         this.blogs[i].title=  contentUtils.reduceTextWithEndingSuffix( this.blogs[i].title, 70)
         this.blogs[i].content=  contentUtils.reduceTextWithEndingSuffix( this.blogs[i].content, 100)
         const toDate = new Date()
        // this.blogs[i].datePublished= contentUtils.formatDateMode( this.blogs[i].datePublished) +", "+contentUtils.timeAgo(this.blogs[i].datePublished,toDate)
         this.blogs[i].datePublished= contentUtils.timeAgo(this.blogs[i].datePublished,toDate)
        

     

       }

     }

   },
   */
    gotoBlog(id) {

    }

  }
}
</script>

<style>
/* You can add any custom styles here */
.carousel__item {
  min-height: 200px;

  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: purple;
}
</style>
