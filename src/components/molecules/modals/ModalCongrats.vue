<template>
  <modal
    class="ModalCongrats"
    :buttonText="buttonText"
    :icon="icon"
    :title="title"
    @buttonAction="restartGame"
  >
    <p>You finished the game.</p>
    <p>We're working for new levels.</p>
  </modal>
</template>

<script>
import Modal from '../../atoms/Modal'

export default {
  components: {
    Modal
  },

  data: () => ({
    buttonText: 'Restart',
    icon: '🎉',
    title: 'Congratulations!'
  }),

  methods: {
    restartGame() {
      this.$emit('restartGame')
    }
  }
}
</script>

<style lang="scss">
.ModalCongrats {
  background-color: #73c991;
  color: #fff;

  button {
    background-color: #4c8761;
  }
}
</style>
