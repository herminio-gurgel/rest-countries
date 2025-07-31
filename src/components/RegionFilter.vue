<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['filterByRegion'])

function handleFilterChange(region: Array<string>) {
  if (region.some((r) => items.value.includes(r))) {
    emit('filterByRegion', region)
  }
}

const filter = ref()
const items = ref(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'])
</script>
<template>
  <v-select
    :items="items"
    clearable
    multiple
    persistent-clear
    label="Filter by Region"
    variant="solo"
    v-model="filter"
    max-width="207"
    @update:modelValue="handleFilterChange"
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 1" :text="item.title" />
      <span v-if="index === 1" class="text-grey text-caption align-self-center">
        (+{{ filter.length - 1 }})
      </span>
    </template>
  </v-select>
</template>
