<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <v-app-bar>
    <v-row>
      <v-app-bar-title>Where in the world?</v-app-bar-title>
      <ThemeToggle />
    </v-row>
  </v-app-bar>
  <RouterView />
</template>
