<script setup>
import SignupWizard from '@/components/SignupWizard.vue'
</script>

<template>
  <div class="register-page">
    <h2>Crie sua Conta</h2 >
    <p>Vamos encontrar o filme perfeito para você!</p>

    <SignupWizard />
  </div>
</template>

<style scoped>
/* Estilos existentes */
.register-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #e0e0e0;
}

h2 {
  margin-bottom: 0.5rem;
  color: #121212;
}

p {
  margin-bottom: 2rem;
  color: #a0a0a0;
}
</style>
