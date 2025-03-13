<template>


<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto">
    <div style="border:1px solid transparent;"  class="max-w-4xl mx-auto">
      <!-- Grid -->
      <div class="grid gap-16">






        <!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
  <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
    <!-- Content -->
    <div class="lg:col-span-2">
      <div class="py-8 lg:pe-4 lg:pe-8">
        <div class="space-y-5 lg:space-y-8">
          <router-link to="/blogs" class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Blogs
          </router-link>

          <h2 class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">{{blog.title}}</h2>

          <div class="flex items-center gap-x-4 text-xs">
  <time datetime="2020-03-16" class="text-gray-500">{{blog.datePublished}}</time>
  <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">  {{blog.category}}</a>
  
    <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
        <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
        </svg>
        {{ blog.uniqueId }}
    </span>


       



</div>

<div class="mb-4 mt-4">
      
      <!-- Display the blog image -->
      <img :src="blog.photo" style=" " alt="Blog Photo" class="w-full h-64 object-cover rounded-lg">
      </div>
    
       


          <div v-html="blog.content"></div>

      


          
          <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
            <!-- Badges/Tags -->
            
            <!-- End Badges/Tags -->

            <div class="flex justify-end items-center gap-x-1.5">
           

             
              <!-- Button -->
              <div class="hs-dropdown relative inline-flex">
                <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                  Share
                </button>
                <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black" aria-labelledby="blog-article-share-dropdown">
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Copy link
                  </a>
                  <div class="border-t border-gray-600 my-2"></div>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    Share on Twitter
                  </a>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    Share on Facebook
                  </a>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    Share on LinkedIn
                  </a>
                </div>
              </div>
              <!-- Button -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Sidebar -->
    <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div class="sticky top-0 start-0 py-8 lg:ps-4 lg:ps-8">
        <!-- Avatar Media -->
        <div v-if="blog.author" class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
          <a class="block flex-shrink-0" href="#">
            <img v-if="blog.author" class="h-10 w-10 rounded-full bg-purple" 
            :src="blog.author.photo" 
            
            alt="Image Description">
          </a>

          <a class="group grow block" href="">
            <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              {{ blog.author.firstName }}  {{ blog.author.lastName }}
            </h5>
           
          </a>

         
        </div>
        <!-- End Avatar Media -->

        <div class="space-y-6">
          <!-- Media -->


          <span
          v-for="(mblog, mindex) in blog.moreBlogs" :key="mindex"
           class="group flex items-center gap-x-6" >
            <div @click="loadBlog('/blogs/'+mblog.blogId+'/'+mblog.seoSlug)"  class="grow">
              <router-link :to="'/blogs/'+mblog.blogId+'/'+mblog.seoSlug" >
              <span class="text-sm font-bold text-gray-800 group-hover:text-purple-800 ">
               {{mblog.title}}
              </span>
             
            </router-link>
            </div>

            <div @click="loadBlog('/blogs/'+mblog.blogId+'/'+mblog.seoSlug)"  class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <router-link 
           :to="'/blogs/'+mblog.blogId+'/'+mblog.seoSlug" >
              <img class="w-full h-full cursor-pointer absolute top-0 start-0 object-cover rounded-lg"
               :src="mblog.photo"
                alt="Image Description">
              </router-link>
            </div>
          </span>
          <!-- End Media -->

        </div>
      </div>
    </div>
    <!-- End Sidebar -->
  </div>
</div>
<!-- End Blog Article -->
















        </div></div></div>
 
 
        <Footer/>
 </template>
 
 <script>
 
 import Header from "../../components/header.vue"
    import Footer from "../../components/footer.vue"
    import AnimatedText from "../../components/animated-text.vue"
    import WelcomeAnimated from "../../components/welcome-animated.vue"
    import Satisfaction from "../../components/satisfy.vue"
 
    import blogService from "../../services/blog.js";
    import contentUtils from "../../utils/utils.js";


 export default {
   name: 'MarketingPage',
   data() {
    return {
      blogs:[],
      blog:{},
      isRequesting:false,
            isLoaded:false,

    }
   },
   components:{
     Header,Footer,AnimatedText, WelcomeAnimated,
     Satisfaction
   },
   async created(){
    this.getBlog();
   },
   methods:{


    loadBlog(path){


      this.$router.push(path)

      window.location.reload()
    },

    async getBlog(){
      let id=this.$route.params.id
      this.isRequesting=true



      let blogResponse=await  blogService.fetchLanguageBlog(id) 

      if(blogResponse.resultCode==1){
        //alert()
        this.blog=blogResponse.resultContent[0]


        for(let b=0; b< this.blog.moreBlogs.length; b++){
          this.blog.moreBlogs[b].seoSlug = this.blog.moreBlogs[b].title.split(' ').join('-')



        }
       

        this.isRequesting=false
        this.isLoaded=true

       // for(let i=0; i<this.blogs.length; i++){
          this.blog.title=  contentUtils.reduceTextWithEndingSuffix( this.blog.title, 170)
          //this.blog.content=  contentUtils.reduceTextWithEndingSuffix( this.blog.content, 1900)
          const toDate = new Date()
         // this.blogs[i].datePublished= contentUtils.formatDateMode( this.blogs[i].datePublished) +", "+contentUtils.timeAgo(this.blogs[i].datePublished,toDate)
          this.blog.datePublished= contentUtils.timeAgo(this.blog.datePublished,toDate)
         

      //  }

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
 