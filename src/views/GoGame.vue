
<template>
  <div class=" lg:flex  w-full">
    <div ref="leftside" class="w-1/6">
      <div ref="Prompter" class="m-5" >
          <PromptSect :prompts=prompts />
          

      </div>
      <div ref="Timer">
        <p> Time: {{ time }}</p>
      </div>

    </div>
      
    <div ref="center" class="w-fit">
      <div class="border-solid border-2">
          <vue-drawing-canvas ref="VueCanvasDrawing" 
          :width="width" :height = "height" lineJoin = "round"/>

      </div>
    </div>
    <div ref="rightside" class="w-1/6">
      <div ref="ToolSelect">
          Tools
          <div v-for="tool in enabledTools">
            <input @click="$emit('toolSelect')" type="radio" name="tools" :id="tool.message" :value="tool.message" v-model="toolSelected" />
            <label>{{ tool.message }}</label>
          </div>
         
      </div>
      <div ref="ToolConfig">

      </div>
      <div ref="PaletteSelect">
        <PaletteSect ref = "PaletteSect" colors="['#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)']"
          />
      </div>
    </div>
      
    </div>
 
    
    
        
    
</template>


<script>
  import { ref} from 'vue'
    import VueDrawingCanvas from "vue-drawing-canvas";
    import PaletteSect from "../components/draw/PaletteSect.vue";
    import PromptSect from "../components/draw/PromptSect.vue";
    
    
    export default{
      setup(){
          const enabledTools= ref([{pen:'Pen'},
            {eraser:'Eraser'},
            {fill:'Fill'}])
          return{
            enabledTools
          }
        },
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
            PromptSect,
        },
        emits:['toolChange', 'timerUp', 'timerPause', 'nextPrompt', 'goFinished'],
        
        
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