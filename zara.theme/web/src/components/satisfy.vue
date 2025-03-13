<template>
    <div class="customer-satisfaction">
      <div class="satisfaction-icon">
       <!--- <img src="satisfaction_icon.png" alt="Satisfaction Icon">-->
      </div>
      <div class="satisfaction-info">
        <h2>Customer Satisfaction</h2>
        <p>We prioritize your experience. Our satisfied customers are our motivation!</p>
        <div class="rating" :class="{ 'animate-rating': showAnimation }">
          <span>★★★★★</span> <!-- Adjust stars as per your satisfaction rating -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAnimation: false,
      };
    },
    mounted() {
      // Trigger animation after a delay
      setTimeout(() => {
        this.showAnimation = true;
      }, 1000);
    },
  };
  </script>
  
  <style>
  .customer-satisfaction {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5; /* Set the background color */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  }
  
  .satisfaction-icon img {
    width: 100px; /* Set the width of the icon */
    animation: floatIcon 3s infinite alternate; /* Example animation for the icon */
  }
  
  .satisfaction-info {
    margin-left: 20px;
  }
  
  .rating {
    font-size: 24px; /* Adjust the size of the rating */
    opacity: 0;
    transition: opacity 1s;
  }
  
  .animate-rating {
    opacity: 1;
    animation: fadeIn 1s forwards;
  }
  
  @keyframes floatIcon {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  