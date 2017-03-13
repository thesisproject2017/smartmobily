var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.AllReply = [];
	$scope.names = {};
	$scope.temp = {};

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
});
