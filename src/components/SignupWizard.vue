<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router' // Para redirecionar o usuário
import api from '@/services/api' // Nosso serviço Axios para chamar a API

// Componentes das etapas
import Step1Credentials from './Step1Credentials.vue'
import Step2Genres from './Step2Genres.vue'
import Step3Duration from './Step3Duration.vue'
import Step4Frequency from './Step4Frequency.vue'

// Instancia o router
const router = useRouter()

// Controla qual etapa está visível
const currentStep = ref(1)

// Objeto reativo para guardar todos os dados do formulário
const formData = reactive({
  nome: '',
  email: '',
  login: '',
  senha: '',
  generos_favoritos: [],
  duracao_preferida: '',
  frequencia_assistir_filmes: ''
})

// Funções para navegar entre as etapas
const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// ===== FUNÇÃO DE SUBMISSÃO ATUALIZADA =====
const submitForm = async () => {
  try {
    console.log('Enviando dados para a API:', formData)
    // Faz a requisição POST para a rota de registro da API
    await api.post('/auth/register', formData)

    // Se a requisição for bem-sucedida
    alert('Conta criada com sucesso! Você será redirecionado para a tela de login.')
    router.push('/login') // Redireciona para a página de login

  } catch (error) {
    // Se a API retornar um erro (ex: e-mail já existe)
    console.error('Erro no registro:', error.response.data)
    // Exibe a mensagem de erro que veio da API
    alert(`Ocorreu um erro: ${error.response.data.error || 'Tente novamente.'}`)
  }
}
</script>

<template>
  <div class="wizard-container">
    <div v-if="currentStep === 1">
      <Step1Credentials :formData="formData" />
    </div>

    <div v-if="currentStep === 2">
      <Step2Genres :formData="formData" />
    </div>

    <div v-if="currentStep === 3">
      <Step3Duration :formData="formData" />
    </div>

    <div v-if="currentStep === 4">
      <Step4Frequency :formData="formData" />
    </div>

    <div class="navigation-buttons">
      <button v-if="currentStep > 1" @click="prevStep">Voltar</button>
      <button v-if="currentStep < 4" @click="nextStep">Próxima</button>
      <button v-if="currentStep === 4" @click="submitForm">Concluir</button>
    </div>
  </div>
</template>

<style scoped>
.wizard-container {
  padding: 2.5rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
  color: #e0e0e0;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:first-of-type {
  background-color: #555;
  color: white;
}

button:last-of-type {
  background-color: #4a90e2;
  color: white;
}
</style>
