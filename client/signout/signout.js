var app = angular.module('MobileSmart.signout', [])
 app.controller('signoutCtrl', function($scope, $location, serv) {
 	console.log('1');
 	serv.signout();
	console.log('2');
 });
