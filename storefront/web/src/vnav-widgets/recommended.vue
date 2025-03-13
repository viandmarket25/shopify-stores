<template>

   
    <!-- Card Grid -->
    <div class=" grid grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-6 md:gap-2 lg:gap-2">
      
      <!-- Card -->
      <a v-for="i in 9" class="group block" href="#">
        <div class=" overflow-hidden bg-gray-100 rounded-xs dark:bg-neutral-800">
          <img class="h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover "
           src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/eda46e9a-4b95-4e14-bec4-e538ef4e4c21/pegasus-trail-5-womens-trail-running-shoes-NsBQn9.png" 
           alt="Image Description">
        </div>
 
        <div class="pt-4">
          <h3 class="relative inline-block font-normal text-sm text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            ¥200
          </h3>
          <p class="mt-1 text-[13px] font-normal text-gray-600 ">
            A revamped and dynamic approach to yoga analytics
          </p>
 
          <div class="mt-3 flex flex-wrap gap-2">
           
            <span class="py-1  px-2 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
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
   
   </style>
   