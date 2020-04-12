<template>
  <div class="Modal">
    <h2>
      {{ title }}
      <span v-if="icon" class="icon" v-text="icon" />
    </h2>
    <slot />
    <button @click="buttonAction()" v-text="buttonText" />
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      required: true,
      type: String
    },

    icon: {
      required: false
    },

    title: {
      required: true,
      type: String
    }
  },

  methods: {
    buttonAction() {
      this.$emit('buttonAction')
    }
  }
}
</script>

<style lang="scss" scoped>
.Modal {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  line-height: 1.5;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100vw;
  z-index: 2;

  button {
    border-radius: 5px;
    margin-top: 10vh;
    padding: 10px 15px;
    text-transform: uppercase;
  }

  h2 {
    margin: 20vh auto 40px;
  }

  p {
    margin: 0;
  }

  .icon {
    display: block;
  }
}
</style>
