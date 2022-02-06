angular
  .module("appModule")
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: false,
    });
  })
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
      .state({
        name: "app",
        url: "/",
        templateUrl: "./pages/home-page/home-page.html",
        controller: "homeController",
        controllerAs: "homePageVm",
      })
      .state({
        name: "team-performance",
        url: "/team-performance",
        template: "<v-performance-page></v-performance-page>",
      })
      .state({
        name: "not-found-page",
        url: "/not-found-page",
        template: "<v-not-found-page></v-not-found-page>",
      });
    $locationProvider.hashPrefix("");
    $urlRouterProvider.otherwise("/not-found-page");
  });
