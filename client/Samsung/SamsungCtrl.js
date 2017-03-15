var app = angular.module('MobileSmart.Samsung', []);

app.controller('SamsungCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.mobile = [];
	$scope.Reply = {};
	$scope.resevecomment = [];
	$scope.comments = {};
	$scope.Reply = {};
	$scope.getSumsungMobiles = function(Samsung) {
		serv.getMobileByCompanyName(Samsung).then(function(data) {
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
				$scope.getComments()
		})
		.catch(function(error) {
			console.error(error);
		});
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

	$scope.insertReply = (id,username)=>{
		console.log(id)
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

		var mop = $scope.Mobiles
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
