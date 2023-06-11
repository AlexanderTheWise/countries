<script setup lang="ts">
function toggleTheme() {
  const rootElementClasses = document.documentElement.classList;
  const moonClasses = document.querySelector("i")?.classList!;
  const darkClass = "dark";

  if (rootElementClasses.contains(darkClass)) {
    rootElementClasses.remove(darkClass);
    moonClasses.replace("fa-solid", "fa-regular");
    return;
  }

  rootElementClasses.add(darkClass);
  moonClasses.replace("fa-regular", "fa-solid");
}
</script>

<template>
  <header class="flex content-between comm-pad-h">
    <h1>Where in the world?</h1>
    <button @click="toggleTheme" class="flex">
      <i class="fa-regular fa-moon"></i>
      <span>Dark Mode</span>
    </button>
  </header>
</template>

<style scoped>
@import "@fortawesome/fontawesome-free/css/all.min.css";

header {
  padding: 40px 15px;
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
</style>
