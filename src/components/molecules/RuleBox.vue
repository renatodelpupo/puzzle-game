<template>
  <div class="rule-box">
    <div class="rule-number-wrap">
      <span
        v-for="number in rule.numbers"
        :key="number.toString()"
        class="rule-number"
        v-text="number"
      />
    </div>
    <span class="rule-description" v-text="description" />
  </div>
</template>

<script>
export default {
  name: 'RuleBox',

  props: {
    rule: {
      required: true,
      type: Object
    }
  },

  computed: {
    description() {
      return `${this.descriptionNumbers}${this.descriptionPositions}`
    },

    descriptionNumbers() {
      if (this.rule.correctNumbers === 0) return 'Nothing is correct'
      if (this.rule.correctNumbers === 1) return 'One number is correct'
      if (this.rule.correctNumbers === 2) return 'Two numbers are correct'
      if (this.rule.correctNumbers === 3) return 'Three numbers are correct'
      if (this.rule.correctNumbers === 4) return 'Four numbers are correct'
      return ''
    },

    descriptionPositions() {
      if (!this.rule.correctNumbers) return ''
      if (this.rule.correctPositions === 0) return ', but wrong placed'
      if (this.rule.correctNumbers === this.rule.correctPositions) return ' and well placed'

      if (this.rule.correctPositions === 1) return '. One number well placed'
      if (this.rule.correctPositions === 2) return '. Two numbers well placed'
      if (this.rule.correctPositions === 3) return '. Three numbers well placed'
      if (this.rule.correctPositions === 3) return '. Four numbers well placed'

      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rule {
  &-box {
    align-items: center;
    background-color: #252525;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    padding: 10px;
    width: calc(50% - 5px);
  }

  &-description {
    line-height: 1.2;
    text-align: center;
  }

  &-number {
    background-color: #383838;
    border-radius: 5px;
    display: inline-flex;
    margin: 0 5px;
    padding: 5px 6px 3px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &-wrap {
      display: flex;
      margin-bottom: 10px;
    }
  }
}
</style>
