angular.module("MobileSmart",[
	"MobileSmart.services",
	"MobileSmart.Samsung",
	"MobileSmart.Apple",
	"MobileSmart.Huawei",
	"ngRoute"
	])

.config(function($routeProvider, $httpProvider,$locationProvider) {
	$routeProvider
	.when("/Samsung", {
		templateUrl: "Samsung/Samsung.html",
		controller: "SamsungCtrl",	
	})
	.when("/Apple", {
		templateUrl: "./Apple/Apple.html",
		controller: "AppleCtrl",	
	})
	.when("/Huawei", {
		templateUrl: "Huawei‬‏/Huawei‬‏.html",
		controller: "Huawei‬‏Ctrl",	
	})

	.otherwise({redirectTo:"/"})
})
