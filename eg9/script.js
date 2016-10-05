var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope) {
  $scope.countries = [
    { "name": "Egypt", "capital": "Cairo", "population": 7000000 },
    { "name": "New Zealand", "capital": "Wellington", "population": 240000 },
    { "name": "Vietnam", "capital": "Saigon", "population": 8000000 }
  ];
});