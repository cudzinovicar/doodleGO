<template>
    <div ref="main" :class="getBackgroundGrad()" class=" mx-auto animate-fade-up animate-ease-out animate-delay-100  box-border text-center h-fit w-fit break-after-auto p-5 my-36 md:my-32 md:flex" >
        <div class ="md:w-1/2">
            <h1 class="pb-5 font-extrabold">{{ title }}</h1>
            <img class="fill-black" :src="imgPath" :alt="alt"/>
        </div>
        
        <p class=" flex font-mono items-center justify-center md:w-1/2 whitespace-pre-line p-5">{{ desc }}</p>
        </div>
        
</template>

<script>
export default {
    props: {
        color1: String,
        color2: String,
        title: String,
        desc: String,
        imgPath: String,
        alt: String,
    },
    methods: {
        getBackgroundGrad() {
            return {
                // 'bg-gradient-to-br': true,
                // [`from-${this.color1}-500`]: true,
                // [`to-${this.color2}-500`]: true,
            };
        },
    },
};
</script>



<style scoped>
</style>