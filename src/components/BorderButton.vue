<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  cca3: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const router = useRouter()

function goToCountry(cca3: string) {
  router.push({ name: 'detail', params: { cca3: cca3.toLowerCase() } })
}
</script>
<template>
  <v-btn class="text-capitalize my-2 mr-2" :text="props.name" @click="goToCountry(props.cca3)" />
</template>
