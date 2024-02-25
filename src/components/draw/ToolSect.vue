<template>
     Tools
    <div v-for="tool in tools">
        <input @click="$emit('toolSelect', tool.id)" type="radio" name="tools" :key="tool.id" :id="tool.id" :value="tool.name" v-model="toolSelected" />
        <label :for="tool.id">{{ tool.name }}</label>
    </div>

</template>

<script setup>
     const props = defineProps({
        tools: Array
     })
</script>