import { test, expect } from 'vitest'
import { useFormatHelper } from '../useFormatHelper'
import { createApp } from 'vue'
import vuetify from '../../plugins/vuetify'
import { ref } from 'vue'
import type { Country } from '@yusifaliyevpro/countries/types'

const mockCountry = {
  name: {
    common: 'Brazil',
    official: 'Federative Republic of Brazil',
    nativeName: { por: { official: 'República Federativa do Brasil', common: 'Brasil' } },
  },
  tld: ['.br'],
  currencies: { BRL: { symbol: 'R$', name: 'Brazilian real' } },
  capital: ['Brasília'],
  region: 'Americas',
  subregion: 'South America',
  languages: { por: 'Portuguese' },
  borders: [
    { code: 'ARG', name: 'Argentina' },
    { code: 'BOL', name: 'Bolivia' },
    { code: 'COL', name: 'Colombia' },
  ],
  cca3: 'BRA',
  population: 212559409,
  continents: ['South America'],
  flags: {
    png: 'https://flagcdn.com/w320/br.png',
    svg: 'https://flagcdn.com/br.svg',
    alt: 'The flag of Brazil has a green field with a large yellow rhombus in the center.',
  },
} as unknown as Country

test('should format native names correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { nativeNamesFormatted } = useFormatHelper(countryRef)

  expect(nativeNamesFormatted.value).toBe('Brasil')
})

test('should format currencies correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { currenciesFormatted } = useFormatHelper(countryRef)

  expect(currenciesFormatted.value).toBe('Brazilian real')
})

test('should format population correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { populationFormatted } = useFormatHelper(countryRef)

  expect(populationFormatted.value).toBe('212,559,409')
})

test('should format capital correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { capitalFormatted } = useFormatHelper(countryRef)

  expect(capitalFormatted.value).toBe('Brasília')
})

test('should format TLD correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { tldFormatted } = useFormatHelper(countryRef)

  expect(tldFormatted.value).toBe('.br')
})

test('should format languages correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { languagesFormatted } = useFormatHelper(countryRef)

  expect(languagesFormatted.value).toBe('Portuguese')
})

test('should format border countries correctly', () => {
  const app = createApp({})
  app.use(vuetify)

  const countryRef = ref(mockCountry)
  const { borderCountriesFormatted } = useFormatHelper(countryRef)

  expect(borderCountriesFormatted.value).toBe('Argentina, Bolivia, Colombia')
})
