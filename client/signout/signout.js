var app = angular.module('MobileSmart.signout', [])
 app.controller('signoutCtrl', function($scope, $location, serv) {
 	serv.signout();
 });
