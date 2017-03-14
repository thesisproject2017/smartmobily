var app = angular.module('MobileSmart.Samsung', []);

app.controller('SamsungCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.mobile = [];
	$scope.getSumsungMobiles = function(Samsung) {
		serv.getMobileByCompanyName(Samsung).then(function(data) {
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function(error) {
			console.error(error);
		});
	};

	$scope.viewMobile = function(id){

		var mop = $scope.Mobiles,temp;
		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile.push(mop[i])
			}
		}
	}

	$scope.popMobile = function(){
		$scope.mobile.pop()
	}
});
