

<script>
    import  sketch from 'vue-color';
    //const props = defineProps(['initialCounter'])
    //var Sketch = require('vue-color/src/Sketch.vue');
    export default {
        components:{
            'sketch-picker': sketch,
        },
        props:{
            colors: Array
        },
        data () {
            return {
            colors: this.colors
            }
        },
    }
</script>

<template>
    <p>Palette/Color</p>
    <sketch-picker v-model="colors" />

</template>
