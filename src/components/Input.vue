<template>
  <div class="input-container">
    <label class="border-container">
      <input type="number" v-model="model" v-focus />
      <div class="suffix">px</div>
    </label>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<string | number>();

const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus(),
};
</script>

<style scoped>
.input-container {
  --animation-duration: 700ms;

  position: relative;
  overflow: hidden;
  border-radius: 999px;
}

.input-container::before {
  content: "";
  display: block;
  position: absolute;
  background-color: var(--primary-color);
  width: 150%;
  aspect-ratio: 1;
  border-radius: 50%;
  right: 60%;
  top: 60%;
  transition: translate var(--animation-duration) ease;
}

.input-container:focus-within {
  &::before {
    translate: 50% -50%;
  }

  .border-container {
    color: var(--text-color);
  }
}

.border-container {
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 20px;
  font-size: 2rem;
  border-radius: 999px;
  display: flex;
  align-items: baseline;
  transition: color var(--animation-duration) ease;
}

.suffix {
  position: relative;
  user-select: none;
}

input {
  border: none;
  position: relative;
  color: inherit;
  padding: 0;
  font-size: inherit;
  text-align: right;
  background: transparent;
  width: 2em;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
