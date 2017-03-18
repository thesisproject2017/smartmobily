var app=angular.module('MobileSmart.add',[]);
app.controller('addMobilesCtrl',function($scope,serv){
	$scope.mobileadded={};
	$scope.Success = false;
	$scope.fail = false;
	
	$scope.addMobile=function(){
		serv.insertMobile($scope.mobileadded).then(function(data){
			console.log(data)
			$scope.Success = true;
			$scope.fail = false
			$scope.mobileadded=data;
			
		})
		.catch(function(error) {
			$scope.fail = true;
			console.error(error);
		});
	}
});