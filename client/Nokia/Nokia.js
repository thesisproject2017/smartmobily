var app=angular.module('MobileSmart.Nokia', []);
app.controller('NokiaCtrl', function($scope, serv) {
	$scope.Mobiles=[];
	$scope.getNokiaMobiles=function(Nokia) {
		serv.getMobileByCompanyName(Nokia)
		.then(function(data) {
			for(let i=0; i<data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function(err) {
			console.log(err);
		});
	};
});
