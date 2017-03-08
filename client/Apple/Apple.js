var app = angular.module('MobileSmart.Apple', [])

app.controller('AppleCtrl', function($scope, serv) {
	$scope.Mobiles = [];
	$scope.comments = {};
	$scope.resevecomment = [];
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
			$scope.resevecomment = data
		})
		.catch(function(error) {
			console.error(error);
		});

	}

	$scope.insertcomment = function(){
		serv.insertComment($scope.comments).then((data)=>{
			$scope.resevecomment.push(data.comment)
			$scope.getComments();

		}).catch(function(error) {
			console.error(error);
		});
	}
});
