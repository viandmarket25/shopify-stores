import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router';
import VueCookies from "vue3-cookies";
import { createPinia } from "pinia";
const pinia = createPinia();

import VueCarousel from 'vue-carousel';



router.beforeEach((to, from, next) => {
    // Close the hamburger menu here (modify this part according to your code structure)
    // For instance, if you have a method to close the menu, call it here
    // Example: Assuming you have a method named closeMenu in your App.vue
    //App.prototype.$root.$emit('closeMenu');
    let ham=document.getElementById("ham");
    let bd=document.body.clientWidth    
    if(to.path!=="/" && bd<640){
        ham.click()
    }
    //console.log(to.path,bd)
    next();
});

//createApp(App).use(router).mount('#app');


let app = createApp(App)
app
.use(VueCarousel)
.use(router)
.use(pinia)
.use(VueCookies)
.mount('#app');

//createApp(App).mount('#app')
