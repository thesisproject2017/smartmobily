var app = angular.module('MobileSmart.signin', []);

app.controller('signinCtrl', function($scope, $window, $location, serv) {
<<<<<<< HEAD
$scope.user = {};
 $scope.signin = function() {
   serv.signin($scope.user)
   .then(function(token) {
     if(token.username === 'admin'){
       // alert('admin is')
     $window.localStorage.setItem('MobileSmart', token.token);
         $window.location.href="/#/AddMobiles"

     }else{
     $window.localStorage.setItem('MobileSmart', token.token);
     $location.path("/")


     }
   })
   .catch(function(error) {
     console.error(error);
   });
 };
});
=======
 $scope.user = {};
 $scope.chakUser = false;
 
 $scope.signin = function() {
  serv.signin($scope.user)
     .then(function(token) {
        $scope.chakUser = false;
          if(token.username==='admin'){
            $window.localStorage.setItem('MobileSmart', token.token);
            $window.location.href='/#/AddMobiles'

          }else{
            $window.localStorage.setItem('MobileSmart', token.token);
            $location.path('/');

          }

        })
      .catch(function(error) {
        $scope.chakUser = true;
        console.error(error);
      });
  };
});
>>>>>>> 143a3132c753f09af36c0204b76b3040a9cd3e54
