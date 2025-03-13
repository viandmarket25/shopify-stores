<template>
  <div style=" " class="bg-white">

    <!-- ========== HEADER ========== -->

    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main" class="shrink-0">




      <!-- Contact Us -->
      <div v-if="content" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl lg:max-w-5xl mx-auto">
          <div v-if="!contactSubmitted" class="text-center">
            <h1 v-if="content" class="text-3xl font-bold text-gray-800 sm:text-4xl ">
              {{ content.cntTlk }}
            </h1>
            <p v-if="content" class="mt-1 text-gray-600 ">
              {{ content.cntWh }}
            </p>
          </div>

          <div v-if="!contactSubmitted" class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <!-- Card -->
            <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
              <h2 v-if="content" class="mb-8 text-xl font-semibold text-gray-800 ">
                {{ content.cntFil }}
              </h2>


              <div v-if="contactError"
                class="bg-yellow-50 border mb-4 border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 "
                role="alert">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <div class="ms-4">
                    <h3 class="text-sm font-semibold">
                      Cannot Send Message 🙀
                    </h3>
                    <div class="mt-1 text-sm text-yellow-700">
                      Enter required details, make sure email is valid
                    </div>
                  </div>

                </div>

              </div>

              <form>
                <div class="grid gap-4">
                  <!-- Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
                      <input v-model="firstName" maxlength="35" style="box-shadow:0 0 0 1px #eee;" type="text"
                        name="hs-firstname-contacts-1" id="hs-firstname-contacts-1"
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="First Name">
                    </div>

                    <div>
                      <label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
                      <input v-model="lastName" maxlength="35" style="box-shadow:0 0 0 1px #eee;" type="text"
                        name="hs-lastname-contacts-1" id="hs-lastname-contacts-1"
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Last Name">
                    </div>
                  </div>
                  <!-- End Grid -->

                  <div>
                    <label for="hs-email-contacts-1" class="sr-only">Email</label>
                    <input v-model="email" maxlength="35" style="box-shadow:0 0 0 1px #eee;" type="email"
                      name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Email">
                  </div>

                  <div>
                    <label for="hs-phone-number-1" class="sr-only">Phone Number</label>
                    <input v-model="phone" maxlength="35" style="box-shadow:0 0 0 1px #eee;" type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="hs-phone-number-1" id="hs-phone-number-1"
                      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Phone Number">
                  </div>

                  <div>
                    <label for="hs-about-contacts-1" class="sr-only">Details</label>
                    <textarea v-model="message" maxlength="335" style="box-shadow:0 0 0 1px #eee;"
                      id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4"
                      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Details"></textarea>
                  </div>
                </div>
                <!-- End Grid -->

                <div class="mt-4 grid">
                  <button @click="addContact()" type="button" style="background:#202020; height:38px; "
                    class="inline-flex justify-center rounded-2xl items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 ">
                    <span v-if="awaitingResponse"
                      class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-grey-200 rounded-full "
                      role="status" aria-label="loading">
                      <span class="sr-only">Loading...</span></span>

                    {{ content.cntSnM }}</button>
                </div>



                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-500">

                    {{ content.cntlesH }}
                  </p>
                </div>
              </form>




            </div>
            <!-- End Card -->

            <div class="divide-y divide-gray-200 ">


              <!-- Icon Block -->
              <div class=" flex gap-x-7 py-6">




                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 ">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>



                <div>
                  <h3 class="font-semibold text-gray-800 ">Contact us by email</h3>
                  <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                  <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                    href="#">
                    info@jinzhangroup.com
                  </a><br />
                  <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                    href="#">
                    contact@jinzhangroup.com
                  </a><br />

                  <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                    href="#">
                    sales@jinzhangroup.com
                  </a>



                </div>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class=" flex gap-x-7 py-6">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 ">
                  <path fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-800 ">Our Address</h3>

                 

                  <p class="mt-1 text-sm text-gray-500 uppercase">Coporate office in China</p>
                  <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                    href="#">
                    广东省深圳市龙华区展润国际大厦802室<br />

                    Room 802: Zhanrun International Building, Longhua District, Shenzhen City, Guangdong Province, People
                    Republic of China
                  </a><br />
                  <br />

              

                </div>

              
              </div>
              <!-- End Icon Block -->

             

            </div>
         
          </div>

          <div v-if="!contactSubmitted" class="divide-y divide-gray-200 ">



            <!-- Icon Block -->
            <div class=" flex gap-x-7 py-6">


              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 ">
                <path fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd" />
              </svg>


              <div>
                <h3 class="font-semibold text-gray-800 ">Support Lines</h3>
                <p class="mt-1 text-sm text-gray-500">If you wish to  call us on phone please use</p>
                <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                  href="#">
                  +86-13077859002
                  ( China Office - General)
                </a><br />
                <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                  href="#">
                  +234(0)9028527976  (Nigeria Office - General)

                </a><br />
                <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 "
                  href="#">
                  
                  +234(0)7060959549 
                  ( Product Sourcing-Nigeria)
                </a><br />
              </div>
            </div>


  


 



            <!-- End Icon Block -->
          </div>

