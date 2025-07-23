import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    current: 'light' as 'light' | 'dark',
  }),
  actions: {
    toggleTheme() {
      this.current = this.current === 'light' ? 'dark' : 'light'
    },
  },
  persist: true,
})
