<template>
  <v-row class="mb-6">
    <v-col cols="12" md="4" v-for="(api, idx) in apiOptions" :key="api.label">
      <SummaryWidget
        :title="api.label"
        :value="summaryCounts[api.label] ?? 0"
        :icon="summaryIcons[api.label]"
        :progressValue="100"
        :progressColor="summaryColors[api.label]"
        :iconBgColor="summaryIconBg[api.label]"
      />
    </v-col>
  </v-row>
  <div class="pa-0">
    <h2 class="mb-4">Tabla de Comentarios</h2>

    
    <!-- Tabla de datos -->
    <div>
      <v-select
        :items="apiOptions.map(opt => opt.label)"
        v-model="selectedApiLabel"
        label="Selecciona tipo de datos"
        class="mb-4"
        outlined
        dense
        style="max-width: 260px"
        @update:modelValue="onApiChange"
      />
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :items-per-page="10"
        class="elevation-1"
      >
        <template v-slot:item="props">
          <tr>
            <td v-for="header in headers" :key="header.key">
              <span v-if="header.key === 'thumbnailUrl'">
                <img :src="getValue(props.item, header.key)" alt="thumb" style="max-width: 48px; max-height: 48px;" v-if="getValue(props.item, header.key)" />
              </span>
              <span v-else>
                {{ getValue(props.item, header.key) }}
              </span>
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
import SummaryWidget from '../components/SummaryWidget.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useTable } from '@/composables/useTable';

const {
  headers,
  items,
  loading,
  error,
  fetchData,
  apiOptions,
  selectedApi,
  changeApi
} = useTable();

const selectedApiLabel = ref(selectedApi.value.label);
let rotateInterval = null;
const ROTATE_SECONDS = 10;

function rotateApi() {
  const idx = apiOptions.findIndex(opt => opt.label === selectedApiLabel.value);
  const nextIdx = (idx + 1) % apiOptions.length;
  selectedApiLabel.value = apiOptions[nextIdx].label;
  changeApi(selectedApiLabel.value);
}

onMounted(() => {
  rotateInterval = setInterval(rotateApi, ROTATE_SECONDS * 1000);
});
onUnmounted(() => {
  if (rotateInterval) clearInterval(rotateInterval);
});

function stopRotation() {
  if (rotateInterval) {
    clearInterval(rotateInterval);
    rotateInterval = null;
  }
}

function onApiChange(label) {
  selectedApiLabel.value = label;
  changeApi(label);
  stopRotation();
}

function getValue(item, key) {
  return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : '', item);
}

const summaryCounts = ref({});
const summaryIcons = {
  Posts: 'mdi-post-outline',
  Comentarios: 'mdi-comment-text-multiple',
  Álbumes: 'mdi-folder-multiple-image',
  Fotos: 'mdi-image-multiple',
  Tareas: 'mdi-checkbox-marked-outline',
  Usuarios: 'mdi-account-group',
};
const summaryColors = {
  Posts: 'primary',
  Comentarios: 'info',
  Álbumes: 'warning',
  Fotos: 'success',
  Tareas: 'secondary',
  Usuarios: 'error',
};
const summaryIconBg = {
  Posts: '#7367F0',
  Comentarios: '#00CFE8',
  Álbumes: '#FF9F43',
  Fotos: '#28C76F',
  Tareas: '#EA5455',
  Usuarios: '#FF5B8C',
};

async function fetchAllCounts() {
  const axios = (await import('axios')).default;
  const promises = apiOptions.map(async api => {
    try {
      const res = await axios.get(api.url);
      return [api.label, Array.isArray(res.data) ? res.data.length : 0];
    } catch {
      return [api.label, 0];
    }
  });
  const results = await Promise.all(promises);
  summaryCounts.value = Object.fromEntries(results);
}

onMounted(fetchAllCounts);
</script>
