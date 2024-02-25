<template>
  <sparks />
  <div class="page-content">
    <app-input v-model="pxValue" />
    <p class="vertical-text">equals</p>
    <rem-button :value="remValue" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Sparks from "./components/Sparks.vue";
import AppInput from "./components/Input.vue";
import RemButton from "./components/RemButton.vue";
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
  text-transform: uppercase;
  color: var(--text-color);
  user-select: none;
}
</style>
