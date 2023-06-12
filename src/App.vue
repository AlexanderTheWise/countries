<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>
