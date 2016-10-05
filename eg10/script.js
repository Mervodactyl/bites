var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope, $http) { // chrome cant cope with http cross origin requests
  $http.get("countries.json").success(function(data) {
    $scope.countries = data;
  });
});