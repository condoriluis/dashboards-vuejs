<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <Bar :data="chartData" :options="chartOptions" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { ref, watch, onMounted } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  title: String,
  apiUrl: String
});

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Valores',
      backgroundColor: '#7367F0',
      data: []
    }
  ]
});
const chartOptions = ref({ responsive: true, plugins: { legend: { display: true } } });

const fetchData = async () => {
  if (props.apiUrl) {
    const res = await fetch(props.apiUrl);
    const data = await res.json();
    chartData.value.labels = data.map(d => d.label);
    chartData.value.datasets[0].data = data.map(d => d.value);
  }
};

onMounted(fetchData);
watch(() => props.apiUrl, fetchData);
</script>
