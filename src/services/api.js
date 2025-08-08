import axios from 'axios'

// Cria uma instância do Axios com configurações pré-definidas
const api = axios.create({
  // Lê a URL base do nosso arquivo .env
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export default api
