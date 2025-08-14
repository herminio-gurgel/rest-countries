import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import CountryCard from '../CountryCard.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({ components })

const mockPush = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

test('should navigate to country detail when clicked', async () => {
  const wrapper = mount(CountryCard, {
    props: {
      country: {
        flags: {
          png: 'https://flagcdn.com/w320/md.png',
          svg: 'https://flagcdn.com/md.svg',
          alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
        },
        name: {
          common: 'Moldova',
          official: 'Republic of Moldova',
          nativeName: { ron: { official: 'Republica Moldova', common: 'Moldova' } },
        },
        cca3: 'MDA',
        capital: ['Chișinău'],
        region: 'Europe',
        population: 2617820,
      },
    },
    global: {
      plugins: [vuetify],
    },
  })

  mockPush.mockClear()

  const card = wrapper.find('.v-card')
  await card.trigger('click')

  expect(mockPush).toHaveBeenCalledWith({ name: 'detail', params: { cca3: 'mda' } })
})
