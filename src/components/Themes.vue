<script setup>


const theme = defineModel()

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    theme.value = "dark"
} else {
    theme.value = "light"
}

function onChange(event){
    if (event.target.value === "dark") {
        console.log(event.target.value)
        localStorage.theme = "dark"
    } else {
        console.log(event.target.value)
        localStorage.theme = "light"
    }
    location.reload();
}
</script>

<template>
    <label for="themes">Theme:</label>
        <select @change="onChange($event)" v-model="theme" name="themes" id ="themes" class="dark:bg-slate-800 dark:text-white" >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <!-- <option value="sys">System</option> -->
        </select>
</template>