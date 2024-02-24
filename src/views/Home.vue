<template>
    
    <div class=" w-full  overflow-auto justify-center align-middle">
        <div>
            <HomeBlock class="bg-gradient-to-br from-red-500 via-pink-400 to-purple-600"
            color1="red" color2="purple" title="Ready" desc="A widely available web app game for desktop and mobile use.
            Responsive design and compatiblity checks ensures a smooth experience while using the app on any device and browser" imgPath="./images/ready.svg" alt="Multiple computer devices including a desktop monitor, tablet, and portable phone"/>

        </div>
        <div>
            <HomeBlock class="bg-gradient-to-br from-yellow-500 via-amber-400  to-orange-600" color1="yellow"  color2="blue" title="Set" desc="Easy to make sets for any theme or topic imaginable. 
            Users will consectively draw the items in the set.
            Publish for anyone to use." imgPath="./images/sets.svg" alt=""/>

        </div>
        <div>
            <HomeBlock class="bg-gradient-to-br from-lime-500 via-green-400  to-blue-600" color1="lime" color2="orange" title="GO" desc="Customize the drawing experience to any preference.
            Upload the GO results to social media or the integrated platform to share and interact with other users and find more Sets." imgPath="./images/go.svg" alt=""/>

        </div>
        <div>
            <p class=" font-mono items-center justify-center whitespace-pre-line p-5 my-36"> 
                <b>doodleGO</b> is in pre-alpha. <br>Development started early this year and changes are being added frequently. <br>
                <a class="dark: text-indigo-400" href="https://github.com/cudzinovicar/doodleGO">Check out more and stay up-to-date on the doodleGO GitHub page</a>
            </p>
        </div>



    </div>
 
</template>

<script>
import HomeBlock from '../components/HomeBlock.vue';

export default {
    components: {
        HomeBlock,
    },
};
</script>