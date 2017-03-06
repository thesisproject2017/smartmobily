angular.module('MobileSmart.services', [])


.factory('serv', function($http, $location, $window) {
	return {
		getMobileByCompanyName: function(company) {
			return $http({
				method: 'GET',
				url: '/api/mobiles/'+company,
			})
			.then(function(resb) {
				console.log(resb.data);
				return resb.data;
			});
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

	};
});


