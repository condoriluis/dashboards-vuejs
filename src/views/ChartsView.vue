<template>
  <div>
    <v-sheet
      class="pa-0 mb-5 text-center"
      color="light"
      rounded
      elevation="2"
    >
      <h2 class="chart-title">
        📊 <span class="highlight">Chart.js</span>
      </h2>
    </v-sheet>

    <v-row class="mb-6">
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="bar" :chart-data="barData" title="Ventas Mensuales" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="line" :chart-data="lineData" title="Visitas Semanales" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget
          type="bar"
          :chart-data="stackedBarData"
          title="Ventas por Categoría (Apilado)"
          :options="{ scales: { x: { stacked: true }, y: { stacked: true } } }"
        />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="pie" :chart-data="pieData" title="Ventas por Producto" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="doughnut" :chart-data="doughnutData" title="Cuota de Mercado" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="radar" :chart-data="radarData" title="Comparativa de Competencia" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="polarArea" :chart-data="polarData" title="Ventas por Región" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="pie" :chart-data="doublePieData" title="Distribución por Segmento y Canal" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="bubble" :chart-data="bubbleData" title="Impacto de Campañas" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget type="scatter" :chart-data="scatterData" title="Relación Precio vs Ventas" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <MultiChartWidget
          type="line"
          :chart-data="areaData"
          title="Evolución de Ingresos (Área)"
          :options="{ elements: { line: { fill: true } } }"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import MultiChartWidget from '../components/MultiChartWidget.vue';
import { useCharts } from '@/composables/useCharts';

const {
  barData, lineData, pieData, doughnutData, radarData, polarData,
  bubbleData, scatterData, stackedBarData, doublePieData, areaData
} = useCharts();
</script>

<style scoped>
.chart-title {
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: white;
}
.chart-title .highlight {
  color: #0951a3;
}
</style>
