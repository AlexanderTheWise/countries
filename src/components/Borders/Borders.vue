<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import type { SimpleCountries, SimpleCountry } from "@/types";

const countryNames = ref<string[]>();

const props = defineProps<{
  borders: string[];
}>();

onBeforeMount(async () => {
  const responses = await Promise.all(
    props.borders.map((border) =>
      fetch(`
https://restcountries.com/v3.1/alpha/${border}`)
    )
  );

  const countries = await Promise.all(
    responses.map((response) => {
      return response.json() as Promise<SimpleCountries>;
    })
  );

  countryNames.value = countries.map((country) => country[0].name.common);
});
</script>

<template>
  <div class="borders">
    <span
      v-for="countryName in countryNames"
      :key="countryName"
      class="border"
      >{{ countryName }}</span
    >
  </div>
</template>

<style scoped>
.borders {
  margin-top: 16px;
}

.border {
  border-radius: 5px;
  padding: 5px 10px;
  background: var(--element);
}

.border:not(:first-of-type) {
  margin-left: 10px;
}

@media (min-width: 1430px) {
  .borders {
    margin-left: 15px;
    margin-top: 0;
    display: inline;
  }
}
</style>
