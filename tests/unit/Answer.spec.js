import { createRules } from '@/services/PuzzleFactory'
import { mount } from '@vue/test-utils'
import Answer from '@/components/atoms/Answer.vue'

describe('methods', () => {
  let wrapper

  beforeEach(() => {
    const rules = createRules(3, 6)
    wrapper = mount(Answer, {
      data() {
        return {
          attempt: [0, 0, 0]
        }
      },
      propsData: {
        rules,
        rulesLength: 3
      }
    })
  })

  test('decrease number', () => {
    const answerNumberWrapper = wrapper.findAll('.answer-number-wrap').at(0)
    const answerDown = answerNumberWrapper.find('.answer-down')

    expect(wrapper.vm.attempt[0]).toBe(0)

    answerDown.trigger('click')

    expect(wrapper.vm.attempt[0]).toBe(9)
  })

  test('increase number', () => {
    const answerNumberWrapper = wrapper.findAll('.answer-number-wrap').at(0)
    const answerUp = answerNumberWrapper.find('.answer-up')

    expect(wrapper.vm.attempt[0]).toBe(0)

    answerUp.trigger('click')

    expect(wrapper.vm.attempt[0]).toBe(1)
  })
})
