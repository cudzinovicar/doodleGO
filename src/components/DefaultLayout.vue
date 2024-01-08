<template>
   <span class ="content-start">
    <navbar />
   </span>
   
  <div class="max-w-[1200px] mx-auto">
    <router-view />
  </div>
 
</template>
  
<script setup>
  import Navbar from "../components/NavBar.vue";

</script>