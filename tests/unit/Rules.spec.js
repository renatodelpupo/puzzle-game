import { mount, shallowMount } from '@vue/test-utils'

import { createRules } from '@/services/PuzzleFactory'
import Rule from '@/components/atoms/Rule.vue'
import Rules from '@/components/organisms/Rules.vue'

describe('mount', () => {
  it('all rules rendered', () => {
    const wrapper = shallowMount(Rules, {
      propsData: {
        rules: createRules(3, 6)
      }
    })

    const passedRulesLength = wrapper.props().rules.length
    const renderedRulesLength = wrapper.findAllComponents(Rule).length

    expect(passedRulesLength).toBe(renderedRulesLength)
  })
})

describe('methods', () => {
  test('set key', () => {
    const wrapper = shallowMount(Rules, {
      propsData: {
        rules: createRules(3, 6)
      }
    })
    const key = wrapper.vm.setKey({
      numbers: [1, 2, 3]
    })

    expect(key).toBe('123')
  })
})
