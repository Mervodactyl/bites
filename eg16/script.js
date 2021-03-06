var countryApp = angular.module("countryApp", ["ngRoute"]);

countryApp.config(function($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "templates/name.html",
    controller: "CountryListCtrl"
  }).
  when("/:countryName", {
    templateUrl: "templates/details.html",
    controller: "CountryDetailCtrl"
  }).
  otherwise({
    redirectTo: "/"
  });
});

countryApp.controller("CountryListCtrl", function ($scope, $http){
  $http.get("countriesImg.json").success(function(data) {
    $scope.countries = data;
  });
});

countryApp.controller("CountryDetailCtrl", function ($scope, $routeParams){
  console.log($routeParams);
});

