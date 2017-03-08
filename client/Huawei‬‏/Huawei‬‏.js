var app = angular.module('MobileSmart.Huawei', []);

app.controller('Huawei‬‏Ctrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.getHuaweiMobiles = function(Huawei) {
		console.log(Huawei);
		serv.getMobileByCompanyName(Huawei).then(function(data) {
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function(error) {
			console.error(error);
		});
	};
});
