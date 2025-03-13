<template>
  <div style=" " class="bg-white-">





    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main" class="shrink-0">



      <div class="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
        <div style="border:1px solid transparent;" class="max-w-6xl mx-auto">
          <!-- Grid -->
          <div class="">

            <div class="bg-white py-14 mt-6 sm:py-2 mt-4  mb-0 pb-4">
              <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div class="max-w-2xl">

                  <!----
             <h2 class="text-xl font-bold text-gray-800  sm:text-xl">{{content.menuB}}</h2>
         
          
          <p class="mt-2 text-lg text-[10] leading-8 text-gray-500">
            {{content.vouBl}}</p>-->
                </div>

              </div>

            </div>



            <div class="grid gap-6">


              <div class="bg-white ">

                <div class="mx-auto max-w-7xl px-6 lg:px-8">


                  <!-- component -->
                  <div class=" flex items-center mt-4 mb-6 justify-center bg-gray-100 ">

                    <!-- Card -->
                    <card v-if="false" class="bg-white p-4 ">

                      <!-- Header -->
                      <header class="flex font-light text-sm ">
                        <span class="text-purple-700">
                          <span class="text-md">✍🏽 </span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-90 -ml-2 " viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                          </svg>
                        </span>
                        <p>{{ content.menuB }}</p>
                      </header>

                      <!-- Title -->
                      <h2 class="font-bold text-3xl mt-2">
                        Empowering Africans through Trade Insights 🎉🚀
                      </h2>

                      <!-- Tags -->
                      <p class="mt-5">
                        We cover topics in:
                        <a href="#" class="text-purple-600 ">Lifestyle</a>,
                        <a href="#" class="text-purple-600">Trade Analytics</a>,
                        <a href="#" class="text-purple-600">Market Trends</a>,
                        <a href="#" class="text-purple-600">Supply Chain Strategies</a>,
                        <a href="#" class="text-purple-600">Economic Impact</a>
                      </p>

                      <!-- Description --
<h3 class="font-bold text-xl mt-8 mb-2"> Unveiling Trade Opportunities </h3>-->
                      <p class="mt-6"> At <span class="font-semibold">Jinzhangroup</span>, we are committed to providing
                        valuable trade insights and information that empowers businesses and individuals across Africa.
                        Our articles explore a wide array of topics, including industry insights, trade analytics,
                        market trends, supply chain strategies, and the economic impact of trade. Discover the latest
                        trends, expert analyses, and opportunities for growth in the dynamic landscape of African trade.
                      </p>

                      <!-- Buttons -->
                      <router-link to="/quote">
                        <button
                          class="bg-purple-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
                          <p>GET QUOTE NOW</p>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </router-link>

                      <!----
<router-link to="/contact">
  <button class="text-gray-800 font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
    <p>SUBSCRIBE</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</router-link>
