<script setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 8px 20px;
  outline: none;
  border: none;

  background-color: transparent;
  border: 1px solid var(--dark_gray);
  border-radius: 17px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

button::before {
  position: absolute;
  z-index: -1;
  content: "";
  width: 100%;
  height: 0%;
  border-radius: 17px;
  bottom: 0;
  left: 0;
  background-color: var(--black_3);
  transition: all 0.3s ease;
}

button:hover::before {
  height: 100%;
}

/* -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); */
</style>
