<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore' // Importa nossa store

// Instancia a store e o router
const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

// Transforma nossa função em assíncrona para poder usar 'await'
const handleLogin = async () => {
  try {
    // Chama a ação de login da store com as credenciais
    await authStore.login({
      email: email.value,
      senha: password.value
    })
    // Se o login for bem-sucedido, redireciona para o dashboard
    router.push('/dashboard')
  } catch (error) {
    // Se a store lançar um erro, nós o pegamos aqui
    alert('E-mail ou senha inválidos!') // Por enquanto, um alerta simples.
    console.error('Falha no login:', error)
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h2>Faça login</h2>

        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            v-model="email"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Sua senha"
            v-model="password"
            required
          />
        </div>

        <button type="submit">Entrar</button>

        <div class="signup-link">
          <RouterLink to="/register">Não tem conta? Inscreva-se</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* Ajuste a altura conforme necessário */
  background-color: #121212; /* Fundo escuro */
}

.login-container {
  padding: 2.5rem;
  background-color: #1e1e1e; /* Cor do container do formulário */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  color: #e0e0e0;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #ffffff;
}

.input-group {
  margin-bottom: 1.5rem;
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
  border-color: #4a90e2; /* Cor de destaque ao focar */
}

button {
  width: 100%;
  padding: 0.9rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #357abd;
}

.signup-link {
  text-align: center;
  margin-top: 1.5rem;
}

.signup-link a {
  color: #4a90e2;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
