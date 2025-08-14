<template>
  <v-app-bar color="primary" dark flat app>
    <v-toolbar-title class="font-weight-bold">Dashboard UI - VUE 3 + Vuetify + Chart.js</v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="$emit('changeView', 'charts')" :color="view==='charts' ? 'secondary' : 'white'" title="Ver Gráficos">
      <v-icon>mdi-chart-bar</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('changeView', 'summaryTable')" :color="view==='summaryTable' ? 'secondary' : 'white'" title="KPIs">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
const props = defineProps({
  view: { type: String, default: 'charts' }
});
</script>

<style scoped>
.v-toolbar-title {
  letter-spacing: 1px;
}
</style>