<!---
          <div v-if="!contactSubmitted" class="mt-2 pt-8">
                  <h3 class="font-semibold text-gray-800 ">
                    Connect on Wechat
                  </h3>

                  <div class="">
                            <img 
                            src="/src/assets/images/wechat-channel.jpg" 
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 

                            class="h-[160px] w-[160px] rounded-ld  object-center group-hover:opacity-75">
                          </div>
                 

                  <br />

            
                </div>
              -->


          <div v-if="contactSubmitted" class="flex p-4 items-center justify-center ">
            <div class="rounded-lg bg-gray-50 px-16 py-14">
              <div class="flex justify-center">
                <div class="rounded-full bg-purple-200 p-6">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-8 w-8 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 class="my-4 text-center text-2xl font-semibold text-gray-700">Congratulations!</h3>
              <p class="w-[230px] text-center font-normal text-gray-600">Your message has been sent, you will hear from us
                soon</p>

            </div>
          </div>






        </div>


      </div>
      <!-- End Contact Us -->


    </main>
    <!-- ========== END MAIN CONTENT ========== -->

  </div>
</template>
   
<script>
import Header from "../components/header.vue"

import contactService from "../services/contact.js";



import visitorService from "../services/visitors.js";


import config from "../services/config.js";


import zhC from "../translations/zh.json";
import enC from "../translations/en.json";



export default {
  name: 'MarketingPage',

  async created() {
    //this.getBlogs();

    let regionCookie = await config.getRegion(this.$cookies)


    this.region = regionCookie
    if (regionCookie == 'zh') {
      this.content = zhC


      console.log(this.content)


    } else if (regionCookie == 'en') {
      this.content = enC

      console.log(this.content)


    }


    await visitorService.addVisitorByIp(1, '/contact' )

    //config.setRegion(this.region, this.$cookies)
  },

  data() {
    return {
      blogs: [],
      region: 'zh',
      content: {},


      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',

      contactSubmitted: false,
      awaitingResponse: false,
      contactError: false,


      contact: {

      },

    }
  },
  components: {

    Header
  },

  methods: {
    validatePhone(phoneInput) {

      const phoneValue = phoneInput.trim();
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

      if (!phoneRegex.test(phoneValue)) {
        alert("Please enter a valid phone number in the format 123-456-7890.");
        //phoneInput.focus();
        return false;
      }

      // Proceed with form submission or other actions
      return true;
    },

    checkFieldValidity(valueField) {

      // Value emptiness validation
      const isValueEmpty = valueField.trim() === "";

      // Display feedback
      if (!isValueEmpty) {
        return true
      } else {

        return false
      }
    },

    checkEmailValidity(emailField) {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(emailField);

      // Display feedback
      if (isValidEmail) {
        return true
      } else {
        return false
      }
    },

    async addContact() {
      const formData = new FormData();
      formData.append('firstName', this.firstName);
      formData.append('lastName', this.lastName);
      formData.append('email', this.email);
      formData.append('phone', this.phone);

      formData.append('message', this.message);

      // :::::::::: validations
      if (this.checkFieldValidity(this.message) && this.checkFieldValidity(this.phone) && this.checkFieldValidity(this.lastName) && this.checkFieldValidity(this.firstName) && this.checkEmailValidity(this.email)) {

        let contactResponse = await contactService.addContact(formData)

        this.awaitingResponse = true
        if (contactResponse.resultCode == 1) {
          this.contactSubmitted = true
          this.awaitingResponse = false

        } else {
          this.contactError = true


        }


      } else {
        // :::::::; error
        this.contactError = true



      }







    },



  },

}
</script>
   
<style>/* You can add any custom styles here */</style>
   