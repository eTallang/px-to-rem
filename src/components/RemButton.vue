<template>
  <button @click="copyRemValue()">
    <transition name="fade-in">
      <span :key="value">{{ value }}</span>
    </transition>
  </button>
  <transition name="fade-in">
    <div class="copied-text" v-if="showCopiedText">Copied!</div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  value: string;
}>();

const showCopiedText = ref(false);

const copyRemValue = () => {
  navigator.clipboard.writeText(props.value).then(() => {
    showCopiedText.value = true;

    setTimeout(() => (showCopiedText.value = false), 800);
  });
};
</script>

<style scoped>
button {
  display: grid;
  position: relative;
  font-size: max(5.5rem, 8vw);
  background: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding-inline: 32px;
  user-select: none;
  line-height: 0.7;

  &::after {
    content: "";
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

  span {
    grid-row: 1;
    grid-column: 1;
  }
}

.copied-text {
  color: var(--text-color);
  position: absolute;
  letter-spacing: 2px;
  bottom: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 150ms cubic-bezier(0.2, 0, 0.2, 1);
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
