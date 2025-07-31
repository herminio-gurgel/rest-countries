import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchByName from '../SearchByName.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({ components })

test('should emit searchByName event with input value', async () => {
  const wrapper = mount(SearchByName, {
    global: {
      plugins: [vuetify],
    },
  })

  const input = wrapper.find('input')
  await input.setValue('Test Country')

  expect(wrapper.emitted('searchByName')![0]).toEqual(['Test Country'])
})

test('should not emit searchByName event when input is empty', async () => {
  const wrapper = mount(SearchByName, {
    global: {
      plugins: [vuetify],
    },
  })

  const input = wrapper.find('input')
  await input.setValue('')

  expect(wrapper.emitted('searchByName')).toBeUndefined()
})
