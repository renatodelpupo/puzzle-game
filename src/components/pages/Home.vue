<template>
  <main>
    <h1>Solve the puzzle</h1>
    <rule-list />
  </main>
</template>

<script>
import RuleList from '../organisms/RuleList'

export default {
  name: 'Home',

  components: {
    RuleList
  }
}
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
  padding: 25px;
}

h1,
h2 {
  text-align: center;
}
</style>
