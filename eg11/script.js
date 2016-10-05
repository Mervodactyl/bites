var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", ["$scope", "$http", function(scope, http) {
  http.get("countries.json").success(function(data) {
    scope.countries = data;
  });
}]);