<script setup lang="ts">
import Borders from "@/components/Borders/Borders.vue";
import type { Country } from "@/types";
import { onBeforeMount, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const country = ref<Country>();

onBeforeMount(async () => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(
      useRoute().params.name as string
    )}`
  );

  country.value = ((await response.json()) as Country[])[0];
});
</script>

<template>
  <div class="flex detail">
    <div class="flex country-page">
      <RouterLink :to="{ name: 'Home' }" class="flex home-link">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        <span>Back</span>
      </RouterLink>

      <div class="flex country">
        <img
          :src="country?.flags.png"
          :alt="country?.flags.alt"
          width="320"
          height="229"
        />
        <div class="country__info">
          <h2>{{ country?.name.common }}</h2>
          <div class="flex country__data">
            <div>
              <p>
                <span>Native Name:</span>
                {{
                  country?.name.nativeName[Object.keys(country!.languages)[0]]
                    .common
                }}
              </p>
              <p>
                <span>Population:</span>
                {{ country?.population.toLocaleString() }}
              </p>
              <p><span>Region:</span> {{ country?.region }}</p>
              <p><span>Sub Region:</span> {{ country?.subregion }}</p>
              <p><span>Capital:</span> {{ country?.capital[0] }}</p>
            </div>
            <div>
              <p><span>Top Level Domain:</span> {{ country?.tld[0] }}</p>
              <p>
                <span>Currencies:</span>
                {{ Object.values(country!.currencies)[0].name }}
              </p>
              <p>
                <span>Languages:</span>
                {{ Object.values(country!.languages).join(", ") }}
              </p>
            </div>
          </div>
          <p>
            <span>Border countries:</span>
            <Borders :borders="country!.borders" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p:not(:first-of-type) {
  margin-top: 6px;
}

.country__info > p:last-child {
  margin-top: 34px;
}

p span {
  font-weight: 600;
}

.home-link {
  margin-top: 40px;
  border-radius: 5px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 104px;
  padding: 6px 0;
  background: var(--element);
}

.country {
  flex-direction: column;
}
.detail {
  flex-direction: column;
}
.country-page {
  align-self: center;
  flex-direction: column;
}

.country {
  margin-top: 64px;
}

.country__info {
  padding-bottom: 20px;
  margin-top: 44px;
}

.country__data {
  margin-top: 16px;
  gap: 32px;
  flex-direction: column;
}

@media (min-width: 800px) {
  img {
    width: 560px;
    height: 400px;
  }
  .country {
    align-items: center;
    flex-direction: row;
    gap: 10%;
  }
  .country__info {
    margin: 0;
  }
}

@media (min-width: 1430px) {
  .country__info > p:last-child {
    margin-top: 68px;
  }

  h2 {
    font-size: 32px;
  }
  .detail {
    padding: 0 80px;
  }
  .country-page {
    align-self: initial;
  }

  .country {
    gap: 144px;
  }

  .country__data {
    flex-direction: row;
    gap: 144px;
  }
}
</style>
