<template>
   
  <div class="text-black dark:text-white block w-full items-center pb-10 justify-center flex-grow">
    <navbar class="flex-1"/>
    
  </div>
  <div class="">
    <router-view class="flex-1"/>
  </div>
  
 
</template>
  
<script setup>
  import Navbar from "./NavBar.vue";

</script>