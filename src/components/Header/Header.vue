<script setup lang="ts">
import { ref } from "vue";

const iconStyle = ref("far");

function toggleTheme() {
  const rootElementClasses = document.documentElement.classList;
  const darkClass = "dark";

  if (rootElementClasses.contains(darkClass)) {
    rootElementClasses.remove(darkClass);
    iconStyle.value = "far";
    return;
  }

  rootElementClasses.add(darkClass);
  iconStyle.value = "fas";
}
</script>

<template>
  <header class="flex content-between comm-pad-h">
    <h1>Where in the world?</h1>
    <button @click.stop="toggleTheme" class="flex">
      <font-awesome-icon :icon="[iconStyle, 'moon']" spin />
      <span>Dark Mode</span>
    </button>
  </header>
</template>

<style scoped>
header {
  padding: 30px 16px;
  background: var(--element);
}

h1 {
  font-size: 1.2rem;
}

button {
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

@media (min-width: 1430px) {
  header {
    padding: 30px 80px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
