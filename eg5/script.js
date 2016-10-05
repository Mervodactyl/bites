var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope) {
  $scope.firstName = "Mervé";

  $scope.$watch("lastName", function(newValue, oldValue) {
    console.log("the new value is " + newValue);
  });

  setTimeout(function() {
    $scope.lastName = "Silk"
    $scope.apply(); // not a function
  }, 5000);
});