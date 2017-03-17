var app=angular.module('MobileSmart.add',[]);
app.controller('addMobilesCtrl',function($scope,serv){
	$scope.mobileadded={};
	$scope.Success = false;
	
	$scope.addMobile=function(){
		serv.insertMobile($scope.mobileadded).then(function(data){
			console.log(data)
			$scope.Success = true;
			$scope.mobileadded=data;
			
		})
		.catch(function(error) {

			console.error(error);
		});
	}
});