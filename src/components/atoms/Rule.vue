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
        return this.$t(`correctNumbers[${rule.correctNumbers}]`) || ''
      }

      const descriptionPositions = () => {
        if (!rule.correctNumbers) return ''
        if (rule.correctPositions === rule.correctNumbers) return this.$t('correctPositions["all"]')

        return this.$t(`correctPositions[${rule.correctPositions}]`) || ''
      }

      return `${descriptionNumbers()}${descriptionPositions()}`
    }
  }
}
</script>

<i18n>
{
  "en": {
    "correctNumbers": {
      "0": "No correct numbers.",
      "1": "One correct number",
      "2": "Two correct numbers",
      "3": "Three correct numbers",
      "4": "Four correct numbers"
    },
    "correctPositions": {
      "0": ", but in the wrong place.",
      "1": ", but only one in the right place.",
      "2": ", but only two in the right place.",
      "3": ", but only three in the right place.",
      "all": " and in the right place."
    }
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
