<template>
  <div class="feedback-box">
    <span v-if="success" class="feedback-flag feedback-flag-success">Correct!</span>
    <span v-else class="feedback-flag feedback-flag-failure">Wrong!</span>
  </div>
</template>

<script>
export default {
  name: 'FeedbackBox',

  props: {
    success: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  &-box {
    display: flex;
    justify-content: center;
  }

  &-flag {
    color: #ffffff;
    padding: 10px 40px;
    text-align: center;
    width: 100%;

    &-failure {
      background-color: #e17833;
    }

    &-success {
      background-color: #73c991;
    }
  }
}
</style>
