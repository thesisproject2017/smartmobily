var app=angular.module('MobileSmart.main',[]);
app.controller('mainCtrl',function($scope, serv,$window){
    $scope.Mobiles = [];
	$scope.mobile = [];
	$scope.getAllMobiles = ()=> {
		serv.getAllMobile().then((data)=> {
			var len = data.length
			for(let i = len-1; i>= len-3; i--) {
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch((error)=> {
			console.error(error);
		});
	};
	$scope.viewMobile = (id)=>{
		var mop = $scope.Mobiles;

		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile.push(mop[i]);
			}
		}
	}
	$scope.popMobile = ()=>{
		$scope.mobile.pop();
	}
});
