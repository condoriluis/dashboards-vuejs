<template>
  <v-card class="summary-widget" elevation="2">
    <v-row no-gutters align="center">
      <v-col cols="auto" class="icon-col">
        <div class="icon-bg" :style="{ background: iconBgColor }">
          <v-icon size="36" color="white">{{ icon }}</v-icon>
        </div>
      </v-col>
      <v-col>
        <div class="label-row">
          <span class="summary-label">{{ title }}</span>
          <v-icon v-if="trendIcon" :color="trendColor" size="20" class="ml-1">{{ trendIcon }}</v-icon>
        </div>
        <div class="summary-value">{{ value }}</div>
        <v-progress-linear
          v-if="showProgress"
          :model-value="progressValue"
          :color="progressColor"
          height="6"
          class="mt-2 rounded-pill"
          rounded
          background-opacity="0.15"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
  icon: String,
  iconBgColor: { type: String, default: '#7367F0' },
  showProgress: { type: Boolean, default: false },
  progressValue: { type: Number, default: 0 },
  progressColor: { type: String, default: 'primary' },
  trendIcon: String, // mdi-arrow-up, mdi-arrow-down
  trendColor: { type: String, default: 'success' }
});
</script>

<style scoped>
.summary-widget {
  border: none;
  border-radius: 18px;
  min-height: 110px;
  transition: box-shadow 0.2s;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(115,103,240,.07);
}
.icon-col {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
}
.icon-bg {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7367F0;
  box-shadow: 0 2px 8px 0 rgba(115,103,240,.13);
}
.summary-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #82868b;
  letter-spacing: 0.5px;
}
.summary-value {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-top: 2px;
}
.label-row {
  display: flex;
  align-items: center;
  gap: 4px;
}
@media (max-width: 600px) {
  .summary-widget {
    min-height: 90px;
    padding: 12px 10px;
  }
  .icon-bg {
    width: 40px;
    height: 40px;
  }
  .summary-value {
    font-size: 1.3rem;
  }
}
</style>
