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
/* O erro que eu cometi estava aqui. O correto é 'main {' e não 'main> {' */
main {
  padding: 2rem;
}
</style>
