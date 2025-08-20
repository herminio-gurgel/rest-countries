import DetailView from '../DetailView.vue'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { expect, test, vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'
import { ref } from 'vue'

const vuetify = createVuetify({ components })
global.ResizeObserver = ResizeObserver

const fetchCountryMock = vi.fn()

vi.mock('@/composables/useCountryAPI', () => ({
  useCountryAPI: () => ({
    fetchCountryByCode: fetchCountryMock,
    country: ref({
      name: { common: 'Brazil' },
      flags: { svg: 'https://example.com/flag.svg' },
      region: 'Americas',
      subregion: 'South America',
      capital: ['Brasília'],
      tld: ['.br'],
      languages: { por: 'Portuguese' },
      borders: [],
    }),
    loading: ref(false),
    error: ref(false),
  }),
}))

vi.mock('@/composables/useFormatHelper', () => ({
  useFormatHelper: () => ({
    nativeNamesFormatted: ref(''),
    currenciesFormatted: ref(''),
    populationFormatted: ref(''),
    borderCountriesFormatted: ref(''),
    capitalFormatted: ref(''),
    tldFormatted: ref(''),
    languagesFormatted: ref(''),
  }),
}))

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      cca3: 'BRA',
    },
  }),
}))

vi.mock('@/components/APIFeedback.vue', () => ({
  default: { template: '<div>API Feedback</div>' },
}))

vi.mock('@/components/BackButton.vue', () => ({
  default: { template: '<div>Back Button</div>' },
}))

vi.mock('@/components/BorderButton.vue', () => ({
  default: { template: '<div>Border Button</div>' },
}))

vi.mock('@/components/InfoField.vue', () => ({
  default: { template: '<div>Info Field</div>' },
}))

test('should trigger fetchCountryByCode when mounted', async () => {
  const wrapper = mount(DetailView, {
    global: {
      plugins: [vuetify],
      stubs: {
        APIFeedback: true,
        BackButton: true,
        BorderButton: true,
        InfoField: true,
        'v-img': true,
        'v-chip': true,
      },
    },
    props: {
      cca3: 'BRA',
    },
  })

  expect(fetchCountryMock).toHaveBeenCalledWith('BRA')
  wrapper.unmount()
})
