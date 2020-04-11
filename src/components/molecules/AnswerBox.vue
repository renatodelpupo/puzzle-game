<template>
  <div>
    <div class="answer-box">
      <div class="answer-numbers">
        <div v-for="(number, index) in attempt" :key="index" class="answer-number-wrap">
          <span class="answer-up" @click="increase(index)">❮</span>
          <span class="answer-number" v-text="number" />
          <span class="answer-down" @click="decrease(index)">❯</span>
        </div>
      </div>
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
    attempt: [],
    feedbackMessages: [],
    success: null
  }),

  mounted() {
    this.mountInitialAttempt()
  },

  methods: {
    decrease(index) {
      this.attempt[index] > 0
        ? this.$set(this.attempt, index, this.attempt[index] - 1)
        : this.$set(this.attempt, index, 9)
    },

    increase(index) {
      this.attempt[index] < 9
        ? this.$set(this.attempt, index, this.attempt[index] + 1)
        : this.$set(this.attempt, index, 0)
    },

    mountInitialAttempt() {
      for (let i = 0; i < this.rules[0].numbers.length; i++) {
        this.attempt.push(0)
      }
    },

    test() {
      let hasError = false
      this.feedbackMessages = []

      this.rules.forEach((rule, index) => {
        const numbers = rule.numbers
        const ruleId = index + 1

        const verifyNumbers = this.attempt.filter(attemptItem => numbers.includes(attemptItem))
        const verifyPositions = this.attempt.filter((attemptItem, attemptIndex) => {
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
      setTimeout(() => {
        this.answered = false
      }, 3000)
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
    margin: 0 auto 10px;
  }

  &-button {
    background: #007acc;
    border: none;
    color: #ffffff;
    font-size: 14px;
    padding: 5px 10px;
    text-shadow: none;
  }

  &-down,
  &-up {
    cursor: pointer;
    transform: rotate(90deg);
  }

  &-number {
    background-color: #383838;
    border-radius: 5px;
    display: inline-flex;
    margin: 5px 10px;
    padding: 10px 12px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &-wrap {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
  }

  &-numbers {
    display: flex;
  }
}
</style>
