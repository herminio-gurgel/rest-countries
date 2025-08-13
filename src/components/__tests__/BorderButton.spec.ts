import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import BorderButton from '../BorderButton.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({ components })

test('should navigate to home when clicked', async () => {
  vi.mock('vue-router', () => ({
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  }))

  const wrapper = mount(BorderButton, {
    props: {
      cca3: 'MDA',
      name: 'Moldova',
    },
    global: {
      plugins: [vuetify],
    },
  })
  await wrapper.find('button').trigger('click')

  const { useRouter } = await import('vue-router')
  const router = useRouter()

  expect(router.push).toHaveBeenCalledWith({ name: 'detail', params: { cca3: 'mda' } })
})
