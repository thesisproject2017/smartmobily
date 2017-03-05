var app = angular.module('MobileSmart.Samsung', []);

app.controller('SamsungCtrl', function ($scope, serv){
	$scope.Mobiles = [];
	$scope.getSumsungMobiles = function(Samsung){
		serv.getMobileByCombanyName(name).then(function(data){
			for(var i = 0 ; i< data.length; i++){
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function (error) {
			console.error(error)
		})
	}
})