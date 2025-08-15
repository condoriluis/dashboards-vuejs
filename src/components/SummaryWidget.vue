<template>
  <v-card class="summary-widget elevation-6" :style="{ background: bgColor }">
    <v-row no-gutters align="center">
      <v-col cols="auto" class="icon-col">
        <div class="icon-bg elevation-3" :style="{ background: iconBgColor }">
          <v-icon size="40" color="white">{{ icon }}</v-icon>
        </div>
      </v-col>
      <v-col>
        <div class="label-row d-flex align-center mb-1">
          <span class="summary-label font-weight-bold text-uppercase">{{ title }}</span>
          <v-icon v-if="trendIcon" :color="trendColor" size="20" class="ml-2 animate-trend">{{ trendIcon }}</v-icon>
        </div>
        <div class="summary-value text-h4 font-weight-bold mb-1">{{ value }}</div>
        <v-progress-linear
          v-if="showProgress"
          :model-value="progressValue"
          :color="progressColor"
          height="8"
          class="mt-2 rounded-pill progress-bar-custom"
          rounded
          background-opacity="0.12"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.summary-widget {
  min-width: 240px;
  border-radius: 18px;
  background: linear-gradient(135deg, #fff 70%, #f6f7fb 100%);
  box-shadow: 0 4px 20px 0 rgba(115,103,240,0.08), 0 1.5px 4px 0 rgba(44,62,80,0.04);
  transition: box-shadow 0.2s;
}
.summary-widget:hover {
  box-shadow: 0 8px 32px 0 rgba(115,103,240,0.15), 0 3px 8px 0 rgba(44,62,80,0.07);
}
.icon-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
}
.icon-bg {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px 0 rgba(115,103,240,0.15);
  transition: transform 0.18s;
}
.summary-widget:hover .icon-bg {
  transform: scale(1.08) rotate(-3deg);
}
.summary-label {
  font-size: 0.98rem;
  letter-spacing: 1px;
  color: #6c757d;
}
.summary-value {
  color: #222;
  letter-spacing: 0.5px;
  line-height: 1.1;
}
.progress-bar-custom {
  box-shadow: 0 1px 4px 0 rgba(115,103,240,0.08);
}
.animate-trend {
  animation: trend-pop 0.7s cubic-bezier(.4,2,.6,1.2);
}
@keyframes trend-pop {
  0% { transform: scale(0.7) rotate(-20deg); opacity: 0.2; }
  60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
</style>


<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
  icon: String,
  iconBgColor: { type: String, default: '#7367F0' },
  bgColor: { type: String, default: 'linear-gradient(135deg, #fff 70%, #f6f7fb 100%)' },
  showProgress: { type: Boolean, default: false },
  progressValue: { type: Number, default: 0 },
  progressColor: { type: String, default: 'primary' },
  trendIcon: String,
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
