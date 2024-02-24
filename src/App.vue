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
  position: relative;
  font-size: max(5.5rem, 8vw);
  background: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding-inline: 32px;

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 4px;
    background-color: var(--text-color);
    scale: 0 1;
    transition: scale 400ms ease;
  }

  &:focus-visible::after {
    scale: 1 1;
  }
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
