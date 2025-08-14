# Vue.js Modular Dashboard

Dashboard profesional y modular construido con Vue 3, Vuetify, Chart.js y arquitectura basada en composables.

## 🚀 Características principales
- **Arquitectura modular:** Separación clara entre vistas, componentes y lógica reutilizable (composables)
- **Gráficos interactivos:** Soporte para múltiples tipos de gráficos con Chart.js
- **Tablas dinámicas:** Consumo de datos en vivo desde APIs públicas, búsqueda y paginación
- **Widgets de resumen (KPIs):** Indicadores clave y métricas calculadas en tiempo real
- **UI profesional y responsiva:** Basada en Vuetify 3 y Material Design Icons
- **Actualización automática de datos:** Simulación de datos en tiempo real

## 📦 Instalación

```bash
npm install
```

## 🖥️ Ejecución del proyecto

```bash
npm run serve
```
Luego abre [http://localhost:8080](http://localhost:8080) en tu navegador.

## 🗂️ Estructura del proyecto
- `src/views/Dashboard.vue`: Vista principal y layout del dashboard
- `src/views/SummaryTableView.vue`: Vista de KPIs y tabla de comentarios
- `src/components/ChartWidget.vue`: Componente de gráfico reutilizable
- `src/components/SummaryWidget.vue`: Widget de resumen para KPIs
- `src/composables/`: Lógica reutilizable para tablas, gráficos y KPIs
- `src/plugins/vuetify.js`: Configuración de Vuetify

## 🔧 Personalización y escalabilidad
- Agrega fácilmente nuevos widgets, gráficos o tablas creando nuevos composables y componentes
- Integra tus propias APIs modificando los composables de datos
- La arquitectura permite añadir Vue Router para navegación avanzada

## 🤝 Créditos y dependencias
- [Vue.js 3](https://vuejs.org/)
- [Vuetify 3](https://vuetifyjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [Axios](https://axios-http.com/)
- [Material Design Icons](https://pictogrammers.com/library/mdi/)

---

¡Comienza a crear dashboards profesionales, modulares y escalables con Vue.js y Vuetify!
