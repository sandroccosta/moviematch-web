<script setup>
// A CORREÇÃO: Capturamos o resultado de defineProps em uma constante 'props'.
const props = defineProps({
  formData: Object
})

// Lista de gêneros que vamos exibir
const allGenres = [
  'Ação', 'Aventura', 'Animação', 'Comédia', 'Crime', 'Documentário',
  'Drama', 'Família', 'Fantasia', 'História', 'Terror', 'Música',
  'Mistério', 'Romance', 'Ficção Científica', 'Thriller'
]

// Função para adicionar ou remover um gênero da lista de favoritos
const toggleGenre = (genre) => {
  // A CORREÇÃO: Usamos 'props.formData' para acessar o objeto
  const index = props.formData.generos_favoritos.indexOf(genre)
  if (index === -1) {
    // Se não está na lista, adiciona
    props.formData.generos_favoritos.push(genre)
  } else {
    // Se já está na lista, remove
    props.formData.generos_favoritos.splice(index, 1)
  }
}

// Função auxiliar para verificar se um gênero está selecionado
const isSelected = (genre) => {
  // A CORREÇÃO: Usamos 'props.formData' aqui também
  return props.formData.generos_favoritos.includes(genre)
}
</script>

<template>
  <div class="form-step">
    <h3>Passo 2: Quais são seus gêneros favoritos?</h3>
    <p>Selecione quantos quiser.</p>
    <div class="genres-grid">
      <button
        v-for="genre in allGenres"
        :key="genre"
        @click="toggleGenre(genre)"
        :class="{ selected: isSelected(genre) }"
        type="button"
      >
        {{ genre }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-step {
  text-align: center;
}

.genres-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 1.5rem;
}

button {
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #444;
  background-color: #2b2b2b;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  border-color: #4a90e2;
}

button.selected {
  background-color: #4a90e2;
  border-color: #4a90e2;
  color: white;
  font-weight: bold;
}
</style>
