<script setup lang="ts">
import { ref, watch, computed } from "vue";
import Countries from "@/components/Countries/Countries.vue";
import type { SimpleCountries } from "@/types";

const countryName = ref("");
const region = ref("All");
const countries = ref<SimpleCountries>([]);
const showDropDown = ref(false);
const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

const countriesByName = computed(() =>
  countryName.value
    ? countries.value.filter(({ name }) =>
        name.common.toLowerCase().startsWith(countryName.value.toLowerCase())
      )
    : countries.value
);

function selectRegion(name: string) {
  region.value = name;

  showDropDown.value = false;
}

watch(
  region,
  async (newSearch) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/${
        newSearch === "All" ? "all" : "region/" + newSearch
      }`
    );

    countries.value = (await response.json()) as SimpleCountries;
  },
  { immediate: true }
);
</script>

<template>
  <div class="home">
    <div class="flex home__query">
      <div class="home__search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input
          aria-label="Search for a country"
          type="search"
          v-model="countryName"
          placeholder="Search for a country..."
        />
      </div>
      <div class="home__filter">
        <div
          class="flex home__filter-select"
          @click="showDropDown = !showDropDown"
        >
          <span>Filter by Region</span>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="chevron" />
        </div>
        <Transition name="slide-fade">
          <div v-if="showDropDown" class="home__filter-dropdown">
            <div
              v-for="region in regions"
              :key="region"
              @click.stop="selectRegion(region)"
            >
              {{ region }}
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <Countries :countries="countriesByName" />
  </div>
</template>

<style scoped>
input[type="search"],
input[type="search"]::placeholder {
  margin-left: 24px;
  color: inherit;
  font: inherit;
  font-weight: 400;
}

.chevron {
  font-size: 12px;
}

.home__query {
  padding: 0 16px;
  row-gap: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 24px 0 32px;
}
.home__search {
  cursor: pointer;
  height: 48px;
  width: 100%;
  max-width: 480px;
  padding: 15px 32px;
  color: var(--input);
  border-radius: 5px;
  background: var(--element);
}

.home__filter {
  position: relative;
  width: 230px;
}
.home__filter-select {
  cursor: pointer;
  align-items: center;
  padding: 15px 24px;
  justify-content: space-between;
  height: 48px;
  background: var(--element);
  border-radius: 5px;
}

.home__filter-dropdown {
  width: 230px;
  background: var(--element);
  position: absolute;
  top: 55px;
  z-index: 5;
  cursor: pointer;
  border-radius: 5px;
}

.home__filter-dropdown div {
  padding: 5px 24px;
}

.home__filter-dropdown div:first-of-type {
  padding-top: 16px;
}

.home__filter-dropdown div:last-of-type {
  padding-bottom: 16px;
}
.home__filter-dropdown div:hover {
  background-color: var(--back-option);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@media (min-width: 1430px) {
  .home__query {
    padding: 0 80px;
    margin: 48px 0;
  }
}
</style>
