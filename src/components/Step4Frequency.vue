<script setup>
const props = defineProps({
  formData: Object
})

const frequencyOptions = [
  'Todos os dias',
  'Algumas vezes por semana',
  'Algumas vezes por mês',
  'Raramente'
]

// Função para definir a frequência (seleção única)
const selectFrequency = (option) => {
  props.formData.frequencia_assistir_filmes = option
}
</script>

<template>
  <div class="form-step">
    <h3>Passo 4: Com que frequência você assiste filmes?</h3>
    <div class="options-grid">
      <button
        v-for="option in frequencyOptions"
        :key="option"
        @click="selectFrequency(option)"
        :class="{ selected: formData.frequencia_assistir_filmes === option }"
        type="button"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Exatamente os mesmos estilos da Etapa 3 */
.form-step { text-align: center; }
.options-grid { display: flex; flex-direction: column; gap: 15px; margin-top: 1.5rem; }
button { padding: 15px 20px; border-radius: 8px; border: 1px solid #444; background-color: #2b2b2b; color: #e0e0e0; cursor: pointer; transition: all 0.2s; font-size: 1rem; }
button:hover { border-color: #4a90e2; }
button.selected { background-color: #4a90e2; border-color: #4a90e2; color: white; font-weight: bold; }
</style>
