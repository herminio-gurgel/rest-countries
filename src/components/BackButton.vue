<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>
<template>
  <v-btn class="text-capitalize my-4" text="Back" prepend-icon="mdi-arrow-left" @click="goHome" />
</template>
