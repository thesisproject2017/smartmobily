var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.AllReply = [];
	$scope.names = {};
	$scope.temp = [];
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
			//console.log(data)
	// 		for(var i = 0 ;i<data.length;i++){
	// 			var din = data[i].reply
	// 			for(var k = 0; k<din.length;k++){
	// 			//console.log(din[k].split('&')[0])
	// 		$scope.names.name = din[k].split('&')[1]
	// 		$scope.temp.push(din[k].split('&')[0]) 					
	// 			}
	// }
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
	$scope.insertReply = (id,username)=>{
		//console.log(id)
		$scope.Reply.id = id;
		$scope.Reply.username = username
		serv.insertReply($scope.Reply).then(()=>{
			//console.log(data)
			$scope.getComments()
		})
	}
});
