var app = angular.module('MobileSmart.signin', []);

app.controller('signinCtrl', function($scope, $window, $location, serv) {
 $scope.user = {};
  $scope.signin = function() {
    serv.signin($scope.user)
    .then(function(token) {
      $window.localStorage.setItem('MobileSmart', token);
      $location.path('/#/Apple');
    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
