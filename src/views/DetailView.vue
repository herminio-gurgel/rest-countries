<script setup lang="ts">
import { useCountryAPI } from '@/composables/useCountryAPI'
import { onBeforeMount } from 'vue'
import APIFeedback from '@/components/APIFeedback.vue'
import BackButton from '@/components/BackButton.vue'
import BorderButton from '@/components/BorderButton.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import InfoField from '@/components/InfoField.vue'
import { useFormatHelper } from '@/composables/useFormatHelper'

const { fetchCountryByCode, country, loading, error } = useCountryAPI()
const {
  nativeNamesFormatted,
  currenciesFormatted,
  populationFormatted,
  borderCountriesFormatted,
  capitalFormatted,
  tldFormatted,
  languagesFormatted,
} = useFormatHelper(country)
const route = useRoute()

const props = defineProps({
  cca3: {
    type: String,
    required: true,
  },
})

onBeforeMount(() => {
  fetchCountryByCode(props.cca3)
})

watch(
  () => route.params.cca3,
  (newCca3) => {
    fetchCountryByCode(String(newCca3))
  },
)
</script>
<template>
  <BackButton />

  <APIFeedback :loading="loading" :error="error" @reload="fetchCountryByCode(props.cca3)" />

  <div v-if="!loading && !error">
    <div class="d-md-flex align-center">
      <v-img :src="country.flags.svg" class="rounded-lg border-sm mr-md-6 w-md-50" />
      <div>
        <p class="text-h4 font-weight-bold mb-6">{{ country.name.common }}</p>
        <div
          class="mb-10 d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-sm-space-between"
        >
          <div class="mb-10 mb-sm-0 mb-md-10 pr-sm-3">
            <InfoField label="Native Name" :value="nativeNamesFormatted" />
            <InfoField label="Population" :value="populationFormatted" />
            <InfoField label="Region" :value="country.region" />
            <InfoField label="Sub Region" :value="country.subregion" />
            <InfoField label="Capital" :value="capitalFormatted" />
          </div>
          <div>
            <InfoField label="Top Level Domain" :value="tldFormatted">
              <v-chip
                size="x-small"
                v-for="tld in country.tld"
                :key="tld"
                :text="tld"
                class="mx-2"
              />
            </InfoField>
            <InfoField label="Currencies" :value="currenciesFormatted" />
            <InfoField label="Languages" :value="languagesFormatted" />
          </div>
        </div>
        <InfoField label="Border Countries" :value="borderCountriesFormatted">
          <template #default>
            <div class="d-flex flex-wrap">
              <BorderButton
                v-for="border in country.borders"
                :key="border.code"
                :cca3="border.code"
                :name="border.name"
              />
            </div>
          </template>
        </InfoField>
      </div>
    </div>
  </div>
</template>
