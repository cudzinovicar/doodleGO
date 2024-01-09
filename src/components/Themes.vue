<script setup>
const vm = new Vue({
    data:{
        selected: ""
    },
    methods:{
        onChange(event){
            if (event.target.value === "dark") {
                localStorage.theme = "dark"
            } else {
                localStorage.theme = "light"
            }
        }
    }
})

</script>

<template>
    <label for="themes">Theme:</label>
        <select v-model="selected" name="themes" id ="themes" class="dark:bg-slate-800 dark:text-white" @change="onChange($event)">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <!-- <option value="sys">System</option> -->
        </select>
</template>