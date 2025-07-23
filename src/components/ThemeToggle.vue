<script setup lang="ts">
import { useThemeController } from '@/composables/useThemeController'

const { toggleTheme, icon, label } = useThemeController()
</script>

<template>
  <v-btn class="text-capitalize" :prepend-icon="icon" @click="toggleTheme">
    <span>{{ label }}</span>
  </v-btn>
</template>
