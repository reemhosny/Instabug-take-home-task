angular.module("appModule").controller("homeController", homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.loading = false;
  homePageVm.totalPages = null;
  homePageVm.searchText = "";

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

  ///Search Employees

  homePageVm.filterList = function (text) {
    if (homePageVm.searchText) {
      return homePageVm.employees.filter((item) => {
        console.log(" item.profile", item.profile);
        return homePageVm.searchText
          .toLowerCase()
          .split(" ")
          .every((v) => item.profile.name.toLowerCase().includes(text));
      });
    } else {
      return homePageVm.employees;
    }
  };
}
