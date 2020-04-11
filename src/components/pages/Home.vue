<template>
  <main>
    <h1>Solve the puzzle</h1>
    <rule-list :rules="rules" />
    <answer-box :rules="rules" />
  </main>
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
        correctNumbers: 1,
        correctPositions: 1,
        numbers: [2, 8, 9]
      },
      {
        correctNumbers: 1,
        correctPositions: 0,
        numbers: [2, 1, 5]
      },
      {
        correctNumbers: 2,
        correctPositions: 0,
        numbers: [9, 4, 2]
      },
      {
        correctNumbers: 0,
        correctPositions: 0,
        numbers: [7, 3, 8]
      },
      {
        correctNumbers: 1,
        correctPositions: 0,
        numbers: [7, 8, 4]
      }
    ]
  })
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #1e1e1e;
  color: #cccccc;
  font-family: sans-serif;
  font-size: 14px;
  padding: 25px;
}

h1,
h2 {
  text-align: center;
}
</style>
