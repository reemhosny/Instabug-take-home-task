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
  },

  actions: {
    getChartPerformance({ commit }) {
      axios
        .get("https://fe-task.getsandbox.com/performance")
        .then((response) => {
          commit("Set_ChartPerformance", response.data);
        });
    },
    // filterChartPerformance({commit}){
    //   state.getters.allChartPerformance.filter(item => {

    //   })
    // }
  },
};
