var countryApp = angular.module("countryApp", ["ngRoute"]);

countryApp.config(function($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "templates/countryList.html",
    controller: "CountryListCtrl"
  }).
  when("/:countryName", {
    templateUrl: "templates/countryDetails.html",
    controller: "CountryDetailsCtrl"
  }).
  otherwise({
    redirectTo: "/"
  });
});

countryApp.controller("CountryListCtrl", ["$scope", "$http", function(scope, http) {
  http.get("countries.json").success(function(data) {
    scope.countries = data;
  });
}]);

countryApp.controller("CountryDetailsCtrl", function($scope, $routeParams) {
  $scope.name = $routeParams.countryName;
});