<script setup lang="ts">
import type { SimpleCountries } from "@/types";
import CountryCard from "../CountryCard/CountryCard.vue";

defineProps<{
  countries: SimpleCountries;
}>();
</script>
<template>
  <ul class="countries">
    <li v-for="country in countries" :key="country.name.common">
      <CountryCard :country="country" />
    </li>
  </ul>
</template>

<style scoped>
.countries {
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  gap: 40px;
  justify-items: center;
  justify-content: center;
}

@media (min-width: 904px) {
  .countries {
    padding: 0px 56px;
    justify-content: space-between;
  }
}

@media (min-width: 1430px) {
  .countries {
    padding: 0 80px;
    grid-template-columns: repeat(4, 264px);
    row-gap: 75px;
  }
}
</style>
