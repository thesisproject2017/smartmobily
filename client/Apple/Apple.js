var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.mobile = [];

	$scope.getAppleMobiles = function (Apple) {
		serv.getMobileByCompanyName(Apple).then((data)=> {
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
			$scope.getComments();
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.getComments = ()=>{
		serv.getComments($scope.Mobiles[0].company).then((data)=>{
			$scope.resevecomment = data;
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertcomment = ()=>{
		$scope.comments.company = $scope.Mobiles[0].company
		serv.insertComment($scope.comments).then(()=>{
			$scope.getComments();
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertReply = (id)=>{
		$scope.Reply.id = id;
		serv.insertReply($scope.Reply).then(()=>{
			$scope.getComments()
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.viewMobile = (id)=>{
		var mop = $scope.Mobiles
		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile.push(mop[i])
			}
		}
	}

	$scope.popMobile = ()=>{
		$scope.mobile.pop()
	}
});
