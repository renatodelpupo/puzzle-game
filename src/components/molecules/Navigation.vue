<template>
  <div class="navigation">
    <div class="navigation-prev" @click="prev()" :disabled="prevDisabled">❮</div>
    <div class="navigation-number">Puzzle {{ puzzleNumber }}</div>
    <div class="navigation-next" @click="next()" :disabled="nextDisabled">❯</div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  props: {
    puzzleNumber: {
      required: true,
      type: Number
    },

    rulesAmount: {
      required: true,
      type: Number
    }
  },

  data: () => ({
    loading: false
  }),

  computed: {
    nextDisabled() {
      return this.loading || this.puzzleNumber === this.rulesAmount
    },

    prevDisabled() {
      return this.loading || this.puzzleNumber === 1
    }
  },

  methods: {
    loadingSafeTimeout() {
      this.loading = true
      setTimeout(() => { this.loading = false }, 2000)
    },

    next() {
      if (!this.nextDisabled) {
        this.$emit('nextGame')
        this.loadingSafeTimeout()
      }
    },

    prev() {
      if (!this.prevDisabled) {
        this.$emit('prevGame')
        this.loadingSafeTimeout()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  align-items: center;
  background-color: #252525;
  display: flex;
  justify-content: center;
  padding: 10px 20px;

  &-next,
  &-prev {
    cursor: pointer;
    font-size: 16px;
  }

  &-number {
    font-size: 14px;
    font-weight: bold;
    margin: 0 15px;
  }
}
</style>
