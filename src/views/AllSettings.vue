<template>
    <h2>Settings</h2>
    <Themes />
</template>


<script setup>
    import Themes from '../components/Themes.vue'
    import {ref} from 'vue'

    const theme = ref('dark')
    


</script>