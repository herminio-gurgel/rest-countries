<script setup lang="ts">
import CountryCard from '@/components/CountryCard.vue'
import SearchByName from '@/components/SearchByName.vue'
import { onBeforeMount } from 'vue'
import { useCountryAPI } from '@/composables/useCountryAPI'
import APIFeedback from '@/components/APIFeedback.vue'
import FilterByRegion from '@/components/RegionFilter.vue'

const { countries, fetchCountries, loading, error } = useCountryAPI()

onBeforeMount(() => {
  fetchCountries()
})
</script>

<template>
  <APIFeedback :loading="loading" :error="error" @reload="fetchCountries" />
  <div v-if="!loading && !error">
    <div class="d-sm-flex my-4 justify-space-between">
      <SearchByName @search-by-name="(r) => console.log(r)" />
      <FilterByRegion @filter-by-region="(r) => console.log(r)" />
    </div>
    <v-row>
      <v-col xs="12" sm="6" md="4" lg="3" v-for="country in countries" :key="country.name.common">
        <CountryCard :country="country" />
      </v-col>
    </v-row>
  </div>
</template>
