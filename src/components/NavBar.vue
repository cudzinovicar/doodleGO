<template>
    <nav class ="">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{name : 'home'}" class="text-white flex items-center space-x-3 rtl:space-x-reverse" >
                doodleGO
            </router-link>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <router-link :to="{ name: 'createSet' }" >
                    create set
                </router-link>
                <router-link :to="{ name: 'browseContent' }" >
                    search
                </router-link>
            </div>
            
        
        </div>
    </nav>
    
</template>

<script>

</script>