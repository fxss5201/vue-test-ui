import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import button from './../../packages/button/src/main.vue'

describe('button', () => {
  it('button primary', () => {
    const type = 'primary'
    const wrapper = mount(button, {
      propsData: { type }
    })
    expect(wrapper.contains(type)).toBe(true)
  })
})
