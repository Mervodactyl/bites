var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope) {
  $scope.names = [
    "Mervé",
    "Owain",
    "Clint"
  ];
});