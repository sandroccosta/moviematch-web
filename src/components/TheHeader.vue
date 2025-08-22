<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <header>
    <img src="@/assets/logo-moviematch.png" alt="MovieMatch Logo" class="logo" />

    <nav v-if="authStore.token">
      <button @click="handleLogout">Sair</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Garante que o logo e o botão fiquem alinhados verticalmente */
}

/* Novo estilo para o logo */
.logo {
  height: 130px; /* Você pode ajustar o tamanho do logo aqui */
  width: auto;
}

button {
  background-color: #e50914; /* Cor Netflix */
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #f6121d;
}
</style>
