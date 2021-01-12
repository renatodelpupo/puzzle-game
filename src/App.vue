<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Home from './components/pages/Home.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: {
    Home
  },

  created() {
    this.$i18n.locale = navigator.language?.substring(0, 2)
  }
})
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #1e1e1e;
  color: #cccccc;
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
}
</style>
