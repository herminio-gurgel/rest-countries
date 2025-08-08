import { computed, ref, type Ref } from 'vue'
import { useDisplay } from 'vuetify'
import type { Country } from '@yusifaliyevpro/countries/types'

export function usePaginateAndFilter(
  countries: Ref<Country[]>,
  name: Ref<string>,
  regions: Ref<string[]>,
) {
  const display = useDisplay()

  const perPage = computed(() => (display.md.value ? 6 : 8))
  const currentPage = ref(1)

  const filteredCountries = computed(() => {
    return countries.value.filter((country) => {
      const matchesName = name.value
        ? country.name.common.toLowerCase().includes(name.value.toLowerCase())
        : true

      const matchesRegion = regions.value.length
        ? regions.value.includes(country.region || '')
        : true

      return matchesName && matchesRegion
    })
  })

  const paginationLength = computed(() => Math.ceil(filteredCountries.value.length / perPage.value))

  const paginatedCountries = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = start + perPage.value
    return filteredCountries.value.slice(start, end)
  })

  function setPage(page: number) {
    currentPage.value = page
  }

  return {
    paginatedCountries,
    filteredCountries,
    currentPage,
    paginationLength,
    perPage,
    setPage,
  }
}
