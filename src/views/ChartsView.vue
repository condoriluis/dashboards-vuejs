<template>
  <v-row class="mb-6">
    <v-col cols="12" md="6" lg="4">
      <MultiChartWidget type="bar" :chart-data="barData" title="Ventas Mensuales" />
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <MultiChartWidget type="line" :chart-data="lineData" title="Visitas Semanales" />
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <MultiChartWidget type="bar" :chart-data="stackedBarData" title="Ventas por Categoría (Apilado)" :options="{scales: {x: {stacked: true}, y: {stacked: true}}}" />
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
      <MultiChartWidget type="line" :chart-data="areaData" title="Evolución de Ingresos (Área)" :options="{elements: {line: {fill: true}}}" />
    </v-col>
  </v-row>
</template>

<script setup>
import MultiChartWidget from '../components/MultiChartWidget.vue';
import { useCharts } from '@/composables/useCharts';

// Extendemos el composable para más datos dinámicos
const {
  barData, lineData, pieData, doughnutData, radarData, polarData,
  bubbleData, scatterData, stackedBarData, doublePieData, areaData
} = useCharts();
</script>
