
<template>
  <div class=" lg:flex  ">
    <div ref="leftside" class="w-1/6 [&>*]:border-solid [&>*]:border-2">
      <div ref="Prompter" class="m-5" >
          <PromptSect :prompts=prompts />
          

      </div>
      <div ref="Timer">
        <TimerSect :paused="paused" :startTime=time @pauseToggle="pause" />
      </div>

    </div>
      
    <div ref="center" class="w-fit">
      <div class="border-solid border-2">
          <vue-drawing-canvas ref="VueCanvasDrawing" 
          :width="width" :height = "height" lineJoin = "round" 
          :fillShape="fillShape" :eraser="eraser" :strokeType="strokeType" :lock="paused" 	 />

      </div>
    </div>
    <div ref="rightside" class="w-1/6">
      <div ref="ToolSelect">
         <ToolSect :tools=enabledTools @toolSelect="changeTool" />
         
      </div>
      <div ref="ToolConfig">

      </div>
      <div ref="PaletteSelect">
        <PaletteSect :colors="['#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)']"
          />
      </div>
    </div>
      
    </div>
 
    
    
        
    
</template>


<script setup>
  import { ref} from 'vue'
    import VueDrawingCanvas from "vue-drawing-canvas";
    import PaletteSect from "../components/draw/PaletteSect.vue";
    import PromptSect from "../components/draw/PromptSect.vue";
    import ToolSect from "../components/draw/ToolSect.vue";
import TimerSect from "../components/draw/TimerSect.vue";

    const enabledTools = ref([{ id:0, name: 'Pen'}, { id: 1, name: 'Eraser'}, { id: 2, name: 'Fill' }])
    const props = defineProps({
      palette: String,
      tools: String,
      width: Number,
      height: Number,
      time: Number,
      prompts: Array})
    const emit = defineEmits(['toolChange', 'timerUp', 'timerPause', 'nextPrompt', 'goFinished'])
      const fillShape = ref(true);
      const eraser = ref(false);
      const strokeType = ref("dash")
      const paused = ref("true");


    function changeTool(n){
      console.log(n)
      switch (n){
        case 0:
          eraser.value = false;
          strokeType.value = "dash";
          break;
        case 1:
          eraser.value = true;
          break;
        case 2:
          eraser.value = false;
          strokeType.value = "square";
          break;
        default:
          eraser.value = false;
          strokeType.value = "dash";
      }
    }
     function pause() {
        paused.value=!paused.value;
     }

    
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