<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const handleClick = () => {
  router.push({ name: 'detail', params: { code: props.country.cca3 } })
}
</script>

<template>
  <v-card hover link height="320" width="265" class="mx-auto" @click="handleClick">
    <v-img height="160" :src="country.flags.svg" class="rounded-t-sm" cover />
    <v-divider thickness="3" />
    <v-card-title class="font-weight-bold">{{ country.name.common }}</v-card-title>
    <v-card-text>
      <p class="mb-2"><span class="font-weight-bold">Population</span>: {{ country.population }}</p>
      <p class="mb-2"><span class="font-weight-bold">Region</span>: {{ country.region }}</p>
      <p><span class="font-weight-bold">Capital</span>: {{ country.capital[0] }}</p>
    </v-card-text>
  </v-card>
</template>
