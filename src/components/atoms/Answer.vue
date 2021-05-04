<template>
  <div class="answer-box">
    <ul class="answer-numbers">
      <li v-for="(number, index) in attempt" :key="index" class="answer-number-wrap">
        <button class="answer-up" @click="increase(index)"><span class="icon-arrow">❮</span></button>
        <div class="answer-number" v-text="number" />
        <button class="answer-down" @click="decrease(index)"><span class="icon-arrow">❯</span></button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { RuleInterface } from '../../../types'
import Vue from 'vue'

export default Vue.extend({
  name: 'Answer',

  props: {
    rules: {
      required: true,
      type: Array as () => Array<RuleInterface>
    },

    rulesLength: {
      required: true,
      type: Number
    }
  },

  data: () => ({
    attempt: [] as Array<number>
  }),

  watch: {
    attempt(value: Array<number>) {
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
    decrease(index: number) {
      this.attempt[index] > 0
        ? this.$set(this.attempt, index, this.attempt[index] - 1)
        : this.$set(this.attempt, index, 9)
    },

    increase(index: number) {
      this.attempt[index] < 9
        ? this.$set(this.attempt, index, this.attempt[index] + 1)
        : this.$set(this.attempt, index, 0)
    },

    mountInitialAttempt() {
      this.attempt = Array(this.rulesLength).fill(0)
    }
  }
})
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
    justify-content: center;
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
