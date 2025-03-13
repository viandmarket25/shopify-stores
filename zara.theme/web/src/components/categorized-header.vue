



<template>

    
<!-- ========== HEADER   max-w-[85rem] 
  
  
  px-4  md:px-6 lg:px-8
  
  ========== -->
<header class="flex flex-wrap lg:justify-start  md:justify-start md:flex-nowrap z-50 w-screen  bg-white text-sm py-3 md:py-0 dark:bg-neutral-800">
  <nav class=" w-full mx-auto  " aria-label="Global">
    <div class="relative justify-start lg:justify-start md:flex md:items-center md:justify-start">
      

      <div id="navbar-collapse-with-animation" 
      class=" hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
       
        <div class="overflow-hidden  overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
         
            <div class="flex flex-col divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-center py-2 md:py-0  md:ps-5 md:divide-y-0 md:divide-solid dark:divide-neutral-700">
            


              <div class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button" class="flex  items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal ">
                  Men
                  
                </button>

                <div class="h-[500px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                    <CollectionItems />
                  </div>
                </div>

              </div>

                
              <div class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button" class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Women
                </button>

                <div class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                  </div>
                </div>

              </div>

              <div class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button" class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Kids
                </button>

                <div class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                  </div>
                </div>

              </div>

              <div class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button" class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Beauty
                </button>

                <div class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                  </div>
                </div>

              </div>

              <div class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button" class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Hot
                </button>

                <div class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                  </div>
                </div>

              </div>




           
            </div>

        </div>
      </div>
    </div>
  </nav>
</header>
<!-- ========== END HEADER ========== -->
  
    <!-- ========== END HEADER ========== -->
  </template>
  
  <script>
     
     import CollectionItems from "../vnav-widgets/collection-items.vue"


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
      CollectionItems
      
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
  
  </style>
  



