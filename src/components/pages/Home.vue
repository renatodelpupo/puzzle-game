<template>
  <div class="app-home">
    <header class="app-header">
      <h1>Solve the puzzle</h1>
      <answer-box :rules="rules" />
    </header>
    <main class="app-main">
      <rule-list :rules="rules" />
    </main>
    <footer class="app-footer">
      <navigation
        :puzzleNumber="puzzleNumber"
        :rulesAmount="rulesAmount"
        @nextGame="nextGame()"
        @prevGame="prevGame()"
      />
    </footer>
  </div>
</template>

<script>
import rulesBase from '../../data/rules.json'
import AnswerBox from '../molecules/AnswerBox'
import Navigation from '../molecules/Navigation'
import RuleList from '../organisms/RuleList'

export default {
  name: 'Home',

  components: {
    AnswerBox,
    Navigation,
    RuleList
  },

  data: () => ({
    puzzleNumber: 1,
    success: null
  }),

  computed: {
    rules() {
      return rulesBase[this.puzzleNumber - 1]
    },

    rulesAmount() {
      return rulesBase.length
    }
  },

  methods: {
    nextGame() {
      if (this.puzzleNumber < this.rulesAmount) {
        this.puzzleNumber = this.puzzleNumber + 1
      }
    },

    prevGame() {
      if (this.puzzleNumber > 1) {
        this.puzzleNumber = this.puzzleNumber - 1
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
  font-size: 12px;
  margin: 0;
  padding: 0;
}

h1,
h2 {
  text-align: center;
}

h1 {
  font-size: 16px;
}

.app {

  &-header {
    background-color: #252525;
    padding: 10px 20px;
  }

  &-home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  &-main {
    flex: 1;
    overflow: hidden scroll;
  }
}
</style>
