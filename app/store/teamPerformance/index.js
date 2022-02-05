import axios from "axios";
export default {
  state: {
    chartPerformance: [],
    date: {},
  },

  mutations: {
    Set_ChartPerformance(state, chartPerformance) {
      state.chartPerformance = chartPerformance;
    },
  },

  getters: {
    allChartPerformance: (state) => state.chartPerformance,

    // filterChartPerformance: (state, date) => (date) => {
    //   return state.chartPerformance.filter(
    //     (item) => chartPerformance.item === item.date
    //   );

    //   console.log("this is item", item);
    // },
  },

  actions: {
    getChartPerformance({ commit }) {
      axios
        .get("https://fe-task.getsandbox.com/performance")
        .then((response) => {
          commit("Set_ChartPerformance", response.data);
        });
    },
  },
};
