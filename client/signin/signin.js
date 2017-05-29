var app = angular.module('MobileSmart.signin', []);

app.controller('signinCtrl', function($scope, $window, $location, serv) {
$scope.user = {};
$scope.chakUser = false;

$scope.signin = function() {
 serv.signin($scope.user)
    .then(function(token) {
       $scope.chakUser = false;
         if(token.username==='admin'){
           $window.localStorage.setItem('admin', token.token);
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