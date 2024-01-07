<template>
    <h4>Search</h4>
    <div class="flex p-5 justify-center">
        <input type ="text" class="rounded w-full" placeholder="Searchy Wearchy">
        asdfsafd
    </div>
    
</template>

<script setup>
    import {computed} from 'vue';
    import search from '../search';

    const items = computed(() => search.state.gos)
</script>