<template>
  <div ref="parent" class="game_map">
    <canvas ref="canvas" class="canvas_class"></canvas>
  </div>
</template>

<script>
import { GameMap } from "../assets/scripts/GameMap"
import { ref , onMounted } from "vue"
export default {
  setup() {
    let parent = ref(null);
    let canvas = ref(null);

    onMounted(()=>{
      new GameMap(canvas.value.getContext("2d"), parent.value);
    });

    return {
      parent,
      canvas
    }
  },
}
</script>

<style scope>
.game_map{
  width: 100%;
  height: 100%;
  text-align: center;
  justify-items: center;
}
</style>