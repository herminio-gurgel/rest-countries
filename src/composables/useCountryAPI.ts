import {
  defineFields,
  getCountries,
  getCountriesByCodes,
  getCountryByCode,
} from '@yusifaliyevpro/countries'
import type { Cca3Code } from '@yusifaliyevpro/countries/types'
import { ref } from 'vue'

export function useCountryAPI() {
  const countries = ref()
  const country = ref()
  const loading = ref(false)
  const error = ref(false)

  async function fetchCountries() {
    loading.value = true
    error.value = false

    countries.value = await getCountries({
      fields: defineFields(['name', 'capital', 'population', 'region', 'flags', 'cca3']),
    })

    if (!countries.value || countries.value.length === 0) {
      error.value = true
      loading.value = false
      return
    }

    loading.value = false
  }

  async function fetchCountryByCode(cca3: Cca3Code) {
    const countryFields = defineFields([
      'flags',
      'name',
      'population',
      'region',
      'subregion',
      'capital',
      'tld',
      'currencies',
      'languages',
      'borders',
    ])

    loading.value = true
    error.value = false

    country.value = await getCountryByCode({
      code: cca3,
      fields: countryFields,
    })

    if (country.value === null) {
      error.value = true
      loading.value = false
      return
    }

    if (country.value.borders && country.value.borders.length > 0) {
      country.value.borders = await hydrateBorders(country.value.borders as Cca3Code[])
    }

    loading.value = false
  }

  async function hydrateBorders(borders: Cca3Code[]) {
    if (!borders || borders.length === 0) return []

    const borderCountries = await getCountriesByCodes({
      codes: borders,
      fields: defineFields(['name', 'cca3']),
    })

    if (!borderCountries || borderCountries.length === 0) return []

    return borderCountries.map((borderCountry) => ({
      code: borderCountry.cca3,
      name: borderCountry.name.common,
    }))
  }

  return {
    countries,
    country,
    loading,
    error,
    fetchCountries,
    fetchCountryByCode,
  }
}
