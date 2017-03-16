var app = angular.module('MobileSmart.Samsung', []);

app.controller('SamsungCtrl', function($scope, serv,$window) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.mobile = [];
	$scope.ttt = false;

	$scope.getSamsungMobiles = function(Samsung) {
		serv.getMobileByCompanyName(Samsung).then(function(data) {
			console.log(data)
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
				$scope.getComments();
			}
		})
		.catch(function(error) {
			console.error(error);
		});
	};

	$scope.getComments = ()=>{
		serv.getComments($scope.Mobiles[0].company)
		.then((data)=>{
			$scope.resevecomment = data;
		})
		.catch((error)=> {
			console.error(error);
		})
	};

	$scope.insertcomment = (ttt)=>{

		let token = $window.localStorage.getItem('MobileSmart');

		if(token){
			$scope.ttt = false;
			$scope.comments.company = $scope.Mobiles[0].company
			serv.insertComment($scope.comments)
			.then(()=>{
				$scope.getComments();	
			})
			.catch((error)=> {
				console.error(error);
			})
		}else{
			$scope.ttt = true		
		}
	};

	$scope.insertReply = (id,username)=>{
		let token = $window.localStorage.getItem('MobileSmart');
		if(token){
			$scope.disReply = false;
		$scope.Reply.id = id;
		$scope.Reply.username = username
		serv.insertReply($scope.Reply).then(()=>{
			$scope.getComments()
		})
		.catch((error)=> {
			console.error(error);
		})
	}else{
			$scope.disReply = true;

	}
	};

	$scope.viewMobile = function(id){
		var mop = $scope.Mobiles,temp;

		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile.push(mop[i]);
			}
		}
	}

	$scope.popMobile = function(){
		$scope.mobile.pop();
	}
});
