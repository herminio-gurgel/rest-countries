import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import AppTitle from '../AppTitle.vue'

test('should render aplication title', () => {
  const wrapper = mount(AppTitle)
  const title = wrapper.find('span')
  expect(title.text()).toBe('Where in the world?')
})

test('should navigate to home when clicked', async () => {
  vi.mock('vue-router', () => ({
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  }))

  const wrapper = mount(AppTitle)
  await wrapper.find('span').trigger('click')

  const { useRouter } = await import('vue-router')
  const router = useRouter()

  expect(router.push).toHaveBeenCalledWith('/')
})
