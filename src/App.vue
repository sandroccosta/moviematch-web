<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>
</template>


<style scoped>
main {
  padding: 2rem;
}
</style>

<style>
body {
  background-color: #141414; /* Tom de preto da Netflix */
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
