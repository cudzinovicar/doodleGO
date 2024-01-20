<template>
   
  <div class="text-black dark:text-white mx-auto items-baseline pt-50 items-center
   justify-center flex-grow">
   <Navbar class="flex-1"/>
    
  </div>
  <router-view />
 
</template>
  
<script setup>
  import Navbar from "./NavBar.vue";

</script>