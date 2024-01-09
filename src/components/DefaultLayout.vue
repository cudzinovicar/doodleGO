<template>
   <navbar />
  <div class="text-black dark:text-white max-w-[1200px] mx-auto">
    <router-view />
  </div>
 
</template>
  
<script setup>
  import Navbar from "./NavBar.vue";

</script>