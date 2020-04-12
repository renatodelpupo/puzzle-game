<template>
  <footer class="app-footer">
    <div v-if="status === 'success'" class="app-footer-success">
      <div class="col-70">Correct 🎉</div>
      <div v-if="gameEnded" class="col-30">The end</div>
      <div v-else class="col-30" @click="next()">Next <span class="icon-arrow">❯</span></div>
    </div>
    <div v-else-if="status === 'failure'" class="app-footer-failure">
      <div class="col-100">Wrong 😟</div>
    </div>
    <div v-else class="app-footer-default">
      <div class="col-70">Puzzle {{ puzzleNumber }}</div>
      <div class="col-30" @click="test()">Submit <span class="icon-arrow">❯</span></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  props: {
    attempt: {
      required: true,
      type: Array
    },

    gameEnded: {
      required: true,
      type: Boolean
    },

    puzzleNumber: {
      required: true,
      type: Number
    },

    rules: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    feedbackMessages: [],
    status: 'default'
  }),

  watch: {
    gameEnded(value) {
      if (value) this.status = 'default'
    }
  },

  methods: {
    next() {
      this.$emit('nextGame')
      this.status = 'default'
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

      if (hasError) {
        this.status = 'failure'
        setTimeout(() => { this.status = 'default' }, 2000)
      } else {
        this.status = 'success'
        this.$emit('correctAnswer')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  display: flex;

  &-default,
  &-failure,
  &-success {
    color: #ffffff;
    display: flex;
    height: 40px;
    text-transform: uppercase;
    width: 100%;

    .col-30,
    .col-70,
    .col-100 {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 15px 0;
    }
  }

  &-default {

    .col-30 {
      background-color: #252525;
    }

    .col-70 {
      background-color: #383838;
    }
  }

  &-failure {
    background-color: #e17833;
  }

  &-success {

    .col-30 {
      background-color: #4c8761;
    }

    .col-70 {
      background-color: #73c991;
    }
  }

  .col-30 {
    cursor: pointer;
    width: 30%;
  }

  .col-70 {
    width: 70%;
  }

  .col-100 {
    width: 100%;
  }

  .icon-arrow {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
