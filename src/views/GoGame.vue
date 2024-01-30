
<template>

    <div ref="Prompter" class="my-10" >
        <p> {{prompts[0]}}</p>
        <p> Time: {{ time }}</p>

    </div>
    

    <vue-drawing-canvas ref="VueCanvasDrawing" 
        :width="width" :height = "height" />

    <div ref="ToolSelect">

    </div>
    <draggable>
        <PaletteSect />
    </draggable>
    
</template>


<script>
    import VueDrawingCanvas from "vue-drawing-canvas";
    import PaletteSect from "../components/draw/PaletteSect.vue";
    import draggable from "vuedraggable";
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
            draggable,
            VueDrawingCanvas,
            PaletteSect,
        },
        data(){
            return{
                drag: false,
            }
        }

    };
</script>