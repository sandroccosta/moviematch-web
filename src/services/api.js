import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// Adicionando o Interceptor
api.interceptors.request.use(
  (config) => {
    // Instancia a store DENTRO do interceptor
    const authStore = useAuthStore()
    const token = authStore.token

    if (token) {
      // Se o token existir, adiciona o cabeçalho de autorização
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // Em caso de erro na requisição, rejeita a promise
    return Promise.reject(error)
  }
)

export default api
