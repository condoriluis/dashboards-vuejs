<template>
  <v-card class="pa-4" outlined>
    <v-card-title class="text-h6">Gráfico de Prueba</v-card-title>
    <v-card-text>
      <Bar :data="data" :options="options" style="min-height: 250px;" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const data = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr'],
  datasets: [
    {
      label: 'Demo',
      backgroundColor: '#7367F0',
      data: [10, 20, 30, 40]
    }
  ]
};
const options = { responsive: true, plugins: { legend: { display: true } } };
</script>
