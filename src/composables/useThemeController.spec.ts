import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useThemeController } from './useThemeController'
import { defineComponent } from 'vue'

import { createPinia, setActivePinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({ components })

test('should change theme on toggle', () => {
  const pinia = createPinia()
  pinia.use(createPersistedState())
  setActivePinia(pinia)

  const TestComponent = defineComponent({
    setup() {
      const { toggleTheme, icon, label, currentTheme } = useThemeController()
      return { toggleTheme, icon, label, currentTheme }
    },
  })

  const wrapper = mount(TestComponent, {
    global: {
      plugins: [vuetify, pinia],
    },
  })

  expect(wrapper.vm.currentTheme).toBe('light')

  wrapper.vm.toggleTheme()

  expect(wrapper.vm.currentTheme).toBe('dark')
})
