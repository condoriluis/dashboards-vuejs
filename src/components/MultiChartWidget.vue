<template>
  <v-card class="pa-4" outlined>
    <v-card-title class="text-h6">{{ title }}</v-card-title>
    <v-card-text>
      <component
        :is="chartComponent"
        :data="reactiveData"
        :options="reactiveOptions"
        style="min-height: 250px;"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'vue-chartjs';
import { Chart, Title, Tooltip, Legend, BarElement, LineElement, PointElement, ArcElement, RadarController, CategoryScale, LinearScale, RadialLinearScale } from 'chart.js';
import { computed, watch, shallowRef } from 'vue';

Chart.register(Title, Tooltip, Legend, BarElement, LineElement, PointElement, ArcElement, RadarController, CategoryScale, LinearScale, RadialLinearScale);

const props = defineProps({
  type: { type: String, default: 'bar' },
  title: { type: String, default: '' },
  chartData: {
    type: Object,
    default: () => ({ labels: [], datasets: [] })
  },
  chartOptions: { type: Object, default: () => ({ responsive: true, plugins: { legend: { display: true } } }) }
});

const chartComponent = computed(() => {
  switch (props.type) {
    case 'line': return Line;
    case 'pie': return Pie;
    case 'doughnut': return Doughnut;
    case 'radar': return Radar;
    case 'polarArea': return PolarArea;
    default: return Bar;
  }
});

const reactiveData = shallowRef(props.chartData);
const reactiveOptions = shallowRef(props.chartOptions);

watch(() => props.chartData, (val) => {
  reactiveData.value = val;
}, { deep: true });
watch(() => props.chartOptions, (val) => {
  reactiveOptions.value = val;
}, { deep: true });
</script>
