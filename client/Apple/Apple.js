var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.AllReply = [];
	$scope.getAppleMobiles = function(Apple) {
		serv.getMobileByCompanyName(Apple).then(function(data) {
			for(let i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
			}
			$scope.getComments()
		})
		.catch(function(error) {
			console.error(error);
		});
	},
	$scope.getComments = ()=>{
		serv.getComments().then((data)=>{
			console.log(data)
			$scope.resevecomment = data

		})
		.catch(function(error) {
			console.error(error);
		});

	}

	$scope.insertcomment = function(){
		//console.log($scope.comments)
		serv.insertComment($scope.comments).then(()=>{
			//$scope.resevecomment.push(data.comment,data.Reply)
			$scope.getComments();

		}).catch(function(error) {
			console.error(error);
		});
	}
	$scope.insertReply = (id)=>{
		//console.log(id)
		$scope.Reply.id = id;
		serv.insertReply($scope.Reply).then(()=>{
			//console.log(data)
			$scope.getComments()
		})
	}
	$scope.getAllReply = (id)=>{
		$scope.Reply.id = id;
		serv.getAllReply($scope.Reply).then((data)=>{
			console.log(data)
			$scope.AllReply = data
		})
	}
});
