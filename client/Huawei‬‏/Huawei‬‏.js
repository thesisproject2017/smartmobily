var app = angular.module('MobileSmart.Huawei', []);

app.controller('Huawei‬‏Ctrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.mobile = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.temp = {};
	$scope.getHuaweiMobiles = function(Huawei) {
		serv.getMobileByCompanyName(Huawei).then(function(data) {
			console.log(data)
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
		})
		.catch(function(error) {
			console.error(error);
		});
	};

		$scope.getComments = ()=>{
		serv.getComments().then((data)=>{
			$scope.resevecomment = data;
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertcomment = ()=>{
		serv.insertComment($scope.comments).then(()=>{
			$scope.getComments();
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertReply = (id,username)=>{
		$scope.Reply.id = id;
		$scope.Reply.username = username
		serv.insertReply($scope.Reply).then(()=>{
			$scope.getComments()
		})
		.catch((error)=> {
			console.error(error);
		})
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
