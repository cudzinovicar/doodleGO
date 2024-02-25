<template>
    <p> {{ prompts[index] }}</p>
    <p> {{ index+1 }}/ {{ prompts.length }}</p>
    <button class="dark:bg-slate-950" @click="$emit('nextPrompt')" >Next</button>
</template>

<script setup>
import { ref } from 'vue'

    const props = defineProps({
        prompts:Array
    })
    const index = ref(0);
</script>