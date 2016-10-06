var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", ["$scope", "$http", function(scope, http) {
  http.get("countriesImg.json").success(function(data) {
    scope.countries = data;

    $scope.sortfield = "population";
    $scope.reverse = true;

  });

}]);