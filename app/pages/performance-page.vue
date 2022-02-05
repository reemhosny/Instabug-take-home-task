<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <filterChartComponent />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import filterChartComponent from "../components/vue-components/filter-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    filterChartComponent,
  },
};
</script>
