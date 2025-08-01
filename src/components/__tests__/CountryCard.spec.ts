import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import CountryCard from '../CountryCard.vue'

test('should navigate to country detail when clicked', async () => {
  vi.mock('vue-router', () => ({
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  }))

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
  })
  await wrapper.trigger('click')

  const { useRouter } = await import('vue-router')
  const router = useRouter()

  expect(router.push).toHaveBeenCalledWith({ name: 'detail', params: { code: 'MDA' } })
})
