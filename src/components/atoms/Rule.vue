<template>
  <div class="rule">
    <div class="rule-numbers">
      <span v-for="number in rule.numbers" class="rule-number" :key="number.toString()" v-text="number.toString()" />
    </div>
    <span class="rule-description" v-text="setDescription(rule)" />
  </div>
</template>

<script lang="ts">
import { RuleInterface } from '../../../types'

export default {
  name: 'Rule',

  props: {
    rule: {
      required: true,
      type: Object as () => RuleInterface
    }
  },

  methods: {
    setDescription(rule: RuleInterface): string {
      const descriptionNumbers = () => {
        if (rule.correctNumbers === 0) return 'No correct numbers.'
        if (rule.correctNumbers === 1) return 'One correct number'
        if (rule.correctNumbers === 2) return 'Two correct numbers'
        if (rule.correctNumbers === 3) return 'Three correct numbers'
        if (rule.correctNumbers === 4) return 'Four correct numbers'

        return ''
      }

      const descriptionPositions = () => {
        if (!rule.correctNumbers) return ''
        if (rule.correctPositions === rule.correctNumbers) return ' and in the right place.'
        if (rule.correctPositions === 0) return ', but in the wrong place.'
        if (rule.correctPositions === 1) return ', but only one in the right place.'
        if (rule.correctPositions === 2) return ', but only two in the right place.'
        if (rule.correctPositions === 3) return ', but only three in the right place.'

        return ''
      }

      return `${descriptionNumbers()}${descriptionPositions()}`
    }
  }
}
</script>

<style lang="scss" scoped>
.rule {
  align-items: center;
  background-color: #252525;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px;
  width: calc(50% - 5px);

  &-description {
    line-height: 1.2;
    text-align: center;
  }

  &-number {
    background-color: #383838;
    border-radius: 5px;
    display: inline-flex;
    margin: 0 5px;
    padding: 5px 6px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &-numbers {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
