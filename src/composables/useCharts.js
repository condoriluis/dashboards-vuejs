import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useCharts() {
  const barData = ref({
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
      label: 'Ventas',
      backgroundColor: '#7367F0',
      data: [80, 100, 70, 50, 80, 60, 70, 100, 120, 105, 110, 130],
      borderRadius: 6
    }]
  });
  const lineData = ref({
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [{
      label: 'Visitas',
      borderColor: '#28C76F',
      backgroundColor: '#28C76F33',
      data: [5, 15, 10, 20, 18, 22, 16],
      fill: true,
      tension: 0.4
    }]
  });
  const pieData = ref({
    labels: ['Producto A', 'Producto B', 'Producto C'],
    datasets: [{
      label: 'Ventas por Producto',
      backgroundColor: ['#FF9F43', '#00CFE8', '#EA5455'],
      data: [40, 30, 30],
      borderWidth: 0
    }]
  });
  const doughnutData = ref({
    labels: ['Segmento X', 'Segmento Y', 'Segmento Z'],
    datasets: [{
      label: 'Cuota de Mercado',
      backgroundColor: ['#7367F0', '#28C76F', '#FF9F43'],
      data: [50, 25, 25],
      borderWidth: 0,
      cutout: '70%'
    }]
  });
  const radarData = ref({
    labels: ['Calidad', 'Precio', 'Servicio', 'Innovación', 'Experiencia'],
    datasets: [
      {
        label: 'Nuestra Empresa',
        backgroundColor: '#00CFE855',
        borderColor: '#00CFE8',
        data: [5, 4, 3, 4, 5],
        pointBackgroundColor: '#00CFE8'
      },
      {
        label: 'Competencia',
        backgroundColor: '#EA545555',
        borderColor: '#EA5455',
        data: [4, 5, 3, 2, 4],
        pointBackgroundColor: '#EA5455'
      }
    ]
  });
  const polarData = ref({
    labels: ['Norte', 'Sur', 'Este', 'Oeste'],
    datasets: [{
      label: 'Ventas por Región',
      backgroundColor: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43'],
      data: [15, 25, 35, 25],
      borderWidth: 0
    }]
  });

  // Bubble
  const bubbleData = ref({
    datasets: [
      {
        label: 'Campaña A',
        backgroundColor: '#00CFE8',
        borderColor: '#00CFE8',
        data: Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 15 + 5 }))
      },
      {
        label: 'Campaña B',
        backgroundColor: '#EA5455',
        borderColor: '#EA5455',
        data: Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 15 + 5 }))
      }
    ]
  });

  // Scatter
  const scatterData = ref({
    datasets: [
      {
        label: 'Precio vs Ventas',
        backgroundColor: '#7367F0',
        borderColor: '#7367F0',
        data: Array.from({ length: 12 }, () => ({ x: Math.random() * 100, y: Math.random() * 100 }))
      }
    ]
  });

  // Stacked Bar
  const stackedBarData = ref({
    labels: ['Cat A', 'Cat B', 'Cat C', 'Cat D'],
    datasets: [
      {
        label: 'Online',
        backgroundColor: '#28C76F',
        data: [30, 20, 40, 25]
      },
      {
        label: 'Tienda',
        backgroundColor: '#FF9F43',
        data: [20, 30, 15, 35]
      }
    ]
  });

  // Double Pie (simulado como dos datasets)
  const doublePieData = ref({
    labels: ['Segmento 1', 'Segmento 2', 'Segmento 3'],
    datasets: [
      {
        label: 'Canal Online',
        backgroundColor: ['#7367F0', '#00CFE8', '#EA5455'],
        data: [40, 30, 30],
        borderWidth: 0
      },
      {
        label: 'Canal Tienda',
        backgroundColor: ['#28C76F', '#FF9F43', '#EA5455'],
        data: [30, 40, 30],
        borderWidth: 0
      }
    ]
  });

  // Área (linea con fill)
  const areaData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Ingresos',
        borderColor: '#00BCD1',
        backgroundColor: '#00BCD155',
        data: [100, 150, 120, 180],
        fill: true,
        tension: 0.4
      }
    ]
  });

  let intervalId;
  function randomizeAllData() {
    barData.value = {
      ...barData.value,
      datasets: [{
        ...barData.value.datasets[0],
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 10)
      }]
    };
    // Bubble
    bubbleData.value = {
      datasets: [
        {
          ...bubbleData.value.datasets[0],
          data: Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 15 + 5 }))
        },
        {
          ...bubbleData.value.datasets[1],
          data: Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 15 + 5 }))
        }
      ]
    };
    // Scatter
    scatterData.value = {
      datasets: [
        {
          ...scatterData.value.datasets[0],
          data: Array.from({ length: 12 }, () => ({ x: Math.random() * 100, y: Math.random() * 100 }))
        }
      ]
    };
    // Stacked Bar
    stackedBarData.value = {
      ...stackedBarData.value,
      datasets: [
        {
          ...stackedBarData.value.datasets[0],
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 40) + 10)
        },
        {
          ...stackedBarData.value.datasets[1],
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 40) + 10)
        }
      ]
    };
    // Double Pie
    doublePieData.value = {
      ...doublePieData.value,
      datasets: [
        {
          ...doublePieData.value.datasets[0],
          data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 60) + 10)
        },
        {
          ...doublePieData.value.datasets[1],
          data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 60) + 10)
        }
      ]
    };
    // Área
    areaData.value = {
      ...areaData.value,
      datasets: [
        {
          ...areaData.value.datasets[0],
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 200) + 50)
        }
      ]
    };
    lineData.value = {
      ...lineData.value,
      datasets: [{
        ...lineData.value.datasets[0],
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 5)
      }]
    };
    pieData.value = {
      ...pieData.value,
      datasets: [{
        ...pieData.value.datasets[0],
        data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 60) + 10)
      }]
    };
    doughnutData.value = {
      ...doughnutData.value,
      datasets: [{
        ...doughnutData.value.datasets[0],
        data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 60) + 10)
      }]
    };
    radarData.value = {
      ...radarData.value,
      datasets: [
        {
          ...radarData.value.datasets[0],
          data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1)
        },
        {
          ...radarData.value.datasets[1],
          data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1)
        }
      ]
    };
    polarData.value = {
      ...polarData.value,
      datasets: [{
        ...polarData.value.datasets[0],
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 40) + 10)
      }]
    };
  }
  onMounted(() => {
    intervalId = setInterval(() => {
      randomizeAllData();
    }, 10000);
  });
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
  return {
    barData,
    lineData,
    pieData,
    doughnutData,
    radarData,
    polarData,
    bubbleData,
    scatterData,
    stackedBarData,
    doublePieData,
    areaData
  };

}
