<template>
  <div class="app-home">
    <header class="app-header">
      <h1>Solve the puzzle</h1>
    </header>
    <main class="app-main">
      <rule-list :rules="rules" />
      <answer-box
        :rules="rules"
        @attempt="attemptUpdate"
      />
    </main>
    <Footer
      :attempt="attempt"
      :puzzleNumber="puzzleNumber"
      :rules="rules"
      :rulesAmount="rulesAmount"
      @nextGame="nextGame()"
    />
  </div>
</template>

<script>
import rulesBase from '../../data/rules.json'
import AnswerBox from '../molecules/AnswerBox'
import Footer from '../templates/Footer'
import RuleList from '../organisms/RuleList'

export default {
  name: 'Home',

  components: {
    AnswerBox,
    Footer,
    RuleList
  },

  data: () => ({
    attempt: [],
    puzzleNumber: 1
  }),

  computed: {
    persistedPuzzleNumber() {
      const persistedPuzzleNumber = localStorage.getItem('puzzleNumber')
      return persistedPuzzleNumber ? Number(persistedPuzzleNumber) : 1
    },

    rules() {
      return rulesBase[this.puzzleNumber - 1]
    },

    rulesAmount() {
      return rulesBase.length
    }
  },

  watch: {
    puzzleNumber(value) {
      if (value > this.persistedPuzzleNumber) localStorage.setItem('puzzleNumber', value)
    }
  },

  mounted() {
    this.checkPersistedPuzzleNumber()
  },

  methods: {
    attemptUpdate(value) {
      this.attempt = value
    },

    checkPersistedPuzzleNumber() {
      if (this.persistedPuzzleNumber > this.puzzleNumber) this.puzzleNumber = this.persistedPuzzleNumber
    },

    nextGame() {
      if (this.puzzleNumber < this.rulesAmount) {
        this.puzzleNumber = this.puzzleNumber + 1
      }
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: #1e1e1e;
  color: #cccccc;
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

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
    overflow: hidden scroll;
  }
}
</style>
