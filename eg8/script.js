var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope) {
  $scope.names = [
    "Mervé",
    "Clint",
    "Owain"
  ];

  $scope.addName = function() {
    $scope.names.push($scope.newName);
    $scope.newName = "";
  };

  $scope.removeName = function(name) {
    var i = $scope.names.indexOf(name);
    $scope.names.splice(i, 1);
  };

});