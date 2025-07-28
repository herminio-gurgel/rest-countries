import { useTheme } from 'vuetify'
import { computed, watch } from 'vue'
import { useThemeStore } from '@/stores/useThemeStore'

export function useThemeController() {
  const store = useThemeStore()
  const theme = useTheme()

  watch(
    () => store.current,
    (newTheme) => {
      theme.change(newTheme)
    },
    { immediate: true },
  )

  function toggleTheme() {
    store.toggleTheme()
  }

  const icon = computed(() =>
    store.current === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night',
  )

  const label = computed(() => (store.current === 'dark' ? 'Light Mode' : 'Dark Mode'))

  const currentTheme = computed(() => store.current)

  return {
    toggleTheme,
    icon,
    label,
    currentTheme,
  }
}
