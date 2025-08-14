<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <p class="mb-2">
    <span class="font-weight-bold">{{ props.label }}</span
    >:
    <slot>
      {{ props.value }}
    </slot>
  </p>
</template>
