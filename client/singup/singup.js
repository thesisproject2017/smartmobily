'use strict';
 var app = angular.module('MobileSmart.singup', []);

app.controller('singupCtrl', function($scope, $window, $location, serv) {
 $scope.user = {};
console.log('x  in');
  $scope.signup = function() {
    serv.signup($scope.user)
    .then(function(token) {
    	console.log(token);
      $window.localStorage.setItem('MobileSmart', token);
      $location.path('/');
    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
