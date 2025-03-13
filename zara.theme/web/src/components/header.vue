<template>
  <!-- ========== HEADER ========== -->


  <header style="font-family:Nunito-Bold; "
    class="flex  flex-col  mb-4  lg:mb-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white  text-sm py-2 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">


    <div class="flex justify-between h-[38px] w-full bg-[#f6f6f6] hidden lg:flex  ">

    <div class="px-3 h-full ">
     
    </div>

      <div style="font-family:Nunito-Medium; " id="navbar-collapse-with-animation"
        class="hs-collapse  flex items-center h-full  justify-end  ">


        <div class="flex   text-[12px] font-normal lg:bg-[#f7f7f7] px-8 lg:rounded-xl  text-[14px]  gap-x-4  ">

          <div>
            <a class="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
              href="#" aria-current="page">help</a>
          </div>
          <div>
            <a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              href="#">about</a>
          </div>
          <div>
            <a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              href="#">stories</a>
          </div>


        </div>


      </div>



    </div>

    <nav
      class="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global">
      <div class="flex items-center justify-between">
     
        
     
        <a class="flex-none relative -left-2 rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="/" aria-label="Preline">

          <img src="/images/t0777.png " class=" max-w-[28px] max-h-[28px] lg:max-w-[24px] lg:max-h-[24px] -mt-1 inline-block " />

<span class="hidden ml-2 lg:inline-block">T0777</span>

          <img  v-if="false" src="/src/assets/images/nike-logo.jpg " class=" max-w-[90px] max-h-[90px] mt-1 " />

      



        </a>
      </div>





      <div class="flex items-center ms-auto sm:ms-0 sm:order-3">

        <!-- Button Group -->
        <div class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">

          <button @click="toggleSearch()" type="button"
            class="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl  text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">

            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button type="button"
            class="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl  text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

          </button>

          <button type="button"
            class="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl  text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-5 w-5 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>



          <div class="md:hidden">



            <!------    border    ---->
            <button v-if="false" type="button"
              class="hs-collapse-toggle size-[34px] flex justify-center p-1 items-center text-sm font-semibold rounded-xl bg-white text-black hover:bg-gray-100  "
              data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 size-6 " xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>

              <svg class="hs-collapse-open:block hidden flex-shrink-0 size-6 " xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>




        </div>
        <!-- End Button Group -->
        <div class="sm:hidden">

          <button type="button"
            class="p-2 inline-flex justify-center rounded-full items-center gap-2 font-medium bg-white text-gray-900  align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            data-hs-overlay="#navbar-offcanvas-example" aria-controls="navbar-offcanvas-example"
            aria-label="Toggle navigation">

            <svg v-if="false" class="hs-overlay-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


          </button>
        </div>


      </div>


      <!--------------      Desktop MENU --------------->
      <div id="navbar-collapse-with-animation"
        class="hs-collapse hidden lg:block overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">

        <div id="navbar-collapse-with-animation"
          class="w-full min-w-[500px] hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">

          <div
            class="overflow-hidden  overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

            <div
              class="flex flex-col divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-center py-2 md:py-0  md:ps-5 md:divide-y-0 md:divide-solid dark:divide-neutral-700">



              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex  items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal ">
                  New & Featured

                </button>

                <div
                  class="h-[500px] left-0 w-screen  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <CollectionItems />
                  </div>
                </div>

              </div>

              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex  items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal ">
                  Men

                </button>

                <div
                  class="h-[500px] left-0 w-screen  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <CollectionItems />
                  </div>
                </div>

              </div>



              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Women
                </button>

                <div
                  class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                  </div>
                </div>

              </div>

              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Kids
                </button>

                <div
                  class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                  </div>
                </div>

              </div>

              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Beauty
                </button>

                <div
                  class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                  </div>
                </div>

              </div>

              <div
                class=" hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 px-3 md:px-3 md:py-4">
                <button type="button"
                  class="flex items-center w-full text-sm text-gray-800 hover:text-gray-700 font-normal dark:text-neutral-400 dark:hover:text-neutral-500">
                  Hot
                </button>

                <div
                  class="h-[300px] w-full  hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl  py-2   before:absolute before:-top-5 before:start-0 before:w-full before:h-5 ">
                  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <!--------------      Mobile MENU --------------->
      <div id="navbar-offcanvas-example"
        class="hs-overlay overflow-y-scroll hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-neutral-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden lg:hidden "
        tabindex="-1" data-hs-overlay-close-on-resize>


        <div
          class="overflow-hidden mt-[60px] overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

          <!--   divide-y divide-dashed divide-gray-200 -->
          <div
            class="flex  divide-y flex-col  text-[18px] lg:text-[14px] md:flex-row md:items-center md:justify-center py-2 md:py-0  md:ps-5 md:divide-y-0 md:divide-solid dark:divide-neutral-700">



            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex  cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> New & Featured </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class="   pt-2 border-gray-200 ">


                  <CollectionItems />
                </div>
              </details>




            </div>
            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> Men </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class=" border-gray-200 bg-white">


                  <CollectionItems />
                </div>
              </details>




            </div>

            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> Women </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class=" border-gray-200 bg-white">


                  <CollectionItems />
                </div>
              </details>




            </div>

            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> Kids </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class=" border-gray-200 bg-white">


                  <CollectionItems />
                </div>
              </details>




            </div>
            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> Beauty </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class=" border-gray-200 bg-white">


                  <CollectionItems />
                </div>
              </details>




            </div>
            <div class="space-y-2 px-3 py-3 ">
              <details class="overflow-hidden   border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 bg-white  text-gray-900 transition">
                  <span class="  mb-3 "> Hot </span>

                  <span class="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>

                <div class=" border-gray-200 bg-white">


                  <CollectionItems />
                </div>
              </details>




            </div>










          </div>

        </div>

        <div style="font-family:Nunito-Medium; " class=" mt-10 mb-12 px-3">
          <p class=" max-w-[200px] text-lg text-gray-600 font-medium "> Become a member for the best products, inspirations and stories all over the world.</p>


          <p class=" flex mt-6 gap-x-3 "> <button @click="toggleSearch()" type="button"
            class="py-2 px-4 bg-gray-900 inline-flex items-center gap-x-2 text-sm font-medium rounded-full  text-white hover:bg-gray-100 disabled:opacity-50 ">

           Join Us
          </button>

          <button @click="toggleSearch()" type="button"
            class="py-2 px-4 border inline-flex items-center gap-x-2 text-sm font-bold rounded-full  text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">

           Sign In
          </button>


        
        </p>


        </div>

        <div class="flex flex-col gap-y-4 mb-20 text-[16px] font-normal lg:bg-[#f7f7f7] px-3 lg:rounded-xl  text-[14px]  gap-x-4  ">

          <div>
  <a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
    href="#">help</a>
