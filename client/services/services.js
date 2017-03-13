angular.module('MobileSmart.services', [])


.factory('serv', function($http, $location, $window) {
	return {
		getMobileByCompanyName: function(company) {
			return $http({
				method: 'GET',
				url: '/api/mobiles/'+company,
			})
			.then(function(resb) {
				return resb.data;
			});
		},
		insertMobile:function(mobile){
			return $http({
				method:'POST',
				url: '/api/mobiles/',
				data:mobile
			})
			.then(function(resp){
				console.log(resp.data)
				return resp.data
			})

		},
		signin: function(user) {
			return $http({
				method: 'POST',
				url: '/api/users/signin',
				data: user,
			})
			.then(function(resp) {
				return resp.data.token;
			});
		},
		signup: function(user) {
			return $http({
				method: 'POST',
				url: '/api/users/signup',
				data: user,
			})
			.then(function(resp) {
				return resp.data.token;
			});
		},
		isAuth: function() {
			return !!$window.localStorage.getItem('MobileSmart');
		},

		signout: function() {
			$window.localStorage.removeItem('MobileSmart');
			$location.path('/signin');
		},
		insertComment: (comment)=>{
			return $http({
				method : 'POST',
				url : '/api/comment/comment',
				data: comment,
				token : $window.localStorage.getItem('MobileSmart')
			}).then((res)=>{
				return res.data.comment;
			})
		},
		getComments : ()=>{
			return $http({
				method : 'GET',
				url : '/api/comment/comment'
			}).then((res)=>{
				return res.data
			})
		},
		insertReply : (data)=>{
			console.log(data)
			return $http({
				method:"POST",
				url:'/api/comment/comments/',
				data : data,
				token:$window.localStorage.getItem('MobileSmart')
			}).then((res)=>{
				console.log('res.data')
				return res.data
			})
		},
		getAllReply : (data)=>{
			console.log(data)
			return $http({
				method:'GET',
				url:'/api/comment/comments/',
				data:data
			})
			.then((res)=>{
				return res.data
			})
		}

	};
});


