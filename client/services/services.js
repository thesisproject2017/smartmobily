angular.module('MobileSmart.services', [])

.factory('serv', function ($http, $location, $window) {
	return {
        getAllMobile: function () {
			return $http({
				method: 'GET',
				url: '/api/mobilesAll/'
			})
			.then(function (resb) {
				return resb.data;
			});
		},

		getMobileByCompanyName: function(company) {
			return $http({
				method: 'GET',
				url: '/api/mobiles/'+company
			})
			.then(function (resb) {
				return resb.data;
			});
		},

		insertMobile:function(mobile){
			return $http({
				method:'POST',
				url: 'api/mobiles/',
				data:mobile
			})
			.then(function(resp){
				return resp.data
			})
		},

		getMobile:function(mobilename){
			return $http({
				method:'GET',
				url:'/api/getmobile/'+ mobilename.name 
			})
			.then(function(resp){
				return resp.data
			})
		},

		editMobile :function(mobile){
			return $http({
				method:'POST',
				url:'/api/edit/',
				data:mobile
			})
			.then(function(resp){
				return resp.data
			})
		},

		removeMobile :function(mobile){
         return $http({
         	method:'POST',
				url:'/api/remove/',
				data:mobile
         })
         .then(function(resp){
				return resp.data;
			})
		},

		signin: function (user) {
			return $http({
				method: 'POST',
				url: '/api/users/signin',
				data: user
			})
			.then(function (resp) {
				return resp.data;
			});
		},

		signup: function (user) {
			return $http({
				method: 'POST',
				url: '/api/users/signup',
				data: user
			})
			.then(function (resp) {
				return resp.data.token;
			});
		},

		isAuth: function () {
			return !!$window.localStorage.getItem('MobileSmart');
		},

		signout: function () {
			$window.localStorage.removeItem('MobileSmart');
			$location.path('/signin');
		},
		insertComment: function (comment){
			return $http({
				method : 'POST',
				url : '/api/comment/comment',
				data: comment,
				token : $window.localStorage.getItem('MobileSmart')
			})
			.then(function (res){
				return res.data.comment;
			})
		},

		getComments : function (company){
			return $http({
				method : 'GET',
				url : '/api/comment/comment/'+company
			})
			.then(function (res){
				return res.data;
			})
		},

		insertReply : function (data){
			return $http({
				method:"POST",
				url:'/api/reply/reply/',
				data : data,
				token:$window.localStorage.getItem('MobileSmart')
			})
			.then(function (res){
				return res.data
			})
		},
		insertNewfeed : function (newFeedes){
			return $http({
				method: 'POST',
				url: 'api/feeds/',
				data: newFeedes
			})
			.then(function (resp){
				console.log(resp);
			})
		}
	}
});