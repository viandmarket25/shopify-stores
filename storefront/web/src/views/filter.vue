<template>

    <div style="font-family:Nunito-Bold; ">


        <div class="w-full flex  justify-center ">

            <div class="flex lg:w-[1050px] gap-3 cols-2 justify-center">

                <div class="  w-1/5 h-full flex-1 mt-8 overflow-y-auto px-4 py-4 sm:px-6">









                    <div class="flex items-start  pb-4 mb-6 justify-between">
                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Filter </h2>

                    </div>

                    <div class="w-full   mb-8">

                        <ul class="space-y-2 font-medium text-sm text-gray-900 ">
                            <li>New Arrivals</li>
                            <li>Best Sellers</li>
                            <li>All Sale</li>
                        </ul>
                    </div>

                    <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

                    <div class="space-y-2">
                        <details
                            class="overflow-hidden  border-b  border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                                <span class="text-sm font-medium mb-3 "> Availability </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">


                                <ul class="space-y-1  border-gray-200 mt-3 py-3 ">
                                    <li>
                                        <label for="FilterInStock" class="inline-flex items-center gap-2">
                                            <input type="checkbox" id="FilterInStock"
                                                class="size-5 rounded border-gray-300" />

                                            <span class="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                                            <input type="checkbox" id="FilterPreOrder"
                                                class="size-5 rounded border-gray-300" />

                                            <span class="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                                            <input type="checkbox" id="FilterOutOfStock"
                                                class="size-5 rounded border-gray-300" />

                                            <span class="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>




                    </div>





                </div>


                <div style="font-family:Nunito-Medium; "
                    class="w-4/5 h-[400px]  mt-4 pt-1 border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex mt-8 mb-6 justify-between text-base font-medium text-gray-900">
                        <p class="font-bold ">New Arrivals Men's Clothes</p>
                        <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

                        <div class="flex gap-8">
                            <div class="relative mr-4">
                                <details class="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        class="flex cursor-pointer items-center gap-2  border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                                        <span class="text-sm font-medium"> Sort by </span>

                                        <span class="transition group-open:-rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div
                                        class="z-50 mr-6 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                        <div class="w-[200px] mr-6 rounded-xl  bg-[#f9f9f9] ">
                                            

                                            <ul class="space-y-1  border-gray-200 p-4">
                                                <li>Featured</li>
                                                <li>Latest</li>
                                                <li>Price: high-low</li>
                                                <li>Price: low-high</li>
                                    
                                    
                                            </ul>
                                        </div>
                                    </div>
                                </details>
                            </div>

                        </div>




                    </div>


                    <div class=" h-[400px] w-full rounded-lg ">


                        <FilterItems />

                    </div>

                </div>


            </div>

        </div>


    </div>







    <!-- ========== END HEADER ========== -->
</template>

<script>

import FilterItems from "../vnav-widgets/filter-items.vue"
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
            blogs: [],
            region: 'zh',
            content: {},

        }
    },
    components: {

        FilterItems,
        CategorizedHeader,


    },
    async created() {
        this.getBlogs();

        this.region = await config.initRegion(this.$cookies)

        let regionCookie = await config.getRegion(this.$cookies)


        this.region = regionCookie
        if (regionCookie == 'zh') {
            this.content = zhC


            //console.log( this.content)


        } else if (regionCookie == 'en') {
            this.content = enC

            //console.log( this.content)


        }
        //alert(this.region)

    },
    methods: {
        async handleRegionChange() {

            config.setRegion(this.region, this.$cookies)
            window.location.reload()

            //alert(await config.getRegion(this.$cookies))

            this.region = await config.getRegion(this.$cookies)

        },
        async getBlogs() {


            // zh, 
            let blogResponse = await blogService.fetchBlogsLanguage("en", 1)

            if (blogResponse.resultCode == 1) {
                //alert()
                this.blogs = blogResponse.resultContent
                for (let i = 0; i < this.blogs.length; i++) {
                    this.blogs[i].seoSlug = this.blogs[i].title.split(' ').join('-')


                    this.blogs[i].title = contentUtils.reduceTextWithEndingSuffix(this.blogs[i].title, 70)
                    this.blogs[i].content = contentUtils.reduceTextWithEndingSuffix(this.blogs[i].content, 100)
                    const toDate = new Date()
                    // this.blogs[i].datePublished= contentUtils.formatDateMode( this.blogs[i].datePublished) +", "+contentUtils.timeAgo(this.blogs[i].datePublished,toDate)
                    this.blogs[i].datePublished = contentUtils.timeAgo(this.blogs[i].datePublished, toDate)




                }

            }

        },
        gotoBlog(id) {

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