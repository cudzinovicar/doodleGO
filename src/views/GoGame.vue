
<template>

    <div ref="Prompter" class="my-10" >
        <p> {{prompts[0]}}</p>
        <p> Time: {{ time }}</p>

    </div>
    
    <div class="border-solid border-2">
        <vue-drawing-canvas ref="VueCanvasDrawing" 
        :width="width" :height = "height" />

    </div>
    
    <div ref="ToolSelect">
        Tools
        <PaletteSect ref = "PaletteSect" colors="['#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)']"
         />
    </div>
    
        
    
</template>


<script>

    import VueDrawingCanvas from "vue-drawing-canvas";
    import PaletteSect from "../components/draw/PaletteSect.vue";
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
            PaletteSect,
        },
        
    };
</script>

<style scoped>
.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}
</style>