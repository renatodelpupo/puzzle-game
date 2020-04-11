<template>
  <div>
    <div class="answer-box">
      <label class="answer-label" for="answer">Type your answer here:</label>
      <input class="answer-input" id="answer" value type="number" min="1" step="1" required />
      <button class="answer-button" @click="test()">Test!</button>
    </div>
    <feedback-box v-show="answered" :success="success" />
  </div>
</template>

<script>
import FeedbackBox from '../molecules/FeedbackBox'

export default {
  name: 'AnswerBox',

  components: {
    FeedbackBox
  },

  props: {
    rules: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    answered: false,
    feedbackMessages: [],
    success: null
  }),

  methods: {
    test() {
      const _inputValue = document.querySelector('#answer').value
      const attempt = _inputValue.toString().split('').map(Number)
      let hasError = false
      this.feedbackMessages = []

      this.rules.forEach((rule, index) => {
        const numbers = rule.numbers
        const ruleId = index + 1

        const verifyNumbers = attempt.filter(attemptItem => numbers.includes(attemptItem))
        const verifyPositions = attempt.filter((attemptItem, attemptIndex) => {
          return numbers.includes(attemptItem) && numbers.indexOf(attemptItem) === attemptIndex
        })

        const numbersCorrect = verifyNumbers.length === rule.correctNumbers
        const positionsCorrect = verifyPositions.length === rule.correctPositions

        if (numbersCorrect && positionsCorrect) {
          this.feedbackMessages.push(`Rule ${ruleId} correct`)
        } else {
          this.feedbackMessages.push(`Rule ${ruleId} incorrect`)
          hasError = true
        }
      })

      this.success = !hasError
      this.answered = true
    }
  }
}
</script>

<style lang="scss" scoped>
.answer {
  &-box {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 50px auto 30px;
  }

  &-button {
    background: #007acc;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 14px;
    margin-top: 15px;
    padding: 10px 15px;
    text-shadow: none;
  }

  &-input {
    background-color: #858585 !important;
    border: none !important;
    color: #1e1e1e !important;
    line-height: 2em;
  }

  &-label {
    margin-bottom: 15px;
  }
}
</style>
