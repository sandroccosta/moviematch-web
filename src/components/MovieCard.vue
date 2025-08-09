<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

// Alguns filmes na OMDb não têm pôster e retornam "N/A".
// Esta função garante que, se não houver pôster, exibimos uma imagem genérica.
const posterSrc = computed(() => {
  if (props.movie.poster && props.movie.poster !== 'N/A') {
    return props.movie.poster
  }
  // URL de uma imagem genérica
  return 'https://via.placeholder.com/300x450.png?text=Imagem+N%C3%A3o+Dispon%C3%ADvel'
})
</script>

<template>
  <div class="movie-card">
    <div class="poster-wrapper">
      <img :src="posterSrc" :alt="`Pôster de ${movie.titulo}`" />
    </div>
    <div class="info">
      <h3 class="title">{{ movie.titulo }}</h3>
      <p class="year">{{ movie.ano }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  width: 200px;
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.poster-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
  display: block;
}

.info {
  padding: 1rem;
}

.title {
  color: #e0e0e0;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Adiciona "..." se o título for muito longo */
}

.year {
  color: #a0a0a0;
  font-size: 0.875rem;
  margin: 0;
}
</style>
