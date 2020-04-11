<template>
  <div class="app-home">
    <header class="app-header">
      <h1>Solve the puzzle</h1>
      <answer-box :rules="rules" />
    </header>
    <main class="app-main">
      <rule-list :rules="rules" />
    </main>
  </div>
</template>

<script>
import AnswerBox from '../molecules/AnswerBox'
import RuleList from '../organisms/RuleList'

export default {
  name: 'Home',

  components: {
    AnswerBox,
    RuleList
  },

  data: () => ({
    rules: [
      {
        correctNumbers: 2,
        correctPositions: 1,
        numbers: [5, 2, 6, 9]
      },
      {
        correctNumbers: 1,
        correctPositions: 0,
        numbers: [9, 7, 4, 5]
      },
      {
        correctNumbers: 3,
        correctPositions: 0,
        numbers: [2, 1, 7, 3]
      },
      {
        correctNumbers: 1,
        correctPositions: 1,
        numbers: [1, 4, 8, 7]
      },
      {
        correctNumbers: 2,
        correctPositions: 0,
        numbers: [7, 3, 8, 1]
      },
      {
        correctNumbers: 1,
        correctPositions: 1,
        numbers: [9, 2, 1, 8]
      },
      {
        correctNumbers: 2,
        correctPositions: 0,
        numbers: [4, 6, 7, 9]
      }
    ],
    success: null
  })
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
    max-height: 100vh;
    overflow: hidden;
  }

  &-main {
    overflow: hidden scroll;
  }
}
</style>
