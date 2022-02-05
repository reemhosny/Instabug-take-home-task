import Vue from "vue";
import Vuex from "vuex";
import teamPerformance from "./teamPerformance";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    teamPerformance,
  },
});

export default store;
