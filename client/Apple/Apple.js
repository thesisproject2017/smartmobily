var app = angular.module('MobileSmart.Apple', []);

app.controller('AppleCtrl', function ($scope, serv){
	$scope.Mobiles = [];

	$scope.getAppleMobiles = function(Apple){
console.log(Apple)
		serv.getMobileByCompanyName(Apple).then(function(data){
			for(var i = 0 ; i< data.length; i++){
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function (error) {
			console.error(error)
		})
	}
	//$scope.getAppleMobiles('Apple')
})