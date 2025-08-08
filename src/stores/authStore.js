import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('authToken'))

  async function login(credentials) {
    // ... (código de login existente, não precisa mexer)
    try {
      const response = await api.post('/auth/login', credentials)
      const newToken = response.data.token
      token.value = newToken
      localStorage.setItem('authToken', newToken)
      console.log('Login bem-sucedido, token salvo!')
    } catch (error) {
      console.error('Erro no login:', error.response.data)
      throw error
    }
  }

  // ===== NOVA FUNÇÃO DE LOGOUT =====
  function logout() {
    token.value = null
    localStorage.removeItem('authToken')
    console.log('Logout realizado, token removido!')
  }

  // Adicione a nova função no retorno
  return { token, login, logout }
})
