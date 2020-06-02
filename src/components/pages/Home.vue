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
      @nextGame="nextGame()"
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
    nextRules: [] as Array<Rule>,
    rules: [] as Array<Rule>,
    rulesLength: 3
  }),

  computed: {
    persistedCorrectAnswers(): number {
      const persistedCorrectAnswers = localStorage.getItem('correctAnswers')
      return persistedCorrectAnswers ? Number(persistedCorrectAnswers) : 0
    },

    persistedNextRules(): Array<Rule> {
      const persistedNextRules = localStorage.getItem('nextRules')
      const persistedNextRulesObject = persistedNextRules ? JSON.parse(persistedNextRules) : null
      return persistedNextRulesObject
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

    generateNextRules() {
      this.nextRules = generateRules(this.rulesLength)
      localStorage.setItem('nextRules', JSON.stringify(this.nextRules))
    },

    nextGame() {
      this.rules = this.nextRules
      localStorage.setItem('currentRules', JSON.stringify(this.rules))

      this.generateNextRules()
    },

    newCorrectAnswer() {
      this.correctAnswers = this.correctAnswers + 1
    },

    setInitialRules() {
      this.persistedRules ? this.rules = this.persistedRules : generateRules(this.rulesLength)
      this.persistedNextRules ? this.nextRules = this.persistedNextRules : generateRules(this.rulesLength)
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
