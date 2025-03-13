<template>

  <div style="font-family:Nunito-Bold; ">
  
  <CategorizedHeader  class="mb-[0px] mt-2 " />
  <div class="w-full flex  justify-center ">
  
  <div class="flex lg:w-[950px] gap-6 cols-2 justify-center" >
  
      <div class="  w-2/3 h-full flex-1 mt-8 overflow-y-auto px-4 py-4 sm:px-6">
           
  
       
  
      
  
  
  
  
           <div class="flex items-start  pb-4 mb-6 justify-between">
           <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Order summary</h2>
          
         </div>

         
  
         <div class="mt-8">
           <div class="flow-root">
             <ul style="font-family:Nunito-Medium; "  role="list" class="-my-6 divide-y divide-gray-200">
               <li class="flex py-3 border-b ">
  
                  
  
  
                 <div class="h-20 w-20 border bg-gray-50 flex-shrink-0 overflow-hidden rounded-md ">
                   <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                 </div>
  
                 <div class="ml-4 flex flex-1 flex-col">
                   <div>
                     <div class="flex justify-between text-base font-medium text-gray-900">
                       <h3>
                         <a href="#">Throwback Hip Bag</a>
                       </h3>
                       <p class="ml-4">$90.00</p>
                     </div>
                     <p class="mt-1 text-sm text-gray-700">white; xl;</p>
                   </div>
                   <div class="flex flex-1 items-end justify-between text-sm">
                   <p class="text-xs ">   Quantity x2 </p>
                 
  
                   
                   </div>
                 </div>
               </li>
              
  
               <!-- More products... -->
             </ul>
           </div>
         </div>
      
      
        </div>
  
       
       <div style="font-family:Nunito-Medium; " class="w-1/3 h-[400px]  mt-4 pt-1 border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex mt-8 mb-6 justify-between text-base font-medium text-gray-900">
                  
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping</p>
                
                <div class="flex cols-2 mt-2 font-normal justify-between text-sm text-gray-500 ">
                  <p>Taxes</p>
                  <p>free</p>
  
  
                </div>

                <div class="flex cols-2 mt-2 font-normal justify-between text-sm text-gray-500 ">
                  <p>Address</p>
                  
  
  
                </div>

                


                <hr class="mt-3"/>

                <div class="bg-white dark:bg-gray-900">
            <div class="container  py-2 mt-6 mx-auto">
                <p class="text-sm  text-gray-900 dark:text-gray-300">
                  Delivery method
                </p>

             
                <div class="mt-3 space-y-2 xl:mt-12">
                    <div class="flex items-center justify-between  px-2 py-3 shadow-sm border-2 border-gray-500 cursor-pointer rounded-lg dark:border-gray-700">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 " viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-1 space-y-1">
                                <h2 class="text-sm font-medium text-gray-700  dark:text-gray-200">Standard</h2>
                             
                            </div>
                            <span class="text-xs text-gray-500 ">4-13 days</span>
                        </div>
                        
                        <h2 class="text-sm font-semibold text-gray-500 ">no fee</h2>
                    </div>

                    <div class="flex items-center justify-between  px-2 py-3 shadow-sm border-2 border-gray-100 cursor-pointer rounded-lg dark:border-gray-700">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 " viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-1 space-y-1">
                                <h2 class="text-sm font-medium text-gray-700  dark:text-gray-200">Express</h2>
                             
                            </div>
                            <span class="text-xs text-gray-500 ">2-5 days</span>
                        </div>
                        
                        <h2 class="text-sm font-semibold text-gray-500 ">no fee</h2>
                    </div>


                  
                </div>
            </div>
        </div>

                <!-- component -->
<div class="bg-white dark:bg-gray-900">
            <div class="container  py-2 mt-6 mx-auto">
                <p class="text-sm  text-gray-900 dark:text-gray-300">
                  Payment
                </p>

             
                <div class="mt-3 space-y-8 xl:mt-12">
                    <div class="flex items-center justify-between  px-2 py-3 shadow-sm border-2 border-gray-500 cursor-pointer rounded-lg dark:border-gray-700">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 " viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-1 space-y-1">
                                <h2 class="text-sm font-medium text-gray-700  dark:text-gray-200">Paystack</h2>
                             
                            </div>
                        </div>
                        
                        <h2 class="text-sm font-semibold text-gray-500 ">no fee</h2>
                    </div>


                  
                </div>
            </div>
        </div>




                <div class="mt-6">
                  <a href="#" class="flex  bg-[#f7f7f7] items-center justify-center rounded-full   px-6 py-2.5 text-base font-medium text-gray-900 shadow-sm ">Pay now</a>
                </div>
                
              </div>
  
  
  </div>
  
  </div>
  
  
  </div>
  
  
  
  
  
  
    
      <!-- ========== END HEADER ========== -->
    </template>
    
    <script>
       import CategorizedHeader from "../components/categorized-header.vue"
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
        CategorizedHeader,
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
    