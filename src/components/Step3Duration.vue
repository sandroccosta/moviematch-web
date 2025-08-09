<script setup>
const props = defineProps({
  formData: Object
})

const durationOptions = [
  'Filmes curtos (até 90 min)',
  'Duração média (90-120 min)',
  'Filmes longos (mais de 120 min)',
  'Não tenho preferência'
]

// Função para definir a duração (seleção única)
const selectDuration = (option) => {
  props.formData.duracao_preferida = option
}
</script>

<template>
  <div class="form-step">
    <h3>Passo 3: Qual duração de filme você prefere?</h3>
    <div class="options-grid">
      <button
        v-for="option in durationOptions"
        :key="option"
        @click="selectDuration(option)"
        :class="{ selected: formData.duracao_preferida === option }"
        type="button"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Usamos os mesmos estilos da Etapa 2 para consistência */
.form-step { text-align: center; }
.options-grid { display: flex; flex-direction: column; gap: 15px; margin-top: 1.5rem; }
button { padding: 15px 20px; border-radius: 8px; border: 1px solid #444; background-color: #2b2b2b; color: #e0e0e0; cursor: pointer; transition: all 0.2s; font-size: 1rem; }
button:hover { border-color: #4a90e2; }
button.selected { background-color: #4a90e2; border-color: #4a90e2; color: white; font-weight: bold; }
</style>
