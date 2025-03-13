<template>
    <div class="hero-section">
      <h1 class="reveal-text">{{ heroText }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heroText: "Your Infinite Hero Text Here", // Text to be continuously revealed
      };
    },
    mounted() {
      this.revealText();
    },
    methods: {
      revealText() {
        let text = this.heroText;
        let index = 0;
        const revealSpeed = 200; // Adjust the speed (milliseconds per character) to reveal the text
  
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
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* Set your desired background color */
  }
  
  .reveal-text {
    font-size: 2em; /* Set your desired font size */
    color: #333; /* Set your desired text color */
    overflow: hidden;
  }
  </style>
  