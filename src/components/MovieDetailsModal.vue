<script setup>
import { computed } from 'vue';

const props = defineProps({
  movie: Object,      // Recebe os dados do filme
  isLoading: Boolean  // Recebe o estado de carregamento
});

// Emite um evento 'close' quando o modal precisa ser fechado
const emit = defineEmits(['close']);

// Cria a URL de busca do YouTube
const youtubeSearchUrl = computed(() => {
  if (!props.movie) return '#';
  const query = encodeURIComponent(`${props.movie.Title} ${props.movie.Year} trailer`);
  return `https://www.youtube.com/results?search_query=${query}`;
});
</script>

<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">&times;</button>

      <div v-if="isLoading" class="loading-spinner">Carregando...</div>

      <div v-else-if="movie" class="details-grid">
        <img :src="movie.Poster" :alt="`Pôster de ${movie.Title}`" class="poster">
        <div class="info">
          <h2>{{ movie.Title }}</h2>
          <div class="meta">
            <span>{{ movie.Year }}</span>
            <span>{{ movie.Rated }}</span>
            <span>{{ movie.Runtime }}</span>
          </div>
          <p class="plot">{{ movie.Plot }}</p>
          <div class="ratings">
            <div v-for="rating in movie.Ratings" :key="rating.Source">
              <strong>{{ rating.Source }}:</strong> {{ rating.Value }}
            </div>
          </div>
          <a :href="youtubeSearchUrl" target="_blank" class="trailer-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            Ver Trailer no YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para o modal, backdrop, etc. */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #181818;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  animation: fadeIn 0.3s ease;
}
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}
.details-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; }
.poster { width: 100%; border-radius: 4px; }
.info h2 { font-size: 2rem; margin-top: 0; }
.meta { display: flex; gap: 1rem; color: #888; margin-bottom: 1rem; }
.plot { line-height: 1.6; }
.ratings { font-size: 0.9rem; margin: 1.5rem 0; border-top: 1px solid #333; padding-top: 1rem; }
.trailer-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background-color: #fff; color: #141414; text-decoration: none;
  padding: 0.8rem 1.5rem; border-radius: 4px; font-weight: bold;
}
.trailer-btn svg { width: 24px; height: 24px; }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
</style>
