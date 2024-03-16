<template>
  <sparks />
  <div class="page-content">
    <p class="vertical-text">streAmen stArteR oM</p>
    <countdown />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Sparks from "./components/Sparks.vue";
import Countdown from "./components/Countdown.vue";
import { useValueDrag } from "./hooks/useValueDrag";

const pxValue = ref(16);
const remValue = computed(() => `${pxValue.value / 16}rem`);
useValueDrag((delta) => (pxValue.value = pxValue.value + delta));
</script>

<style scoped>
.page-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vertical-text {
  margin-block: 3vh;
  color: var(--text-color);
  user-select: none;
  letter-spacing: 3px;
  font-size: 1.5rem;
}
</style>
