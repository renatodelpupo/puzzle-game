<template>
  <div class="app-home">
    <header class="app-header">
      <h1>Solve it!</h1>
    </header>
    <main class="app-main">
      <Rules :rules="rules" />
      <Answer
        :rules="rules"
        :rulesLength="rulesLength"
        @attempt="attemptUpdate"
      />
    </main>
    <Footer
      :attempt="attempt"
      :correctAnswers="correctAnswers"
      :rules="rules"
      @correctAnswer="newCorrectAnswer"
      @nextGame="generateRules()"
    />
  </div>
</template>

<script lang="ts">
import { generateRules } from '../../services/PuzzleFactory'
import { Rule } from '../../../types'
import Answer from '../atoms/Answer.vue'
import Footer from '../organisms/Footer.vue'
import Rules from '../atoms/Rules.vue'

export default {
  name: 'Home',

  components: {
    Answer,
    Footer,
    Rules
  },

  data: () => ({
    attempt: [] as Array<number>,
    correctAnswers: 0 as number,
    rules: [] as Array<Rule>,
    rulesLength: 3
  }),

  computed: {
    persistedCorrectAnswers(): number {
      const persistedCorrectAnswers = localStorage.getItem('correctAnswers')
      return persistedCorrectAnswers ? Number(persistedCorrectAnswers) : 0
    },

    persistedRules(): Array<Rule> {
      const persistedRules = localStorage.getItem('currentRules')
      const persistedRulesObject = persistedRules ? JSON.parse(persistedRules) : null
      return persistedRulesObject
    }
  },

  watch: {
    correctAnswers(value: number) {
      if (value > this.persistedCorrectAnswers) localStorage.setItem('correctAnswers', value.toString())
    }
  },

  mounted() {
    this.checkPersistedCorrectAnswers()
    this.setInitialRules()
  },

  methods: {
    attemptUpdate(value: Array<number>) {
      this.attempt = value
    },

    checkPersistedCorrectAnswers() {
      if (this.persistedCorrectAnswers > this.correctAnswers) {
        this.correctAnswers = this.persistedCorrectAnswers
      }
    },

    generateRules() {
      const newRules = generateRules(this.rulesLength)
      this.rules = newRules
      localStorage.setItem('currentRules', JSON.stringify(newRules))
    },

    newCorrectAnswer() {
      this.correctAnswers = this.correctAnswers + 1
    },

    setInitialRules() {
      this.persistedRules ? this.rules = this.persistedRules : this.generateRules()
    }
  }
}
</script>

<style lang="scss">
.app {

  &-header {
    background-color: #383838;
    color: #ccc;
    font-size: 18px;
    padding: 10px 20px;

    h1 {
      font-size: 18px;
      margin: 0;
      text-align: center;
    }
  }

  &-home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  &-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden auto;
  }
}
</style>
