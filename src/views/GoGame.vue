// prop(input modes and all that, defualt all colors, tools, prompt image)
//establish canvas and record history, 
//
<template>
    <div ref="Prompter" class="my-10" >
        <p> {{prompts[0]}}</p>
        <p> Time: {{ time }}</p>

    </div>

    <vue-drawing-canvas ref="VueCanvasDrawing" 
        :width="width" :height = "height" />

    <div ref="ToolSelect">

    </div>
</template>


<script>
    import VueDrawingCanvas from "vue-drawing-canvas";
    import {config} from "../go/config.js"

    export default{
        name: "GoGame",
        props:{
            palette: String,
            tools: String,
            width: Number,
            height: Number,
            time: Number,
            prompts: Array
        },
        components: {
            VueDrawingCanvas,
        }
    };
</script>