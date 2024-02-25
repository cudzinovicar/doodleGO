

<script setup>
    // import  sketch from 'vue-color';
    const props = defineProps({colors: Array})
    // //var Sketch = require('vue-color/src/Sketch.vue');
    // export default {
    //     components:{
    //         'sketch-picker': sketch,
    //     },
    //     props:{
    //         colors: Array
    //     },
    //     data () {
    //         return {
    //         colors: this.colors
    //         }
    //     },
    // }
</script>

<template>
    <p>Palette/Color</p>
    <input type="color" />

</template>
