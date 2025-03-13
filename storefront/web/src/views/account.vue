<template>

<div style="font-family:Nunito-Medium; ">


<div class="w-full flex  justify-center ">

    <div class="flex lg:w-[1050px] gap-3 cols-2 justify-center">

      



      <div class="flex mt-20 w-full px-10 flex ">

  <div class="border-e w-1/5   border-gray-200 dark:border-neutral-700">
    <nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
      <button type="button" class=" hs-tab-active:text-gray-900 hs-tab-active:font-bold  py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-gray-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
        Overview
      </button>
      <button type="button" class=" hs-tab-active:text-gray-900 hs-tab-active:font-bold py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-gray-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
        Profile
      </button>
      <button type="button" class="hs-tab-active:text-gray-900  hs-tab-active:font-bold py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-gray-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
        Addresses
      </button>
      <button type="button" class="hs-tab-active:text-gray-900  hs-tab-active:font-bold py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-gray-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="vertical-tab-with-border-item-4" data-hs-tab="#vertical-tab-with-border-4" aria-controls="vertical-tab-with-border-4" role="tab">
        Orders
      </button>
    </nav>
  </div>

  <div class="ms-3 w-4/5 px-4 ">
    <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
      
      <div class=" w-full flex justify-between border-b pb-5 ">
        <span class="font-bold ">Hello boss, 👋🏾 </span>
        <span class="text-xs">Logged in as, <span class="font-semibold">buyer@mail.com </span></span>
      </div>

      <div class=" w-full pb-5 ">
       <!-- Card Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <!-- Card -->
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div class="p-4 md:p-5">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
            Profile
          </p>
          <div class="hs-tooltip">
            <div class="hs-tooltip-toggle">
              <svg class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                The number of daily users
              </span>
            </div>
          </div>
        </div>

        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            100%
          </h3>
          <span class="flex items-center gap-x-1 text-gray-400">
            
            <span class="inline-block text-sm ">
              completed
            </span>
          </span>
        </div>
      </div>
    </div>
    <!-- End Card -->

      <!-- Card -->
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div class="p-4 md:p-5">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
            Orders
          </p>
        </div>

        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            27
          </h3>
        </div>
      </div>
    </div>
    <!-- End Card -->


    <!-- Card -->
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div class="p-4 md:p-5">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
            Addresses
          </p>
        </div>

        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            0
          </h3>
        </div>
      </div>
    </div>
    <!-- End Card -->

  
   
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Section -->
     
      </div>

      <div class=" w-full flex justify-between pb-5 ">
        <span class="font-bold ">Recent orders </span>
        <span class="text-xs">All <span class="font-semibold"></span></span>
      </div>






    </div>
    <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
      <div class=" w-full flex justify-between border-b pb-5 ">
        <span class="font-bold ">Profile </span>
   
      </div>
    </div>
    <div id="vertical-tab-with-border-3" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
      

      <div class=" w-full flex justify-between border-b pb-5 ">
        <span class="font-bold ">Addresses </span>
   
      </div>
    </div>
    <div id="vertical-tab-with-border-4" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-4">
      
   <div class=" w-full flex justify-between border-b pb-5 ">
        <span class="font-bold ">Orders </span>
   
      </div>

      <div class=" w-full justify-between mt-12 pb-5 ">
        <span class="font-normal ">   View your previous orders and their status. You can also create returns or exchanges for your orders if needed. </span>
   

        </div>

      <div class=" w-full flex justify-center mt-12 space-y-4 pb-5 ">
       

        <div class="  flex flex-col cols-1 text-center space-y-4 justify-center ">

          <span class="font-bold "> 
            Nothing to see here </span>


          <span class="font-normal text-xs "> 
            
 
You don't have any orders yet, let us change that 😆
 </span>


          <span class="font-bold "> 
           <button class="px-4 mt-6 py-2 border rounded-xl text-sm ">Continue shopping </button> 
          </span>


        </div>


      </div>


    </div>




  </div>
</div>


    </div>

</div>


</div>



  
    <!-- ========== END HEADER ========== -->
  </template>
  
  <script>
     
     import blogService from "../services/blog.js";
     import contentUtils from "../utils/utils.js";
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
  
     }
    },
    components:{
      
    },
    async created(){
     this.getBlogs();
  
     this.region= await config.initRegion(this.$cookies)
  
     let regionCookie = await config.getRegion(this.$cookies)
  
  
      this.region=regionCookie 
      if(regionCookie=='zh'){
        this.content=zhC
  
  
        //console.log( this.content)
  
  
      }else if(regionCookie=='en'){
        this.content=enC
  
        //console.log( this.content)
  
  
      }
     //alert(this.region)
  
    },
    methods:{
     async handleRegionChange(){
  
        config.setRegion(this.region, this.$cookies)
        window.location.reload()
  
        //alert(await config.getRegion(this.$cookies))
  
        this.region=await config.getRegion(this.$cookies)
  
      },
     async getBlogs(){
      
  
       // zh, 
       let blogResponse=await  blogService.fetchBlogsLanguage("en",1) 
  
       if(blogResponse.resultCode==1){
         //alert()
         this.blogs=blogResponse.resultContent
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
     gotoBlog(id){
  
     }
  
    }
  }
  </script>
  
  <style>
  /* You can add any custom styles here */
  *:focus {
      outline: none;
  }
  .form-control:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  </style>
  