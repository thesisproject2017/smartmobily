angular.module("MobileSmart.services", [])


.factory("serv", function ($http, $location, $window) {
	return {
		getMobileByCombanyName :function(combany){
			return $http({
				method:'GET',
				url:'/api/mobiles/'+combany
			})
			.then(function(resb){
				return resb.data;
			})
		}
	}
	
})