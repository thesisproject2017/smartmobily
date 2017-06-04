'use strict';
 var app = angular.module('MobileSmart.singup', []);

app.controller('singupCtrl', function($scope, $window, $location, serv) {
    $scope.userIsExest =false;
    $scope.user = {};

  $scope.signup = function() {
    serv.signup($scope.user)
    .then(function(token) {
      $scope.userIsExest = false;
      $window.localStorage.setItem('MobileSmart', token);
      $location.path('/');
    })
    .catch(function(error) {
      if(error.status === 500){
        $scope.userIsExest = true;
        console.error(error);
      }
    });
  };
});
