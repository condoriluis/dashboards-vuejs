<template>
  <div>
    <v-sheet
      class="pa-0 mb-5 text-center"
      color="light"
      rounded
      elevation="2"
    >
      <h2 class="chart-title">
        📊 <span class="highlight">ApexCharts</span>
      </h2>
    </v-sheet>
  
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Línea</v-card-title>
          <v-card-text>
            <apexchart type="line" height="250" :options="lineChart.options" :series="lineChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Barras</v-card-title>
          <v-card-text>
            <apexchart type="bar" height="250" :options="barChart.options" :series="barChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Área</v-card-title>
          <v-card-text>
            <apexchart type="area" height="250" :options="areaChart.options" :series="areaChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Pie</v-card-title>
          <v-card-text>
            <apexchart type="pie" height="250" :options="pieChart.options" :series="pieChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Donut</v-card-title>
          <v-card-text>
            <apexchart type="donut" height="250" :options="donutChart.options" :series="donutChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Radar</v-card-title>
          <v-card-text>
            <apexchart type="radar" height="250" :options="radarChart.options" :series="radarChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Polar Area</v-card-title>
          <v-card-text>
            <apexchart type="polarArea" height="250" :options="polarAreaChart.options" :series="polarAreaChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Scatter</v-card-title>
          <v-card-text>
            <apexchart type="scatter" height="250" :options="scatterChart.options" :series="scatterChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Heatmap</v-card-title>
          <v-card-text>
            <apexchart type="heatmap" height="250" :options="heatmapChart.options" :series="heatmapChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Bubble</v-card-title>
          <v-card-text>
            <apexchart type="bubble" height="250" :options="bubbleChart.options" :series="bubbleChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>Candlestick</v-card-title>
          <v-card-text>
            <apexchart type="candlestick" height="250" :options="candlestickChart.options" :series="candlestickChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card outlined class="mb-4">
          <v-card-title>RadialBar</v-card-title>
          <v-card-text>
            <apexchart type="radialBar" height="250" :options="radialBarChart.options" :series="radialBarChart.series" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useApexCharts } from '@/composables/useApexCharts';

const app = getCurrentInstance()?.appContext.app;
if (app && !app._apexcharts_registered) {
  app.component('apexchart', VueApexCharts);
  app._apexcharts_registered = true;
}

const {
  lineChart,
  barChart,
  areaChart,
  pieChart,
  donutChart,
  radarChart,
  polarAreaChart,
  scatterChart,
  heatmapChart,
  bubbleChart,
  candlestickChart,
  radialBarChart
} = useApexCharts();
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
