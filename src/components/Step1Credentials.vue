<script setup>
// Este componente declara que espera receber um objeto 'formData' do seu componente pai.
defineProps({
  formData: Object
})
</script>

<template>
  <div class="form-step">
    <h3>Passo 1: Suas Credenciais</h3>

    <div class="input-group">
      <label for="nome">Nome Completo</label>
      <input id="nome" type="text" v-model="formData.nome" required />
    </div>

    <div class="input-group">
      <label for="email">E-mail</label>
      <input id="email" type="email" v-model="formData.email" required />
    </div>

    <div class="input-group">
      <label for="login">Login (Apelido)</label>
      <input id="login" type="text" v-model="formData.login" required />
    </div>

    <div class="input-group">
      <label for="senha">Senha</label>
      <input id="senha" type="password" v-model="formData.senha" required />
    </div>
  </div>
</template>

<style scoped>
/* Reutilizamos os mesmos estilos do formulário de login para consistência */
.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #a0a0a0;
}

input {
  width: 100%;
  padding: 0.8rem;
  background-color: #2b2b2b;
  border: 1px solid #444;
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #4a90e2;
}
</style>
