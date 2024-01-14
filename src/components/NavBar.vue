<template>
    <nav class ="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{name : 'home'}" class=" flex items-center space-x-3 rtl:space-x-reverse" >
                
                <svg alt="doodleGO" class ="start-0 fill-current text-black dark:text-white h-10"   version="1.1"  viewBox="0 0 640 200" xml:space="preserve">
                <g transform="matrix(1 0 0 1 182.3366972557 106.511423565)"  id="ev0uxKziSWBtpPXVCCzDs">
    		<text  font-family="Qwigley" font-size="199" font-style="normal"  font-weight="normal" line-height="1" style=" fill-rule: nonzero; opacity: 1; "><tspan x="-163.5" y="57.44886">doodle</tspan></text>
                </g>
  
                <g transform="matrix(1 0 0 1 524.1831021095 126.7502252364)"  id="XNVE2Uo7hHcZLa8UpIPWL">
    		<text  font-family="Permanent Marker" font-size="192" font-style="normal" font-weight="normal" line-height="1" style="fill-rule: nonzero; opacity: 1; "><tspan x="-192" y="44.79488">GO</tspan></text>
                </g></svg>
                
            </router-link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button @click="showDiv  = !showDiv" collapse_target="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>                
            <div v-bind:class="{ 'hidden': !showDiv, 'flex': showDiv }" class="md:flex md:flex-grow items-center items-center justify-between w-full md:w-auto md:order-1"  id="navbar-sticky">
                <ul class="flex-1 flex-col p-4  list-none ml-auto md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex md:justify-end md:flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'home' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                            Home
                        </router-link>
                    </li>
                    <li>
                    <router-link :to="{ name: 'sandboxTest' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                        Sandbox
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'allSettings' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Settings
                    </router-link>
                </li>
                </ul>
            </div>
        
        </div>
    </nav>
    
</template>

<script setup>
    import { ref } from 'vue'

    const showDiv = ref(false);
    
   
    
</script>




