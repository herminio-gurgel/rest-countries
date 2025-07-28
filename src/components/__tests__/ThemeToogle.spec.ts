import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import ThemeToggle from '../ThemeToggle.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { createPinia, setActivePinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const toggleThemeMock = vi.fn()

vi.mock('@/composables/useThemeController', () => ({
  useThemeController: () => ({
    toggleTheme: toggleThemeMock,
  }),
}))

const vuetify = createVuetify({ components })

test('should toggle theme on click', async () => {
  const pinia = createPinia()
  pinia.use(createPersistedState())
  setActivePinia(pinia)

  const wrapper = mount(ThemeToggle, {
    global: {
      plugins: [vuetify, pinia],
    },
  })

  const button = wrapper.find('button')
  await button.trigger('click')

  expect(toggleThemeMock).toHaveBeenCalled()
})
