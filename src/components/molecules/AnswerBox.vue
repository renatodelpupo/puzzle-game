<template>
  <div class="answer-box">
    <div class="answer-numbers">
      <div v-for="(number, index) in attempt" :key="index" class="answer-number-wrap">
        <div class="answer-up" @click="increase(index)"><span class="icon-arrow">❮</span></div>
        <div class="answer-number" v-text="number" />
        <div class="answer-down" @click="decrease(index)"><span class="icon-arrow">❯</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerBox',

  props: {
    rules: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    attempt: []
  }),

  watch: {
    attempt(value) {
      this.$emit('attempt', value)
    },

    rules() {
      this.mountInitialAttempt()
    }
  },

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
      this.attempt = []
      for (let i = 0; i < this.rules[0].numbers.length; i++) {
        this.attempt.push(0)
      }
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
    margin: 20px auto;
  }

  &-down,
  &-up {
    align-items: center;
    background-color: #383838;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    height: 25px;
    justify-content: center;;
    width: 75px;

    .icon-arrow {
      display: inline-block;
      font-size: 18px;
      font-style: normal;
      transform: rotate(90deg);
    }
  }

  &-down {
    margin-top: 10px;
  }

  &-number {
    align-items: center;
    background-color: #383838;
    border-radius: 5px;
    display: inline-flex;
    font-size: 36px;
    height: 50px;
    justify-content: center;
    margin: 5px 0;
    width: 75px;

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
      margin: 0 5px;
    }
  }

  &-numbers {
    display: flex;
  }

  &-up {
    margin-bottom: 10px;
  }
}
</style>
