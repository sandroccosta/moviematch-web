<script setup>
import { ref, onMounted, computed } from 'vue'
import api from '@/services/api'
import MoviesCarousel from '@/components/MoviesCarousel.vue'
import MovieDetailsModal from '@/components/MovieDetailsModal.vue'

// Estado para controlar o modal
const isModalOpen = ref(false)
const selectedMovieData = ref(null)
const isLoadingDetails = ref(false)

// Estado para as recomendações
const recommendationsByGenre = ref({})
const isLoading = ref(true)
const error = ref(null)

const genresWithMovies = computed(() => {
  return Object.keys(recommendationsByGenre.value).filter(
    genre => recommendationsByGenre.value[genre].length > 0
  );
});

// Função para abrir o modal e buscar os detalhes do filme
const openMovieDetails = async (movie) => {
  isModalOpen.value = true
  isLoadingDetails.value = true
  try {
    const response = await api.get(`/filme?titulo=${encodeURIComponent(movie.titulo)}`)
    selectedMovieData.value = response.data
  } catch (err) {
    console.error("Erro ao buscar detalhes do filme:", err)
    selectedMovieData.value = { Title: movie.titulo, Year: movie.ano, Poster: movie.poster, Plot: 'Sinopse não encontrada.' }
  } finally {
    isLoadingDetails.value = false
  }
}

// Função para fechar o modal
const closeModal = () => {
  isModalOpen.value = false
  selectedMovieData.value = null
}

// Busca as recomendações iniciais quando a página carrega
onMounted(async () => {
  try {
    const response = await api.get('/recomendacoes')
    recommendationsByGenre.value = response.data.recomendacoes
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
        v-for="genre in genresWithMovies"
        :key="genre"
        :title="genre"
        :movies="recommendationsByGenre[genre]"
        @view-details="openMovieDetails"
      />
      <div v-if="genresWithMovies.length === 0" class="no-results">
        <p>Não encontramos recomendações para você no momento. Tente ajustar suas preferências!</p>
      </div>
    </div>

    <MovieDetailsModal
      v-if="isModalOpen"
      :movie="selectedMovieData"
      :is-loading="isLoadingDetails"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem 0;
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
