<template>
  <div class="dashboard-container">
    <HeaderBar :view="currentView" :countdown="countdown" @changeView="handleChangeView" />
    <v-alert
      type="info"
      variant="outlined"
      border="start"
      class="mb-3 ms-3 me-3 mt-3 mt-sm-4"
      prominent
      style="background: #f4f7fe; color: #5e5873; border-left: 5px solid #7367F0;"
    >
      <div class="d-flex flex-column flex-md-row align-center">
        <v-icon color="primary" class="mr-3 mb-2 mb-md-0">mdi-timer-refresh</v-icon>
        <div>
          <span class="font-weight-bold">Actualización automática de datos en tiempo real:</span>
          &nbsp;Todos los gráficos y widgets de este dashboard se actualizan automáticamente cada <b>10 segundos</b> para simular la recepción de datos en vivo desde una API.
        </div>
      </div>
    </v-alert>
    <v-container fluid class="py-2">
      <ChartsView v-if="currentView === 'charts'" />
      <ApexChartsView v-if="currentView === 'apexcharts'" />
      <SummaryTableView v-if="currentView === 'summaryTable'" />
    </v-container>
  </div>
</template>

<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import ChartsView from './ChartsView.vue';
import SummaryTableView from './SummaryTableView.vue';
import ApexChartsView from './ApexChartsView.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const currentView = ref('charts');

const INTERVAL_SECONDS = 10;
const countdown = ref(INTERVAL_SECONDS);
let timer = null;

function startCountdown() {
  if (timer) clearInterval(timer);
  countdown.value = INTERVAL_SECONDS;
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      countdown.value = INTERVAL_SECONDS;
    }
  }, 1000);
}

function handleChangeView(newView) {
  currentView.value = newView;
  countdown.value = INTERVAL_SECONDS;
}

onMounted(() => {
  startCountdown();
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.dashboard-container {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-top: 72px;
}
@media (max-width: 600px) {
  .dashboard-container {
    padding-top: 60px;
  }
}
</style>
