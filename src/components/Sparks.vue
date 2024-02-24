<template>
  <canvas ref="canvasElement" :width="width" :height="height" />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { getWindowSize } from "../hooks/getWindowSize";
import { Spark } from "./Spark";

const { width, height } = getWindowSize();
const canvasElement = ref<HTMLCanvasElement>();
const ctx = computed(() => canvasElement.value?.getContext("2d")!);
let sparks: Spark[] = [];
let lastTimeStamp = 0;
const fps = 60;

const render = (timestamp = 0) => {
  window.requestAnimationFrame(render);

  if (timestamp - lastTimeStamp > 1000 / fps) {
    lastTimeStamp = timestamp;
    ctx.value.clearRect(0, 0, width.value, height.value);

    sparks.forEach((spark) => spark.reRender());
  }
};

onMounted(() => {
  sparks = new Array(200)
    .fill(null)
    .map(() => new Spark(ctx.value, Math.random() * width.value));

  for (let i = 0; i < 200; i++) {
    sparks.forEach((spark) => spark.updateValues());
  }

  render();
});
</script>

<style scoped>
canvas {
  position: fixed;
  z-index: -1;
  rotate: 180deg;
}
</style>
