import HomeView from '../HomeView.vue'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { expect, test, vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'
import { ref } from 'vue'

const vuetify = createVuetify({ components })
global.ResizeObserver = ResizeObserver

const fetchCountriesMock = vi.fn()

vi.mock('@/composables/useCountryAPI', () => ({
  useCountryAPI: () => ({
    countries: ref([]),
    loading: ref(false),
    error: ref(false),
    fetchCountries: fetchCountriesMock,
  }),
}))

test('should trigger fetchCountries on beforeMount', async () => {
  const wrapper = mount(HomeView, {
    global: {
      plugins: [vuetify],
    },
  })

  expect(fetchCountriesMock).toHaveBeenCalled()
  wrapper.unmount()
})
