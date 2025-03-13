<template>
    <div class="hero-section">
      <h1 class="reveal-text text-gray-800">{{ heroText }} 😀👍🏼</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heroText: "Join the list of our happy customers", // Text to be continuously revealed
      };
    },
    mounted() {
      this.revealText();
    },
    methods: {
      revealText() {
        let text = this.heroText;
        let index = 0;
        const revealSpeed = 160; // Adjust the speed (milliseconds per character) to reveal the text
  
        setInterval(() => {
          this.heroText = text.slice(0, index);
          index++;
          if (index > text.length) {
            index = 0;
          }
        }, revealSpeed);
      }
    }
  };
  </script>
  
  <style>
  .hero-section {
    height: 0px; /* Set the height of your hero section */
    display: flex;
    justify-content:flex-start;
    align-items: center;
    background-color: #f0f0f0; /* Set your desired background color */
  }
  
  .reveal-text {
    font-size:14px;
   /* Set your desired font size */
    /* Set your desired text color */
    overflow: hidden;
  }
  </style>
  