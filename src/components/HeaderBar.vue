<template>
  <v-app-bar color="primary" flat app>
    <!-- Menú hamburguesa en móvil -->
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <!-- Título -->
    <v-toolbar-title class="font-weight-bold text-uppercase">
      📊 Dashboard UI
      <span class="subtitle">VUE 3 + Vuetify + Chart.js + ApexCharts</span>
    </v-toolbar-title>

    <v-spacer />

    <!-- Contador visual -->
    <div class="d-flex align-center mr-6">
      <span class="countdown-label">Próxima actualización:</span>
      <v-chip
        size="small"
        :color="countdown <= 5 ? 'error' : 'white'"
        text-color="white"
        class="ml-2 font-weight-bold"
      >
        {{ countdown }} s
      </v-chip>
    </div>

    <v-spacer />

    <!-- Botones solo en desktop -->
    <div class="view-buttons d-none d-sm-flex align-center">
      <v-tooltip text="Gráficos Chart.js" location="bottom">
        <template #activator="{ props }">
          <v-btn
            icon
            size="small"
            variant="flat"
            v-bind="props"
            @click="$emit('changeView', 'charts')"
            :class="{ active: view === 'charts' }"
          >
            <v-icon size="20">mdi-chart-bar</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="Gráficos ApexCharts" location="bottom">
        <template #activator="{ props }">
          <v-btn
            icon
            size="small"
            variant="flat"
            v-bind="props"
            @click="$emit('changeView', 'apexcharts')"
            :class="{ active: view === 'apexcharts' }"
          >
            <v-icon size="20">mdi-chart-areaspline-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="Tablas de Datos" location="bottom">
        <template #activator="{ props }">
          <v-btn
            icon
            size="small"
            variant="flat"
            v-bind="props"
            @click="$emit('changeView', 'summaryTable')"
            :class="{ active: view === 'summaryTable' }"
          >
            <v-icon size="20">mdi-table-large</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      
    </div>
  </v-app-bar>

  <!-- Menú lateral en móvil -->
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.view"
        :title="item.title"
        @click="selectView(item.view)"
      >
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    view: {
      type: String,
      default: "charts"
    },
    countdown: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: "Gráficos Chart.js", icon: "mdi-chart-bar", view: "charts" },
        { title: "Gráficos ApexCharts", icon: "mdi-chart-areaspline-variant", view: "apexcharts" },
        { title: "Tablas de Datos", icon: "mdi-table-large", view: "summaryTable" }
      ]
    };
  },
  methods: {
    selectView(view) {
      this.$emit("changeView", view);
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.v-toolbar-title {
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
}
.v-toolbar-title .subtitle {
  font-size: 0.8rem;
  font-weight: normal;
  opacity: 0.8;
}
.countdown-label {
  font-size: 0.9rem;
  opacity: 0.85;
  letter-spacing: 0.5px;
}
.view-buttons .v-btn {
  transition: background-color 0.2s ease, transform 0.15s ease;
  margin-left: 0px;
  margin-right: 8px;
}
.view-buttons .v-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}
.view-buttons .v-btn.active {
  background-color: rgba(255, 255, 255, 0.25);
}

</style>
