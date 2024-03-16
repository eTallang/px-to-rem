<template>
  <div class="countdown-container">
    <transition name="time-value">
      <span class="minutes" :key="minutes">{{
        (minutes < 10 ? "0" : "") + minutes
      }}</span>
    </transition>
    :
    <transition name="time-value">
      <span class="seconds" :key="seconds">{{
        (seconds < 10 ? "0" : "") + seconds
      }}</span>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
const minutes = ref(0);
const seconds = ref(0);

const weddingDate = new Date(2024, 2, 16, 20, 28).getTime();
let intervalId = 0;

const setTimeUntilWedding = () => {
  // get total seconds between the times
  let delta = (weddingDate - Date.now()) / 1000;

  // calculate (and subtract) whole minutes
  minutes.value = Math.max(0, Math.floor(delta / 60) % 60);
  delta -= minutes.value * 60;

  seconds.value = Math.max(0, Math.floor(delta));
};

onMounted(() => {
  intervalId = window.setInterval(setTimeUntilWedding, 1000);
  setTimeUntilWedding();
});

onUnmounted(() => window.clearInterval(intervalId));
</script>

<style scoped>
.countdown-container {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 8px;
  font-size: 10vw;
  color: var(--text-color);
}

.minutes {
  grid-column: 1;
  grid-row: 1;
}

.seconds {
  grid-column: 3;
  grid-row: 1;
}

.time-value-enter-active,
.time-value-leave-active {
  transition: all 0.5s ease;
}

.time-value-enter-from {
  opacity: 0;
  translate: 0 -20px;
}

.time-value-leave-to {
  opacity: 0;
  translate: 0 20px;
}
</style>
