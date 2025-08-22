<script setup>
import { ref, defineEmits } from 'vue';
import MovieCard from './MovieCard.vue';

defineProps({
  title: String,
  movies: Array
});

const emit = defineEmits(['view-details']);

const scrollWrapper = ref(null);

const scroll = (direction) => {
  if (scrollWrapper.value) {
    const scrollAmount = scrollWrapper.value.clientWidth * 0.8;

    if (direction === 'left') {
      scrollWrapper.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollWrapper.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <section class="carousel-section">
    <h2>{{ title }}</h2>

    <button class="arrow arrow-left" @click="scroll('left')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </button>

    <div class="movies-wrapper" ref="scrollWrapper">
      <MovieCard
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
        @view-details="$emit('view-details', $event)"
      ></MovieCard>
    </div>

    <button class="arrow arrow-right" @click="scroll('right')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </button>
  </section>
</template>

<style scoped>
/* O estilo permanece o mesmo */
.carousel-section {
  margin-bottom: 3rem;
  position: relative;
}
h2 {
  color: #e5e5e5;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-left: 2rem;
}
.movies-wrapper {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 1rem;
  padding: 0 2rem;
  scroll-behavior: smooth;
}
.movies-wrapper::-webkit-scrollbar {
  display: none;
}
.movies-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.arrow {
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
}
.arrow svg {
  width: 30px;
  height: 30px;
  color: white;
}
.carousel-section:hover .arrow {
  opacity: 1;
}
.arrow:hover {
  background-color: rgba(20, 20, 20, 0.9);
}
.arrow-left {
  left: 10px;
}
.arrow-right {
  right: 10px;
}
</style>
