<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue'
import CountryCard from '@/components/CountryCard.vue'
import SearchByName from '@/components/SearchByName.vue'
import FilterByRegion from '@/components/RegionFilter.vue'
import APIFeedback from '@/components/APIFeedback.vue'
import { useCountryAPI } from '@/composables/useCountryAPI'
import { usePaginateAndFilter } from '@/composables/usePaginateAndFilter'

const { countries, fetchCountries, loading, error } = useCountryAPI()

const searchName = ref('')
const selectedRegions = ref<string[]>([])

const { paginatedCountries, currentPage, paginationLength, setPage } = usePaginateAndFilter(
  countries,
  searchName,
  selectedRegions,
)

onBeforeMount(() => {
  fetchCountries()
})

watch([searchName, selectedRegions], () => {
  setPage(1)
})
</script>

<template>
  <APIFeedback :loading="loading" :error="error" @reload="fetchCountries" />

  <div v-if="!loading && !error">
    <div class="d-sm-flex my-4 justify-space-between">
      <SearchByName v-model="searchName" />
      <FilterByRegion v-model="selectedRegions" />
    </div>

    <v-row>
      <v-col
        v-for="country in paginatedCountries"
        :key="country.name.common"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <CountryCard :country="country" />
      </v-col>
    </v-row>

    <div class="mt-6 d-flex justify-center" v-if="paginationLength > 1">
      <v-pagination
        class="w-50"
        v-model="currentPage"
        :length="paginationLength"
        @input="setPage"
      />
    </div>
  </div>
</template>
