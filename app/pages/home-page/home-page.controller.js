angular.module("appModule").controller("homeController", homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];

  activate();

  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }

  ///Load More Controller
  homePageVm.loadMore = function () {
    homePageVm.pagesShown = 10;
    Employees.loadMoreEmployees(homePageVm.pagesShown).then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.pagesShown = +5;
    });
  };
}