-->

                    </card>



                  </div>




                  <!-- Card Blog -->
                  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
                    <!-- Title -->
                    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Blogs</h2>
                      <p class="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry
                        experts.</p>
                    </div>
                    <!-- End Title -->

                    <!-- Grid -->
                    <div v-if="!awaitingResponse" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <!-- Card -->
                      <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#">
                        <div class="flex-auto p-4 md:p-6">
                          <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Empowering
                              Africans through Trade Insights 🎉🚀</span></h3>

                          <p class="mt-6 text-white"> At <span class="font-semibold">Jinzhangroup</span>, we are
                            committed to providing valuable trade insights and information that empowers businesses and
                            individuals across Africa. Our articles explore a wide array of topics, including industry
                            insights, trade analytics, market trends, supply chain strategies, and the economic impact
                            of trade. </p>


                        </div>
                        <div class="pt-0 p-4 md:p-6">
                          <div
                            class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                            Get quote now
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <!-- End Card -->
                      <!-- Card -->
                      <a v-for="(blog, index) in visibleBlogs" :key="index"
                        class="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                          <img
                            class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            v-if="blog.photo !== ''" :src="blog.photo" style=" " alt="Image Description">
                          <span
                            class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-700 text-white py-1.5 px-3 dark:bg-gray-900">
                            top rated
                          </span>
                        </div>

                        <div class="mt-7">

                          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                            {{ blog.title }}
                          </h3>

                          <div class="flex items-center gap-x-4 mt-4 text-xs">

                            <span
                              class="relative z-10 rounded-full bg-gray-100 px-3 cursor-pointer py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ blog.category }}</span>

                            <span v-if="blog.uniqueId !== ''"
                              class="relative z-10 rounded-full bg-purple-50 px-3 py-1.5 font-medium text-black-600 hover:bg-gray-100">{{ blog.uniqueId }}</span>


                          </div>
                          <p class="mt-3 text-gray-800 dark:text-gray-200">
                          <div style="font-size:13px;" v-html="blog.content"></div>


                          </p>
                          <time datetime="2020-03-16" class="text-gray-500 mt-3 text-sm">{{ blog.datePublished }}</time>


                          <div class="mt-3">

                            <router-link :to="'/blogs/' + blog.blogId + '/' + blog.seoSlug" style="font-size:13px;"
                              class="inline-flex items-center gap-x-1.5 text-purple-800 decoration-2 hover:underline font-medium ">
                              Read more
                              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </router-link>





                          </div>


                          <div class="relative mt-3 flex items-center gap-x-4">
                            <img v-if="blog.author.photo !== ''" :src="blog.author.photo" alt=""
                              class="h-7 w-7 rounded-full border bg-gray-50">
                            <div class="text-sm leading-6">
                              <p class="font-semibold text-gray-900">
                                <span>
                                  <span class="absolute inset-0"></span>
                                  {{ blog.author.firstName }} {{ blog.author.lastName }}
                                </span>
                              </p>
                              <p class="text-gray-600"></p>
                            </div>

                          </div>



                        </div>
                      </a>
                      <!-- End Card -->




                    </div>
                    <!-- End Grid -->
                  </div>
                  <!-- End Card Blog -->






                  <!-- component -->
                  <div v-if="awaitingResponse" class='flex items-center justify-center h-24'>
                    <div style="border-top-color:transparent"
                      class="w-8 h-8 border-4 border-purple-200 rounded-full animate-spin"></div>
                    <p class="ml-4"> it is loading 😌... </p>
                  </div>




                  <div style="height:0px;"></div>
                  <!-- component -->
                  <!-- This is an example component -->
                  <div class="max-w-2xl mx-auto">

                    <nav aria-label="Page navigation example">
                      <ul class="inline-flex -space-x-px">
                        <li>
                          <a href="#">
                            <button
                              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              @click="currentPage > 1 ? this.currentPage-- : null">Prev</button>
                          </a>
                        </li>


                        <li>
                          <a href="#" v-for="page in pageNumbers" :key="page" @click="this.currentPage = page"
                            :class="{ active: this.currentPage === page }" class="">

                            <button
                              :class="currentPage == page ? 'relative t-[-2] text-white bg-purple-600  ml-1   text-gray-500  leading-tight py-2 px-3 ' : 'text-gray-500  ml-1  text-gray-700 bg-gray-100 leading-tight py-2 px-3 '">{{
                      page }}</button>

                          </a>

                        </li>

                        <li>
                          <a href="#">

                            <!----  this.currentPage   -->

                            <button
                              class="ml-1 bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              @click=" visibleBlogs.length >= PAGE_SIZE ? this.currentPage++ : null">Next</button>

                          </a>
                        </li>
                      </ul>
                    </nav>

                  </div>



                </div>
              </div>

            </div>


          </div>
        </div>
      </div>














    </main>
    <!-- ========== END MAIN CONTENT ========== -->

    <Footer />
  </div>

</template>

<script>

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import AnimatedText from "../components/animated-text.vue"
import WelcomeAnimated from "../components/welcome-animated.vue"
import Satisfaction from "../components/satisfy.vue"



import config from "../services/config.js";

import blogService from "../services/blog.js";
import contentUtils from "../utils/utils.js";

import zhC from "../translations/zh.json";
import enC from "../translations/en.json";
import jaC from "../translations/ja.json";

import visitorService from "../services/visitors.js";



export default {
  name: 'MarketingPage',
  data() {
    return {
      blogs: [],
      PAGE_SIZE: 9,
      currentPage: 1,
      content: {},
      region: 'zh',
      awaitingResponse: false,

    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.PAGE_SIZE);
    },
    visibleBlogs() {
      const start = (this.currentPage - 1) * this.PAGE_SIZE;
      const end = Math.min(start + this.PAGE_SIZE, this.blogs.length);
      return this.blogs.slice(start, end);
    },
    pageNumbers() {
      const numbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  components: {
    Header, Footer, AnimatedText, WelcomeAnimated,
    Satisfaction
  },
  async created() {

    let regionCookie = await config.getRegion(this.$cookies)


    this.region = regionCookie
    if (regionCookie == 'zh') {
      this.content = zhC


      console.log(this.content)


    } else if (regionCookie == 'en') {
      this.content = enC

      console.log(this.content)


    } else if (regionCookie == 'ja') {
      this.content = jaC

      console.log(this.content)



    }

    this.getBlogs();

    await visitorService.addVisitorByIp(1, '/blogs')

  },
  methods: {
    async getBlogs() {


      // zh, 
      let blogResponse = await blogService.fetchBlogsLanguage(this.region, 1)
      this.awaitingResponse = true
      if (blogResponse.resultCode == 1) {
        //alert()
        this.blogs = blogResponse.resultContent

        console.log(this.blogs)
        for (let i = 0; i < this.blogs.length; i++) {
          this.blogs[i].seoSlug = this.blogs[i].title.split(' ').join('-')


          this.blogs[i].title = contentUtils.reduceTextWithEndingSuffix(this.blogs[i].title, 70)
          this.blogs[i].content = contentUtils.reduceTextWithEndingSuffix(this.blogs[i].content, 100)
          const toDate = new Date()
          // this.blogs[i].datePublished= contentUtils.formatDateMode( this.blogs[i].datePublished) +", "+contentUtils.timeAgo(this.blogs[i].datePublished,toDate)
          this.blogs[i].datePublished = contentUtils.timeAgo(this.blogs[i].datePublished, toDate)




        }
        this.awaitingResponse = false

      }

    },
    gotoBlog(id) {

    }

  }
}
</script>

<style>
/* You can add any custom styles here */
</style>