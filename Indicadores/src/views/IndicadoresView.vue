<template>
  <div class="container-fluid px-1">
    <h2 class="mb-4 text-center">Indicadores Econômicos</h2>

    <!-- Cabeçalho da tabela -->
    <div class="row bg-dark text-white fw-bold d-none d-md-flex text-center">
      <div class="col-md-3 py-2">Indicador</div>
      <div class="col-md-2 py-2">Último</div>
      <div class="col-md-2 py-2">Anterior</div>
      <div class="col-md-2 py-2">12 meses</div>
      <div class="col-md-2 py-2">No ano</div>
    </div>

    <!-- Dados dos indicadores -->
    <div
      v-for="(indicador, index) in indicadores"
      :key="index"
      class="row border-bottom align-items-center text-center"
    >
      <!-- Nome do Indicador -->
      <div class="col-md-3 py-2">
        <span
          class="indicador-nome"
          @click="showCard(indicador)"
        >
          {{ indicador.nome }}
        </span>
      </div>

      <!-- Último -->
      <div class="col-md-2 py-2">
        <p class="mb-0 font-size-12">{{ indicador.ultimo.split(' ')[0] }}</p>
        <p class="mb-0 font-size-8">{{ indicador.ultimo.split(' ').slice(1).join(' ') }}</p>
      </div>

      <!-- Anterior -->
      <div class="col-md-2 py-2">
        <p class="mb-0 font-size-12">{{ indicador.anterior.split(' ')[0] }}</p>
        <p class="mb-0 font-size-8">{{ indicador.anterior.split(' ').slice(1).join(' ') }}</p>
      </div>

      <!-- 12 Meses -->
      <div class="col-md-2 py-2">{{ indicador.dozeMeses }}</div>

      <!-- No Ano -->
      <div class="col-md-2 py-2">{{ indicador.noAno }}</div>
    </div>

    <!-- Exibir o componente Card -->
    <IndicadorCard
      v-if="selectedIndicador"
      :title="selectedIndicador.nome"
      :subtitle="`Informações sobre ${selectedIndicador.nome}`"
      :text="'O IPCA mede a variação da inflação (perca do valor de uma moeda) ao longo de um período.'"
      @close="closeCard"
    />
  </div>
</template>

<script>
import IndicadorCard from "./card.vue";

export default {
  components: {
    IndicadorCard,
  },
  data() {
    return {
      indicadores: [
        { nome: "🏷️IPCA (%)", ultimo: "0,56 out 2024", anterior: "0,44 set 2024", dozeMeses: "4,76", noAno: "3,88" },
        { nome: "🏷️INPC (%)", ultimo: "0,61 out 2024", anterior: "0,48 set 2024", dozeMeses: "4,60", noAno: "3,92" },
        { nome: "🏷️IPCA-15 (%)", ultimo: "0,54 out 2024", anterior: "0,13 set 2024", dozeMeses: "4,47", noAno: "3,71" },
        { nome: "💰Custo do m² (%)", ultimo: "0,53 out 2024", anterior: "0,35 set 2024", dozeMeses: "3,86", noAno: "3,51" },
        { nome: "Variação do PIB (%)", ultimo: "3,3 2º tri 2024", anterior: "2,5 1º tri 2024", dozeMeses: "2,5", noAno: "2,9" },
        { nome: "PIB per capita (R$)", ultimo: "47.802,02 2022", anterior: "42.893,72 2021", dozeMeses: "-", noAno: "-" },
        { nome: "Indústria (%)", ultimo: "1,1 set 2024", anterior: "0,2 ago 2024", dozeMeses: "2,6", noAno: "3,1" },
        { nome: "Comércio (%)", ultimo: "0,5 set 2024", anterior: "-0,2 ago 2024", dozeMeses: "3,9", noAno: "4,8" },
        { nome: "Serviços (%)", ultimo: "1,0 set 2024", anterior: "-0,3 ago 2024", dozeMeses: "2,3", noAno: "2,9" },
      ],
      selectedIndicador: null, // Indicador selecionado
    };
  },
  methods: {
    showCard(indicador) {
      this.selectedIndicador = indicador; // Define o indicador selecionado
    },
    closeCard() {
      this.selectedIndicador = null; // Fecha o card
    },
  },
};
</script>

<style>
.font-size-12 {
  font-size: 20px;
  font-weight: bold;
}

.font-size-8 {
  font-size: 12px;
  color: #6c757d; /* Texto suavizado */
}

.indicador-nome {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
}

.indicador-nome:hover {
  color: #0056b3;
}
</style>
