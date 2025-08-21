<script setup lang="ts">
import { useRouter } from 'vue-router'
import InfoField from '@/components/InfoField.vue'

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const handleClick = () => {
  router.push({ name: 'detail', params: { cca3: props.country.cca3.toLowerCase() } })
}
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        hover
        link
        height="320"
        width="265"
        class="mx-auto"
        @click="handleClick"
      >
        <div class="image-container">
          <v-img
            height="160"
            :src="country.flags.svg"
            class="rounded-t-sm country-flag-image"
            :class="{ zoomed: isHovering }"
            cover
            :alt="`Flag of ${country.name.common}`"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </div>
        <v-divider thickness="3" />
        <v-card-title class="font-weight-bold">{{ country.name.common }}</v-card-title>
        <v-card-text>
          <InfoField
            label="Population"
            :value="new Intl.NumberFormat('en-US').format(country.population)"
          />
          <InfoField label="Region" :value="country.region" />
          <InfoField label="Capital" :value="country.capital.join(', ')" />
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<style scoped>
.image-container {
  overflow: hidden;
  height: 160px;
}

.country-flag-image {
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
}

.country-flag-image.zoomed {
  transform: scale(1.1);
}
</style>
