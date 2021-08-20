<template>
  <div class="rule">
    <div class="rule-numbers">
      <span v-for="number in rule.numbers" class="rule-number" :key="number.toString()" v-text="number.toString()" />
    </div>
    <span class="rule-description" v-text="ruleDescription" />
  </div>
</template>

<script lang="ts">
import { RuleInterface } from '../../../types'
import { TranslateResult } from 'vue-i18n'
import Vue from 'vue'

export default Vue.extend({
  name: 'Rule',

  props: {
    rule: {
      required: true,
      type: Object as () => RuleInterface
    }
  },

  computed: {
    ruleDescription(): string {
      const descriptionNumbers: TranslateResult = this.$t(`correctNumbers[${this.rule.correctNumbers}]`) || ''
      let descriptionPositions: TranslateResult = ''

      if (this.rule.correctNumbers) {
        const allCorrectPositions = this.rule.correctPositions === this.rule.correctNumbers

        if (allCorrectPositions) {
          descriptionPositions = this.$t('correctPositions["all"]')
        } else {
          descriptionPositions = this.$t(`correctPositions[${this.rule.correctPositions}]`)
        }
      }

      return `${descriptionNumbers}${descriptionPositions}`
    }
  }
})
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
  },
  "pt": {
    "correctNumbers": {
      "0": "Nenhum número correto.",
      "1": "Um número correto",
      "2": "Dois números corretos",
      "3": "Três números corretos",
      "4": "Quatro números corretos"
    },
    "correctPositions": {
      "0": ", mas no lugar errado.",
      "1": ", mas só um no lugar certo.",
      "2": ", mas só dois no lugar certo.",
      "3": ", mas só três no lugar certo.",
      "all": " e no lugar certo."
    }
  }
}
</i18n>

<style lang="scss" scoped>
.rule {
  background-color: #252525;
  border-radius: 5px;
  display: grid;
  flex-direction: column;
  gap: 10px;
  grid-template-rows: auto 1fr;
  padding: 10px;

  &-description {
    line-height: 1.2;
    text-align: center;
  }

  &-number {
    background-color: #383838;
    border-radius: 5px;
    display: inline-flex;
    padding: 5px;
  }

  &-numbers {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, auto);
    justify-self: center;
  }
}
</style>
