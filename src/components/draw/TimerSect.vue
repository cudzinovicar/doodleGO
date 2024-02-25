<template>
    <h1> {{ time }}</h1>

    <button class="dark:bg-slate-950" v-text="msg" @click="$emit('pauseToggle')" 
     ></button>

</template>


<script setup>
import { ref } from 'vue'

    const props= defineProps({startTime: {type:Number,  default:60}, paused: Boolean})

    const time = ref(props.startTime);
    const msg = ref("GO!")

    function pause(){
        console.log("test")
        if(props.paused){
            msg.value="GO!"
        }
        else{
            msg.value="Pause"
        }
    }

</script>