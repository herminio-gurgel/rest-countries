import { test, expect } from 'vitest'
import { usePaginateAndFilter } from './usePaginateAndFilter'
import { ref, defineComponent } from 'vue'
import { createApp } from 'vue'
import vuetify from '../plugins/vuetify'
import type { Country } from '@yusifaliyevpro/countries/types'

test('should filter countries by name and region', () => {
  let testResult: ReturnType<typeof usePaginateAndFilter> | null = null

  const TestComponent = defineComponent({
    setup() {
      const countries = ref<Country[]>([
        { name: { common: 'Canada' }, region: 'Americas' } as Country,
        { name: { common: 'France' }, region: 'Europe' } as Country,
        { name: { common: 'Germany' }, region: 'Europe' } as Country,
        { name: { common: 'Brazil' }, region: 'Americas' } as Country,
      ])
      const name = ref('an')
      const regions = ref(['Europe'])

      const result = usePaginateAndFilter(countries, name, regions)
      testResult = result

      return {}
    },
    template: '<div></div>',
  })

  const app = createApp(TestComponent)
  app.use(vuetify)

  const container = document.createElement('div')
  app.mount(container)

  expect(testResult).not.toBeNull()
  expect(testResult!.filteredCountries.value.length).toBe(2)
  expect(testResult!.filteredCountries.value[0].name.common).toBe('France')
  expect(testResult!.filteredCountries.value[1].name.common).toBe('Germany')

  app.unmount()
})

test('should paginate countries correctly', () => {
  let testResult: ReturnType<typeof usePaginateAndFilter> | null = null

  const TestComponent = defineComponent({
    setup() {
      const countries = ref<Country[]>([])
      for (let i = 1; i <= 20; i++) {
        countries.value.push({ name: { common: `Country${i}` }, region: 'Region' } as Country)
      }
      const name = ref('')
      const regions = ref<string[]>([])

      const result = usePaginateAndFilter(countries, name, regions)
      testResult = result

      return {}
    },
    template: '<div></div>',
  })

  const app = createApp(TestComponent)
  app.use(vuetify)

  const container = document.createElement('div')
  app.mount(container)

  expect(testResult).not.toBeNull()
  expect(testResult!.paginationLength.value).toBe(Math.ceil(20 / testResult!.perPage.value))

  testResult!.setPage(2)
  expect(testResult!.currentPage.value).toBe(2)

  const expectedCountriesOnPage2 =
    testResult!.perPage.value === 6
      ? ['Country7', 'Country8', 'Country9', 'Country10', 'Country11', 'Country12']
      : [
          'Country9',
          'Country10',
          'Country11',
          'Country12',
          'Country13',
          'Country14',
          'Country15',
          'Country16',
        ]

  expect(testResult!.paginatedCountries.value.map((c: Country) => c.name.common)).toEqual(
    expectedCountriesOnPage2,
  )

  app.unmount()
})
