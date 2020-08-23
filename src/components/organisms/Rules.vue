<template>
  <div v-if="rules" class="rules">
    <rule v-for="rule in rules" :key="setKey(rule)" :rule="rule" />
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
      type: Array as () => Array<RuleInterface>
    }
  },

  methods: {
    setKey(rule: RuleInterface) {
      return rule.numbers.toString().replace(/,/g, '')
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
