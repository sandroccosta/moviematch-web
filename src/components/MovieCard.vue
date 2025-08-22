<script setup>
import { computed, defineEmits } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['view-details']);

const posterSrc = computed(() => {
  // A CORREÇÃO ESTÁ AQUI: a string deve ser 'N/A'
  if (props.movie.poster && props.movie.poster !== 'N/A') {
    return props.movie.poster
  }
  return 'https://via.placeholder.com/200x300.png?text=Poster+Indispon%C3%ADvel'
})
</script>

<template>
  <div class="movie-card" @click="emit('view-details', movie)">
    <img :src="posterSrc" :alt="`Pôster de ${movie.titulo}`" class="poster" />
    <div class="info-overlay">
      <h3 class="title">{{ movie.titulo }}</h3>
      <p class="year">{{ movie.ano }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  position: relative;
  min-width: 200px;
  width: 200px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, z-index 0.3s ease;
  cursor: pointer;
  background-color: #2b2b2b;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0));
  padding: 1rem;
  padding-top: 2rem;
  opacity: 0;
  transform: translateY(20%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.year {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin: 0;
}

/* Efeito Hover */
.movie-card:hover {
  transform: scale(1.15);
  z-index: 10;
}

.movie-card:hover .info-overlay {
  opacity: 1;
  transform: translateY(0);
}
</style>
