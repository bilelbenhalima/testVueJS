<template>
    <div class="loader-container">
        <div class="Spinner"></div>
    </div>
  </template>
  
 
  <script>
  export default {
    name: "Loder"
  }
</script>
  <style>
 
  .Spinner {
    width: 48px;
    height: 48px;
    border: 5px solid black;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader-container {
    display: flex;
    justify-content: center;
    height: 400px;
  }
  
  </style>
  