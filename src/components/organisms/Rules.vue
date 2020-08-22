<template>
  <div v-if="rules" class="rules">
    <rule v-for="(rule, index) in rules" :key="setKey(index, rule)" :rule="rule" />
  </div>
</template>

<script lang="ts">
import Rule from '../atoms/Rule.vue'
import { RuleInterface } from '../../../types'
import Vue from 'vue'

export default Vue.extend({
  name: 'Rules',

  components: { Rule },

  props: {
    rules: {
      required: true,
      type: Array
    }
  },

  methods: {
    setKey(index: number, rule: RuleInterface) {
      return rule.numbers.toString().replace(/,/g, '') + index
    }
  }
})
</script>

<style lang="scss" scoped>
.rules {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden auto;
  margin: 20px;
}
</style>
