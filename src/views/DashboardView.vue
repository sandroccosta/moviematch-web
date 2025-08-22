<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import MoviesCarousel from '@/components/MoviesCarousel.vue'

// O estado inicial agora é um objeto, não um array
const recommendationsByGenre = ref({})
const isLoading = ref(true)
const error = ref(null)

// Pega a lista de chaves (os nomes dos gêneros) do nosso objeto
const genres = ref([])

onMounted(async () => {
  try {
    const response = await api.get('/recomendacoes')
    recommendationsByGenre.value = response.data.recomendacoes
    genres.value = Object.keys(response.data.recomendacoes) // Ex: ['Ação', 'Romance', 'Terror']

    console.log('Recomendações recebidas por gênero:', recommendationsByGenre.value)
  } catch (err) {
    console.error('Erro ao buscar recomendações:', err)
    error.value = 'Não foi possível carregar as recomendações.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="dashboard">
    <div v-if="isLoading" class="loading">Carregando suas recomendações...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else>
      <MoviesCarousel
        v-for="genre in genres"
        :key="genre"
        :title="genre"
        :movies="recommendationsByGenre[genre]"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem 2rem; /* Adiciona mais espaçamento lateral */
}
.loading, .error {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: #a0a0a0;
}
.error {
  color: #e63946;
}
</style>
