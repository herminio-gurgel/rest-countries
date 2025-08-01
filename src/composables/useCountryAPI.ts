import { defineFields, getCountries } from '@yusifaliyevpro/countries'
import { ref } from 'vue'

export function useCountryAPI() {
  const countryFields = defineFields(['name', 'capital', 'population', 'region', 'flags', 'cca3'])

  const countries = ref()
  const loading = ref(false)
  const error = ref(false)

  async function fetchCountries() {
    loading.value = true
    error.value = false

    countries.value = await getCountries({
      fields: countryFields,
    })

    if (!countries.value || countries.value.length === 0) {
      error.value = true
      loading.value = false
      return
    }

    loading.value = false
  }

  return {
    countries,
    loading,
    error,
    fetchCountries,
  }
}
