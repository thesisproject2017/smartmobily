var app=angular.module('MobileSmart.add',[]);
app.controller('addMobilesCtrl',function($scope,serv){
	$scope.mobileadded={};
	$scope.addMobile=function(){
		serv.insertMobile($scope.mobileadded).then(function(data){
			console.log(data)
			$scope.mobileadded=data
			
		})
	}
});