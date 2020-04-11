<template>
  <div>
    <div class="rule-list">
      <rule-box v-for="rule in rules" :rule="rule" :key="rule.numbers.toString()" />
    </div>
  </div>
</template>

<script>
import RuleBox from '../molecules/RuleBox'

export default {
  name: 'RuleList',

  components: {
    RuleBox
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

<style lang="scss" scoped>
.rule-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
}
</style>
