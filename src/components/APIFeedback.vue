<script setup lang="ts">
const emit = defineEmits(['reload'])

defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  error: {
    type: Boolean,
    required: true,
  },
})

function reload() {
  emit('reload')
}
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center" style="height: 300px">
    <v-progress-circular indeterminate size="50" />
  </div>

  <div v-if="error">
    <v-empty-state
      icon="mdi-alert-circle"
      title="Error fetching data"
      text="A network or REST Countries API side error happened while fetching data. Try again later"
      class="text-center"
      action-text="Retry"
      @click:action="reload"
    />
  </div>
</template>
