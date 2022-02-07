angular.module("appModule").controller("homeController", homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.loading = false;
  homePageVm.totalPages = null;

  activate();

  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }

  ///Load More Controller
  homePageVm.loadMore = function () {
    homePageVm.pagesShown = 10;
    homePageVm.loading = true;
    Employees.loadMoreEmployees(homePageVm.pagesShown).then(({ data }) => {
      homePageVm.loading = false;
      homePageVm.totalPages = data.pages;
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.pagesShown = +5;
    });
  };
}
