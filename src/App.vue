<template>
  <sparks />
  <div class="page-content">
    <app-input v-model="pxValue" />
    <button @click="copyRemValue()">{{ remValue }}</button>
    <transition name="fade-in">
      <div class="copied-text" v-if="showCopiedText">Copied!</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Sparks from "./components/Sparks.vue";
import AppInput from "./components/Input.vue";

const pxValue = ref(16);
const remValue = computed(() => `${pxValue.value / 16}rem`);
const showCopiedText = ref(false);

const copyRemValue = () => {
  navigator.clipboard.writeText(remValue.value).then(() => {
    showCopiedText.value = true;

    setTimeout(() => (showCopiedText.value = false), 600);
  });
};
</script>

<style scoped>
.page-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6vh;
  align-items: center;
}

button {
  font-size: 10rem;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
}

.copied-text {
  position: absolute;
  bottom: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter-from {
  translate: 0 -20px;
  opacity: 0;
}

.fade-in-leave-to {
  translate: 0 20px;
  opacity: 0;
}
</style>
