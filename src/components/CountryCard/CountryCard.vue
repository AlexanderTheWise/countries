<script setup lang="ts">
import { RouterLink } from "vue-router";
import { type SimpleCountry } from "../../types";

defineProps<{
  country: SimpleCountry;
}>();
</script>

<template>
  <RouterLink :to="'/' + country.name.common">
    <div class="country">
      <img
        :src="country.flags.png"
        :alt="country.flags.alt"
        width="264"
        height="160"
      />
      <div class="country__info">
        <h2>{{ country.name.common }}</h2>
        <p>
          <span>Population:</span> {{ country.population.toLocaleString() }}
        </p>
        <p><span>Region:</span> {{ country.region }}</p>
        <p><span>Capital:</span> {{ country.capital?.[0] || "" }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
h2 {
  font-size: 1.1rem;
}

p:first-of-type {
  margin-top: 10px;
}

p:not(:first-of-type) {
  margin-top: 5px;
}
.country {
  background: var(--element);
  width: 264px;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.25s ease;
}

.country:hover {
  transform: translateY(-20px);
}
.country__info {
  padding: 24px 24px 40px;
}

.country__info span {
  font-weight: 600;
}
</style>
