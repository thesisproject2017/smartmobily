angular.module('MobileSmart', [
	'MobileSmart.services',
	'MobileSmart.Nokia',
	'MobileSmart.Samsung',
	'MobileSmart.Apple',
	'MobileSmart.Huawei',
	 'MobileSmart.signout',
	'MobileSmart.signin',
	'MobileSmart.singup',
	'ngRoute'
	])

.config(function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider
	.when('/Samsung', {
		templateUrl: 'Samsung/Samsung.html',
		controller: 'SamsungCtrl'
	})
	.when('/Apple', {
		templateUrl: 'Apple/Apple.html',
		controller: 'AppleCtrl'	
	})
	.when('/Huawei', {
		templateUrl: 'Huawei‬‏/Huawei‬‏.html',
		controller: 'Huawei‬‏Ctrl'	
	})
	.when('/Nokia', {
		templateUrl: 'Nokia/Nokia.html',
		controller: 'NokiaCtrl'	
	})
	.when('/signout', {
		template: '',
		controller: 'signoutCtrl',
	})
	.when('/singup', {
		templateUrl: 'singup/singup.html',
		controller: 'singupCtrl'
	})
	.when('/signin', {
		templateUrl: 'signin/signin.html',
		controller: 'signinCtrl'
	})
	.otherwise({redirectTo: "/"});


	$locationProvider.hashPrefix('');
	$httpProvider.interceptors.push('AttachTokens');
})


.factory('AttachTokens', function($window) {

	let attach = {
		request: function(object) {
			let jwt = $window.localStorage.getItem('MobileSmart');
			if (jwt) {
				object.headers['x-access-token'] = jwt;
			}
			object.headers['Allow-Control-Allow-Origin'] = '*'
			return object;
		},
	};
	return attach;

})
.run(function($rootScope, $location, serv) {

	$rootScope.$on('$routeChangeStart', function(evt, next, current) {
		if (next.$$route && next.$$route.authenticate && !serv.isAuth()) {
			$location.path('/signin');
		}
	});
});