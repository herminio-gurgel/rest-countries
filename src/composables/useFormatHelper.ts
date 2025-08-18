import { computed, type Ref } from 'vue'
import type { Country } from '@yusifaliyevpro/countries/types'

export function useFormatHelper(country: Ref<Country>) {
  const nativeNamesFormatted = computed(() => {
    if (!country.value?.name?.nativeName) return ''
    return [
      ...new Set(
        Object.values(country.value.name.nativeName).map((n) => (n as { common: string }).common),
      ),
    ].join(', ')
  })

  const currenciesFormatted = computed(() => {
    if (!country.value?.currencies) return ''
    return Object.values(country.value.currencies)
      .map((c) => (c as { name: string }).name)
      .join(', ')
  })

  const populationFormatted = computed(() => {
    return new Intl.NumberFormat('en-US').format(Number(country.value?.population))
  })

  const borderCountriesFormatted = computed(() => {
    if (!country.value?.borders?.length) return 'None'
    return country.value.borders
      .map((border) => {
        return typeof border === 'string' ? border : (border as { name: string }).name
      })
      .join(', ')
  })

  const capitalFormatted = computed(() => {
    if (!country.value?.capital?.length) return ''
    return country.value.capital.join(', ')
  })

  const tldFormatted = computed(() => {
    if (!country.value?.tld?.length) return ''
    return country.value.tld.join(', ')
  })

  const languagesFormatted = computed(() => {
    if (!country.value?.languages) return ''
    return Object.values(country.value.languages).join(', ')
  })

  return {
    nativeNamesFormatted,
    currenciesFormatted,
    populationFormatted,
    borderCountriesFormatted,
    capitalFormatted,
    tldFormatted,
    languagesFormatted,
  }
}
