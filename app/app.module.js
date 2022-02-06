import Vue from "vue";
import store from "./store/index";

import { DatePicker } from "element-ui";
Vue.component(DatePicker.name, DatePicker);
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

// configure language
locale.use(lang);

// import ElementUI from "element-ui";
// import "@/element-ui/lib/theme-chalk/index.css";
// import locale from "element-ui/lib/locale/lang/en";
// Vue.use(ElementUI, { locale });

import "ngVue";
import "ngVue/build/plugins.js";
import PerformancePageComponent from "./pages/performance-page.vue";
import NotFoundPageComponent from "./pages/not-found-page.vue";
import PerformanceChartComponent from "./components/vue-components/performance-chart.vue";

angular
  .module("appModule", ["ui.router", "ngVue", "ngVue.plugins"])
  .config(($ngVueProvider) => {
    $ngVueProvider.setRootVueInstanceProps({ store: store });
  });

angular.module("appModule").directive("vNotFoundPage", (createVueComponent) => {
  return createVueComponent(
    Vue.component("NotFoundPageComponent", NotFoundPageComponent)
  );
});

angular
  .module("appModule")
  .directive("vPerformancePage", (createVueComponent) => {
    return createVueComponent(
      Vue.component("performancePageComponent", PerformancePageComponent)
    );
  });

angular
  .module("appModule")
  .directive("vPerformanceChart", (createVueComponent) => {
    return createVueComponent(
      Vue.component("performanceChartComponent", PerformanceChartComponent)
    );
  });
