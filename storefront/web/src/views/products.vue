<template>
    <div style=" " class="bg-white-">
   
   
   
   
   
     <!-- ========== END HEADER ========== -->
   
     <!-- ========== MAIN CONTENT ========== -->
     <main id="content" role="main" class="shrink-0">
        <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->

<!-- component -->
<section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 border-r border-gray mr-4 lg:space-y-4">
                 
                    <span @click="selectAll()"  class="cursor-pointer block font-medium text-sm text-purple-800  hover:underline">All</span>
                    
                    <a :style="selectedCategory=='Food and Beverages'? 'color:#000;':'' "  @click="selectCategory('Food and Beverages')"  class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Food and Beverages</a>
                    
                    <a :style="selectedCategory=='Electronics'? 'color:#000;':'' "  @click="selectCategory('Electronics')"  class=" cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Electronics</a>
                    <a :style="selectedCategory=='Automobiles & Heavy Machines'? 'color:#000;':'' " @click="selectCategory('Automobiles & Heavy Machines')" href="#" class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Automobiles & Heavy Machines</a>
                    <a :style="selectedCategory=='Fashion & Clothing'? 'color:#000;':'' " @click="selectCategory('Fashion & Clothing')"  class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Fashion & Clothing</a>
                    <a :style="selectedCategory=='Computers ( Hardware & Software)'? 'color:#000;':'' " @click="selectCategory('Computers ( Hardware & Software)')"  class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Computers ( Hardware & Software)</a>
                    <a :style="selectedCategory=='Medicals'? 'color:#000;':'' " @click="selectCategory('Medicals')" class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Medicals</a>
                    <a :style="selectedCategory=='Smart Technologies'? 'color:#000;':'' " @click="selectCategory('Smart Technologies')"  class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Smart Technologies</a>
                    <a :style="selectedCategory=='Renewable Energy'? 'color:#000;':'' " @click="selectCategory('Renewable Energy')" class="cursor-pointer block font-medium text-sm text-gray-500  hover:underline">Renewable Energy</a>
                    
                    

                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-gray-500 dark:text-gray-300">{{ totalProducts }} Items</p>
                        
                    </div>


                    <!-- grid justify-content-start grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4-->
                    <div  class="container mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
        <!-- Product Cards go here -->

                      <span class="text-left"
                      v-for="(product, index) in  renderProducts" :key="index"

                      >
                      <a 
                      
                        
                        href="#" class="group">
                          <div class="">
                            <img 
                            :src="product.photo" 
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 

                            class="h-20 w-20 object-cover object-center group-hover:opacity-75">
                          </div>
                          <h3 class="mt-4 text-sm text-gray-700">{{product.title}}</h3>
<!---
                          <p class="mt-1 text-lg font-medium text-gray-900"><span class="text-purple-700">￥</span>{{ product.price }}</p>
                        -->
                          <router-link to="/quote" style="border-radius:2px; height:38px; " class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl   border border-transparent text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 " >
                          Get Quote 🚀
                          <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </router-link>
                          <p style="font-size:14px;" class="mt-1 text-lg text-gray-900"><span class="text-purple-700"></span>{{ product.description }}</p>
                        
                        
                        </a>


                      

                      </span>







                      </div>
                     

                    </div>
                </div>
            </div>
        </div>
    </section>







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

      import productService from "../services/products.js";
   
   export default {
     name: 'MarketingPage',
     data() {
      return {
        products:[],
        totalProducts:0,
        showAll:true,
        selectedCategory:'',
        renderProducts:[],

      }
     },
     components:{
       Header,Footer,AnimatedText, WelcomeAnimated,
       Satisfaction
     },
     async created(){
      await this.getProducts()
     },
     methods:{
      selectCategory(category){
        this.selectedCategory=category;
        this.showAll=false

        this.totalProducts=0

        this.renderProducts=[]
        for(let i=0; i<this.products.length; i++){

          if(this.products[i].category==category){
            this.renderProducts.push(this.products[i])
            this.totalProducts+=1
          }
         

        }

      },
      selectAll(){
        this.showAll=true

        //this.totalProducts=this.products.length


        this. renderProducts= this.products
        this.totalProducts=this.renderProducts.length


      },


      async getProducts(){
       

       // zh, 
       let productResponse=await  productService.fetchProducts() 

       if(productResponse.resultCode==1){
         //alert()
         this.products=productResponse.resultContent

         this. renderProducts= this.products

         this.totalProducts=this.renderProducts.length

         //alert(this.products)
        

       }

     },
     gotoProduct(id){

     }


     },
   }
   </script>
   
   <style>
   /* You can add any custom styles here */
   
   </style>
   