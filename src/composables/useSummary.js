import { computed } from 'vue';

export function useSummary({ items, barData, pieData }) {
  const totalUsuarios = computed(() => items.value.length);
  const totalVentas = computed(() => barData.value.datasets[0].data.reduce((a, b) => a + b, 0));
  const totalCategorias = computed(() => pieData.value.labels.length);

  return {
    totalUsuarios,
    totalVentas,
    totalCategorias
  };
}