</div>

<div>
  <a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
    href="#">about</a>
</div>
<div>
  <a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
    href="#">stories</a>
</div>


</div>






      </div>







    </nav>
  </header>




  <div v-if="searchOpen" class="w-screen h-sreen lg:h-screen fixed bg-[#777]/80 top-0 left-0 ml-0 mt-0 z-20">


    <div class="w-screen h-screen border-b lg:h-[600px]  bg-white top-0 left-0 ml-0 mt-0 z-20">

      <div class="flex cols-3 px-3 lg:px-6 min-h-[60px] justify-between items-center ">

        <div class="hidden lg:block md:col-span-3  ">
          <!-- Logo -->
          <a class=" flex-none relative -left-2 rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/" aria-label="Preline">
       
            <img src="/images/t0777.png " class=" max-w-[28px] max-h-[28px] lg:max-w-[24px] lg:max-h-[24px] -mt-1 inline-block " />

<span class="hidden ml-2 lg:inline-block">T0777</span>


          </a>
          <!-- End Logo -->
        </div>

        <div class="relative  ">
          <input type="email"
            class="peer border-transparent bg-[#f2f2f2] w-[280px]   py-2 px-4 ps-11 block lg:w-[600px] focus-none ring-none bg-gray-100  rounded-full text-sm "
            placeholder="Search">
          <div
            class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        <button @click="toggleSearch()" type="button"
          class="py-2 px-2 hover:text-gray-600 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-gray-700  ">
          Cancel
        </button>



      </div>

      <div class="w-full flex justify-center px-4 mt-8 mb-8">
        <div class="w-[600px]  px-4 mb-8">
          <h2 class="text-sm text-gray-600 font-normal mb-4">Popular Search Terms</h2>
          <ul class="space-y-2 font-semibold text-lg text-gray-900 ">
            <li>Air Force 1</li>
            <li>Jordan</li>
            <li>Air Max</li>
            <li>Blazer</li>
          </ul>
        </div>

      </div>


    </div>



  </div>








  <!-- ========== END HEADER ========== -->
</template>

<script>


import CollectionItems from "../vnav-widgets/collection-items.vue"




export default {
  name: 'MarketingPage',
  data() {
    return {
      searchOpen: false,
      blogs: [],
      region: 'zh',
      content: {},

    }
  },
  components: {

    CollectionItems,
  },
  async created() {
   
  },
  methods: {

   

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
