<script setup>
import MovieCard from './MovieCard.vue'

// O componente recebe um título e uma lista de filmes como props
defineProps({
  title: String,
  movies: Array
})
</script>

<template>
  <section class="carousel-section">
    <h2>{{ title }}</h2>
    <div class="movies-wrapper">
      <MovieCard
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
      />
    </div>
  </section>
</template>

<style scoped>
.carousel-section {
  margin-bottom: 2rem;
}

h2 {
  color: #e0e0e0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.movies-wrapper {
  display: flex;
  overflow-x: auto; /* A mágica do scroll horizontal acontece aqui */
  overflow-y: hidden;
  gap: 1.5rem;
  padding-bottom: 1.5rem; /* Espaço para a barra de rolagem não ficar colada nos cards */
}

/* Estilizando a barra de rolagem para um visual mais limpo (funciona em navegadores WebKit como Chrome, Safari) */
.movies-wrapper::-webkit-scrollbar {
  height: 8px;
}

.movies-wrapper::-webkit-scrollbar-track {
  background: #2b2b2b;
  border-radius: 4px;
}

.movies-wrapper::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.movies-wrapper::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
