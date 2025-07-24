<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <v-app-bar-title>
    <span class="cursor-pointer font-weight-bold" @click="goHome"> Where in the world? </span>
  </v-app-bar-title>
</template>
