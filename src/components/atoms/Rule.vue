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
        if (rule.correctNumbers === 0) return this.$t('correctNumbers0')
        if (rule.correctNumbers === 1) return this.$t('correctNumbers1')
        if (rule.correctNumbers === 2) return this.$t('correctNumbers2')
        if (rule.correctNumbers === 3) return this.$t('correctNumbers3')
        if (rule.correctNumbers === 4) return this.$t('correctNumbers4')

        return ''
      }

      const descriptionPositions = () => {
        if (!rule.correctNumbers) return ''
        if (rule.correctPositions === rule.correctNumbers) return this.$t('correctPositionsAll')
        if (rule.correctPositions === 0) return this.$t('correctPositions0')
        if (rule.correctPositions === 1) return this.$t('correctPositions1')
        if (rule.correctPositions === 2) return this.$t('correctPositions2')
        if (rule.correctPositions === 3) return this.$t('correctPositions3')

        return ''
      }

      return `${descriptionNumbers()}${descriptionPositions()}`
    }
  }
}
</script>

<i18n>
{
  "en": {
    "correctNumbers0": "No correct numbers.",
    "correctNumbers1": "One correct number",
    "correctNumbers2": "Two correct numbers",
    "correctNumbers3": "Three correct numbers",
    "correctNumbers4": "Four correct numbers",
    "correctPositions0": ", but in the wrong place.",
    "correctPositions1": ", but only one in the right place.",
    "correctPositions2": ", but only two in the right place.",
    "correctPositions3": ", but only three in the right place.",
    "correctPositionsAll": " and in the right place."
  }
}
</i18n>

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
