var app = angular.module('MobileSmart.Huawei', []);

app.controller('Huawei‬‏Ctrl', function($scope, serv,$window) {
	$scope.Mobiles;
	$scope.comments = {};
	$scope.resevecomment = [];
	$scope.Reply = {};
	$scope.mobile = [];
	$scope.signinFirst = false;
	$scope.displayReply = false;
	$scope.load = false;

	$scope.getHuaweiMobiles = function (Huawei) {
		serv.getMobileByCompanyName(Huawei).then(function (data) {
			$scope.Mobiles=[];
			for(var i = 0; i< data.length; i++) {
				$scope.Mobiles.push(data[i]);
				$scope.getComments();
			}
		})
		.catch(function(error) {
			console.error(error);
		});
	};
	$scope.getComments = function(){
		serv.getComments($scope.Mobiles[0].company).then(function (data){
			$scope.load = false;

			$scope.resevecomment = data;
		})
		.catch(function (error) {
			console.error(error);
		})
	};

	$scope.insertcomment = function (signinFirst){
		var token = $window.localStorage.getItem('MobileSmart');
		if(token){
			$scope.signinFirst = false;
			$scope.comments.company = $scope.Mobiles[0].company
			serv.insertComment($scope.comments).then(function(){
				$scope.getComments();	
			})
			.catch(function(error){
				console.error(error);
			})
		}else{
			$scope.signinFirst = true		
		}
	};


	$scope.insertReply = function (id,username){
		var token = $window.localStorage.getItem('MobileSmart');
		if(token){
			$scope.load = true;
			$scope.displayReply = false;
			$scope.Reply.id = id;
			$scope.Reply.username = username
			serv.insertReply($scope.Reply).then(function (){
				$scope.getComments()
			})
			.catch(function (error) {
				console.error(error);
			})
		}else{
			$scope.displayReply = true;

		}
	};

	$scope.viewMobile = function (id){
		var mop = $scope.Mobiles;

		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.mobile = mop[i];
			}
		}
	}
});
