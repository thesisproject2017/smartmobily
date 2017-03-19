var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv,$window) {
	$scope.Mobiles;
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.mobile = {};
	$scope.signinFirst = false;
	$scope.displayReply = false;
	$scope.load = false;

	$scope.getAppleMobiles = (Apple)=> {
		serv.getMobileByCompanyName(Apple).then((data)=> {
			$scope.Mobiles=[];
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
				$scope.getComments();
			}
		})
		.catch((error)=> {
			console.error(error);
		});
	};
	$scope.getComments = ()=>{
		serv.getComments($scope.Mobiles[0].company).then((data)=>{
			$scope.load = false;

			$scope.resevecomment = data;
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertcomment = (signinFirst)=>{
		let token = $window.localStorage.getItem('MobileSmart');
		if(token){
			$scope.signinFirst = false;
			$scope.comments.company = $scope.Mobiles[0].company
			serv.insertComment($scope.comments).then(()=>{
				$scope.getComments();	
			})
			.catch((error)=> {
				console.error(error);
			})
		}else{
			$scope.signinFirst = true		
		}
	};


	$scope.insertReply = (id,username)=>{
		let token = $window.localStorage.getItem('MobileSmart');
		if(token){
			$scope.load = true;
			$scope.displayReply = false;
		$scope.Reply.id = id;
		$scope.Reply.username = username
		serv.insertReply($scope.Reply).then(()=>{
			$scope.getComments()
		})
		.catch((error)=> {
			console.error(error);
		})
	}else{
			$scope.displayReply = true;

	}
	};

	$scope.viewMobile = (id)=>{
		var mop = $scope.Mobiles;
		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile=mop[i];
			}
		}
	}
});
