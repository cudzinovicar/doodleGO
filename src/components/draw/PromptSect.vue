<template>
    <p> {{ prompts[0] }}</p>

</template>

<script setup>

    const props = defineProps({
        prompts:Array
    })
</script>