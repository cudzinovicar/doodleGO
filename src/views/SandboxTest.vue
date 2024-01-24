<template>
    <div ref="Prompter">

    </div>

    <vue-drawing-canvas ref="VueCanvasDrawing" 
        width=width height = height />
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
            time: Number
        },
        components: {
            VueDrawingCanvas,
        }
    };
</script>