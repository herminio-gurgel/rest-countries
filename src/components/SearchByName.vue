<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['searchByName'])

function handleSearch() {
  if (search.value) {
    emit('searchByName', search.value)
  }
}

const search = ref()
</script>
<template>
  <v-text-field
    prepend-inner-icon="mdi-magnify"
    label="Search for a country"
    variant="solo"
    clearable
    hide-details
    persistent-clear
    v-model="search"
    max-width="480"
    class="mb-4 mb-sm-0 mr-sm-4"
    @update:model-value="handleSearch"
  />
</template>
