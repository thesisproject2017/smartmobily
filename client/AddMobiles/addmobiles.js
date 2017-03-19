var app=angular.module('MobileSmart.add',[]);
app.controller('addMobilesCtrl',function($scope,serv){
	$scope.mobileadded={};
	$scope.Success = false;
	$scope.fail = false;
	$scope.edited={};
	$scope.editMobile={}
	$scope.mobiledata;

	
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
	},
	$scope.editmob=function(){
		console.log($scope.edited)
		serv.editMobile($scope.edited).then(function(data){
			console.log("done")
			
		})
		
	},
	$scope.getMobile=function(){
		serv.getMobile($scope.editMobile).then(function(data){
			
			$scope.mobiledata=data
			console.log($scope.mobiledata)
			$scope.edited.company = data.company
			$scope.edited.name=data.name
			$scope.edited.battery=data.battery
			$scope.edited.color=data.color
			$scope.edited.os=data.os
			$scope.edited.size=data.size
			$scope.edited.camera=data.camera
			$scope.edited.memory=data.memory
			$scope.edited.processor=data.processor
			$scope.edited.image=data.image
			$scope.edited.display=data.display
			$scope.edited.id=data._id
		})
	}
});
