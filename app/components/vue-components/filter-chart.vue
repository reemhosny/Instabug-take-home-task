<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      @change="filterChartPerformance()"
    >
    </el-date-picker>
  </div>
</template>

<script>
import store from "../../store/index";
export default {
  name: "filterChartComponent",

  data() {
    return {
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "This month",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            },
          },
          {
            text: "This year",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last 6 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  computed: {
    chartPerformance() {
      return store.getters.allChartPerformance;
    },
  },
  methods: {
    filterChartPerformance() {
      if (this.value) {
        return this.chartPerformance.filter((item) => {
          console.log("item", item.date_ms);
          return item.date_ms;
        });
      } else {
        return this.chartPerformance;
      }
    },
  },
};
</script>
