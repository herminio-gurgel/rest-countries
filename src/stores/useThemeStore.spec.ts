import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from './useThemeStore'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPersistedState } from 'pinia-plugin-persistedstate'

describe('useThemeStore', () => {
  beforeEach(() => {
    const pinia = createPinia()
    pinia.use(createPersistedState())
    setActivePinia(pinia)
  })

  it('should toggle theme from light to dark', () => {
    const store = useThemeStore()
    expect(store.current).toBe('light')
    store.toggleTheme()
    expect(store.current).toBe('dark')
  })
})
