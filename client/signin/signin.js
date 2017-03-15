var app = angular.module('MobileSmart.signin', []);

app.controller('signinCtrl', function($scope, $window, $location, serv) {
 $scope.user = {};
  $scope.signin = function() {
    serv.signin($scope.user)
    .then(function(token) {
      if(token.username==='admin'){
     $window.localStorage.setItem('MobileSmart', token.token);
        $window.location.href='/#/AddMobiles'
        
      }else{
      $window.localStorage.setItem('MobileSmart', token.token);
      $location.path('/');

    }

  })
    .catch(function(error) {
      console.error(error);
    });
  };
});
