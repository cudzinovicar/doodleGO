<template>
   
  <div class="text-black dark:text-white mx-auto items-baseline pt-50 items-center
   justify-center flex-grow">
   <navbar class="flex-1"/>
    <router-view class="flex-1"/>
  </div>
 
</template>
  
<script setup>
  import Navbar from "./NavBar.vue";

</script>