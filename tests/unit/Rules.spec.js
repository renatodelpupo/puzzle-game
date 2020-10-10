import { mount } from '@vue/test-utils'

import { createRules } from '@/services/PuzzleFactory'
import Rule from '@/components/atoms/Rule.vue'
import Rules from '@/components/organisms/Rules.vue'

describe('Rules.vue', () => {
  it('all rules rendered', () => {
    const wrapper = mount(Rules, {
      propsData: {
        rules: createRules(3, 6)
      }
    })

    const passedRulesLength = wrapper.props().rules.length
    const renderedRulesLength = wrapper.findAllComponents(Rule).length

    expect(passedRulesLength).toBe(renderedRulesLength)
  })
})
