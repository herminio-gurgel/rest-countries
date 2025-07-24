<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import AppTitle from './AppTitle.vue'
</script>

<template>
  <v-app-bar>
    <v-row>
      <AppTitle />
      <ThemeToggle />
    </v-row>
  </v-app-bar>
  <RouterView />
</template>
