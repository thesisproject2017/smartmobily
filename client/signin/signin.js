var app = angular.module('MobileSmart.signin', []);

app.controller('signinCtrl', function ($scope, $window, $location, serv) {
 $scope.user = {};
console.log('in')
  $scope.signin = function () {
    serv.signin($scope.user)
    .then(function (token) {
    	console.log(token)
      $window.localStorage.setItem('MobileSmart', token);
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    })
  }
})
