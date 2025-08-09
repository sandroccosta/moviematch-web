<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import MoviesCarousel from '@/components/MoviesCarousel.vue' // Importamos nosso novo componente

const recommendations = ref([])
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await api.get('/recomendacoes')
    recommendations.value = response.data.recomendacoes
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
    <div v-if="isLoading" class="loading">Carregando...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <MoviesCarousel
      v-else-if="recommendations.length > 0"
      title="Suas Recomendações"
      :movies="recommendations"
    />

    <div v-else class="no-results">
      <p>Não encontramos recomendações para você no momento.</p>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}
.loading, .error, .no-results {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: #a0a0a0;
}
.error {
  color: #e63946;
}
</style>
