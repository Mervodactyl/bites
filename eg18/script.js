var countryApp = angular.module("countryApp", ["ngRoute"]);

countryApp.config(function($routeParams) {
  $routeParams
});


countryApp.controller("CountryListCtrl", ["$scope", "$http", function(scope, http) {
  http.get("countries.json").success(function(data) {
    scope.countries = data;
  });
}]);