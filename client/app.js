angular.module('MobileSmart', [
	'MobileSmart.add',
	'MobileSmart.main',
	'MobileSmart.services',
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
	.when('/', {
		templateUrl: 'main/main.html',
		controller: 'mainCtrl'
	})
	.when('/AddMobiles', {
		templateUrl: 'AddMobiles/addmobiles.html',
		controller: 'addMobilesCtrl'
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