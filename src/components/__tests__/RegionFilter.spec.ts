import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import RegionFilter from '../RegionFilter.vue'

const vuetify = createVuetify({ components })

test('should emit regionFilter event with selected region', async () => {
  const wrapper = mount(RegionFilter, {
    global: {
      plugins: [vuetify],
    },
  })

  await wrapper.findComponent({ name: 'VSelect' }).setValue(['Americas', 'Asia'])

  expect(wrapper.emitted('filterByRegion')![0][0]).toEqual(['Americas', 'Asia'])
})
