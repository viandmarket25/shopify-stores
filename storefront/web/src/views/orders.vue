<template>

   
  
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
  *:focus {
      outline: none;
  }
  .form-control:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  </style>
  