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
      <modal-congrats
        v-if="gameEnded"
        @restartGame="restartGame"
      />
    </main>
    <Footer
      :attempt="attempt"
      :gameEnded="gameEnded"
      :puzzleNumber="puzzleNumber"
      :rules="rules"
      @correctAnswer="newCorrectAnswer"
      @nextGame="nextGame()"
    />
  </div>
</template>

<script>
import rulesBase from '../../data/rules.json'
import AnswerBox from '../molecules/AnswerBox'
import Footer from '../templates/Footer'
import ModalCongrats from '../molecules/modals/ModalCongrats'
import RuleList from '../organisms/RuleList'

export default {
  name: 'Home',

  components: {
    AnswerBox,
    Footer,
    ModalCongrats,
    RuleList
  },

  data: () => ({
    attempt: [],
    correctAnswers: 0,
    puzzleNumber: 1
  }),

  computed: {
    gameEnded() {
      return this.correctAnswers === this.rulesAmount
    },

    persistedCorrectAnswers() {
      const persistedCorrectAnswers = localStorage.getItem('correctAnswers')
      return persistedCorrectAnswers ? Number(persistedCorrectAnswers) : 0
    },

    rules() {
      return rulesBase[this.puzzleNumber - 1]
    },

    rulesAmount() {
      return rulesBase.length
    }
  },

  watch: {
    correctAnswers(value) {
      if (value > this.persistedCorrectAnswers) localStorage.setItem('correctAnswers', value)
    }
  },

  mounted() {
    this.checkPersistedCorrectAnswers()
  },

  methods: {
    attemptUpdate(value) {
      this.attempt = value
    },

    checkPersistedCorrectAnswers() {
      if (this.persistedCorrectAnswers > this.correctAnswers) {
        this.correctAnswers = this.persistedCorrectAnswers
        this.puzzleNumber = this.correctAnswers + 1
      }
    },

    newCorrectAnswer() {
      this.correctAnswers = this.correctAnswers + 1
    },

    nextGame() {
      if (this.puzzleNumber < this.rulesAmount) {
        this.puzzleNumber = this.puzzleNumber + 1
      }
    },

    restartGame() {
      this.correctAnswers = 0
      this.puzzleNumber = 1
      localStorage.setItem('correctAnswers', 0)
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
    overflow: hidden scroll;
  }
}
</style>
