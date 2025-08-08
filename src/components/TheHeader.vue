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
    <h1>MovieMatch</h1>
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
  align-items: center;
}

button {
  background-color: #e63946; /* Um vermelho para destaque */
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #d62828;
}
</style>
