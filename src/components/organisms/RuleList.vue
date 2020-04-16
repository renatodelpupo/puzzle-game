<template>
  <div v-if="rules" class="rule-list">
    <rule-box v-for="rule in rules" :rule="rule" :key="rule.numbers.toString()" />
  </div>
</template>

<script>
import RuleBox from '../molecules/RuleBox'

export default {
  name: 'RuleList',

  components: {
    RuleBox
  },

  props: {
    rules: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden scroll;
  margin: 20px;
}
</style>
