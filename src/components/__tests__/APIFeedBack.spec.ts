import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import APIFeedBack from '../APIFeedback.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import ResizeObserver from 'resize-observer-polyfill'

const vuetify = createVuetify({ components })
global.ResizeObserver = ResizeObserver

test('should display loading state', () => {
  const wrapper = mount(APIFeedBack, {
    global: {
      plugins: [vuetify],
    },
    props: {
      loading: true,
      error: false,
    },
  })

  expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
})

test('should display error message when there is an error', () => {
  const wrapper = mount(APIFeedBack, {
    global: {
      plugins: [vuetify],
    },
    props: {
      loading: false,
      error: true,
    },
  })

  expect(wrapper.find('.v-empty-state').exists()).toBe(true)
})

test('should emit reload event when retry button is clicked', async () => {
  const wrapper = mount(APIFeedBack, {
    global: {
      plugins: [vuetify],
    },
    props: {
      loading: false,
      error: true,
    },
  })

  await wrapper.find('.v-btn').trigger('click')

  expect(wrapper.emitted('reload')).toBeDefined()
})
