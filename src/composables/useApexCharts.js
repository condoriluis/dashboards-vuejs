import { ref } from 'vue';

import { onMounted, onUnmounted } from 'vue';

export function useApexCharts() {
  // 1. Línea
  const lineChart = ref({
    series: [{ name: 'Ventas', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
    options: {
      chart: { type: 'line', height: 350, toolbar: { show: true } },
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'] },
      title: { text: 'Línea: Ventas mensuales', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 2. Barras
  const barChart = ref({
    series: [{ name: 'Usuarios', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }],
    options: {
      chart: { type: 'bar', height: 350, toolbar: { show: true } },
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'] },
      title: { text: 'Barras: Nuevos usuarios', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 3. Área
  const areaChart = ref({
    series: [{ name: 'Ingresos', data: [31, 40, 28, 51, 42, 109, 100] }],
    options: {
      chart: { type: 'area', height: 350, toolbar: { show: true } },
      xaxis: { categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'] },
      title: { text: 'Área: Ingresos por año', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 4. Circular (Pie)
  const pieChart = ref({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: { type: 'pie', height: 350 },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
      title: { text: 'Pie: Distribución de frutas', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 5. Donut
  const donutChart = ref({
    series: [25, 15, 44, 55, 41],
    options: {
      chart: { type: 'donut', height: 350 },
      labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'],
      title: { text: 'Donut: Uso de navegadores', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 6. Radar
  const radarChart = ref({
    series: [{ name: 'Habilidades', data: [80, 50, 30, 40, 100, 20] }],
    options: {
      chart: { type: 'radar', height: 350 },
      labels: ['HTML', 'CSS', 'JS', 'Vue', 'Vuetify', 'ApexCharts'],
      title: { text: 'Radar: Skills', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 7. Polar Area
  const polarAreaChart = ref({
    series: [14, 23, 21, 17, 15],
    options: {
      chart: { type: 'polarArea', height: 350 },
      labels: ['A', 'B', 'C', 'D', 'E'],
      title: { text: 'Polar Area: Ejemplo', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 8. Scatter
  const scatterChart = ref({
    series: [
      {
        name: 'Grupo A',
        data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1]
        ]
      }
    ],
    options: {
      chart: { type: 'scatter', height: 350, zoom: { enabled: true } },
      xaxis: { tickAmount: 10 },
      yaxis: { tickAmount: 7 },
      title: { text: 'Scatter: Dispersión', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 9. Heatmap
  const heatmapChart = ref({
    series: [
      { name: 'Metric1', data: [20, 30, 40, 50, 60, 70, 80] },
      { name: 'Metric2', data: [28, 38, 48, 58, 68, 78, 88] }
    ],
    options: {
      chart: { type: 'heatmap', height: 350 },
      title: { text: 'Heatmap: Métricas', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 10. Bubble
  const bubbleChart = ref({
    series: [
      {
        name: 'Bubble1',
        data: [
          { x: 20, y: 30, z: 40 },
          { x: 40, y: 60, z: 80 },
          { x: 60, y: 20, z: 10 }
        ]
      }
    ],
    options: {
      chart: { type: 'bubble', height: 350 },
      title: { text: 'Bubble: Ejemplo', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 11. Candlestick
  const candlestickChart = ref({
    series: [{
      data: [
        { x: '2023-08-01', y: [51, 55, 48, 53] },
        { x: '2023-08-02', y: [53, 58, 52, 57] },
        { x: '2023-08-03', y: [57, 60, 54, 59] },
        { x: '2023-08-04', y: [59, 62, 56, 60] }
      ]
    }],
    options: {
      chart: { type: 'candlestick', height: 350 },
      title: { text: 'Candlestick: Precios de Acción', align: 'center' },
      xaxis: { type: 'category' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  // 12. RadialBar
  const radialBarChart = ref({
    series: [67],
    options: {
      chart: { type: 'radialBar', height: 350 },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: { fontSize: '22px' },
            value: { fontSize: '16px' },
            total: {
              show: true,
              label: 'Total',
              formatter: () => 67
            }
          }
        }
      },
      labels: ['Progreso'],
      title: { text: 'RadialBar: Progreso', align: 'center' },
      responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
    }
  });

  let intervalId;

  function randomizeData() {
    // Línea
    lineChart.value.series[0].data = Array.from({ length: 9 }, () => Math.floor(Math.random() * 150));
    // Barras
    barChart.value.series[0].data = Array.from({ length: 9 }, () => Math.floor(Math.random() * 80) + 40);
    // Área
    areaChart.value.series[0].data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 120));
    // Pie
    pieChart.value.series = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 10);
    // Donut
    donutChart.value.series = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 10);
    // Radar
    radarChart.value.series[0].data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    // Polar Area
    polarAreaChart.value.series = Array.from({ length: 5 }, () => Math.floor(Math.random() * 30) + 10);
    // Scatter
    scatterChart.value.series[0].data = Array.from({ length: 5 }, () => [
      Math.random() * 30 + 10,
      Math.random() * 10 + 1
    ]);
    // Heatmap
    heatmapChart.value.series.forEach(s => {
      s.data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    });
    // Bubble
    bubbleChart.value.series[0].data = Array.from({ length: 3 }, () => ({
      x: Math.floor(Math.random() * 60),
      y: Math.floor(Math.random() * 60),
      z: Math.floor(Math.random() * 90) + 10
    }));
    // Candlestick
    candlestickChart.value.series[0].data = Array.from({ length: 4 }, (_, i) => {
      const open = Math.floor(Math.random() * 20) + 40;
      const close = open + Math.floor(Math.random() * 10) - 5;
      const high = Math.max(open, close) + Math.floor(Math.random() * 5);
      const low = Math.min(open, close) - Math.floor(Math.random() * 5);
      return {
        x: `2025-08-0${i + 1}`,
        y: [open, high, low, close]
      };
    });
    // RadialBar
    const val = Math.floor(Math.random() * 100);
    radialBarChart.value.series = [val];
    radialBarChart.value.options.plotOptions.radialBar.dataLabels.total.formatter = () => val;
  }

  onMounted(() => {
    intervalId = setInterval(randomizeData, 10000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return {
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
  };
}
