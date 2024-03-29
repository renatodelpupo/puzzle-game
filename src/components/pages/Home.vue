<template>
  <div class="app-home">
    <header class="app-header">
      <h1>Solve it!</h1>
    </header>
    <main class="app-main">
      <Rules :rules="currentRules" />
      <Answer :rules="currentRules" :rulesLength="rulesLength" @attempt="attemptUpdate" />
    </main>
    <Footer
      :attempt="attempt"
      :correctAnswers="correctAnswers"
      :rules="currentRules"
      @correctAnswer="newCorrectAnswer"
      @nextGame="nextGame()"
    />
  </div>
</template>

<script lang="ts">
import { createRules } from '../../services/PuzzleFactory'
import { RuleInterface } from '../../../types'
import Answer from '../atoms/Answer.vue'
import Footer from '../organisms/Footer.vue'
import Rules from '../organisms/Rules.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  components: {
    Answer,
    Footer,
    Rules
  },

  data: () => ({
    attempt: [] as Array<number>,
    correctAnswers: 0 as number,
    currentRules: [] as Array<RuleInterface>,
    nextRules: [] as Array<RuleInterface>,
    rulesLength: 3 as number,
    rulesQuantity: 6 as number
  }),

  computed: {
    persistedCorrectAnswers(): number {
      const persistedCorrectAnswers = localStorage.getItem('correctAnswers')
      return persistedCorrectAnswers ? Number(persistedCorrectAnswers) : 0
    },

    persistedCurrentRules(): Array<RuleInterface> {
      const persistedCurrentRules = localStorage.getItem('currentRules')
      const persistedRulesObject = persistedCurrentRules ? JSON.parse(persistedCurrentRules) : null
      return persistedRulesObject
    },

    persistedNextRules(): Array<RuleInterface> {
      const persistedNextRules = localStorage.getItem('nextRules')
      const persistedNextRulesObject = persistedNextRules ? JSON.parse(persistedNextRules) : null
      return persistedNextRulesObject
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
      this.nextRules = this.createRules()
      localStorage.setItem('nextRules', JSON.stringify(this.nextRules))
    },

    createRules() {
      return createRules(this.rulesLength, this.rulesQuantity)
    },

    nextGame() {
      this.currentRules = this.nextRules
      localStorage.setItem('currentRules', JSON.stringify(this.currentRules))

      this.generateNextRules()
    },

    newCorrectAnswer() {
      this.correctAnswers = this.correctAnswers + 1
    },

    setInitialRules() {
      if (this.persistedCurrentRules) {
        this.currentRules = this.persistedCurrentRules
      } else {
        this.currentRules = this.createRules()
        localStorage.setItem('currentRules', JSON.stringify(this.currentRules))
      }

      if (this.persistedNextRules) {
        this.nextRules = this.persistedNextRules
      } else {
        this.nextRules = this.createRules()
        localStorage.setItem('nextRules', JSON.stringify(this.nextRules))
      }
    }
  }
})
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
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    overflow: hidden;
  }

  &-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden auto;
    padding: 20px;
  }
}
</style>
