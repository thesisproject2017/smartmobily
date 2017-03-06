angular.module("MobileSmart.services", [])


.factory("serv", function ($http, $location, $window) {
	return {
		getMobileByCompanyName :function(company){
			return $http({
				method:'GET',
				url:'/api/mobiles/'+company
			})
			.then(function(resb){
				console.log(resb.data)
				return resb.data;
			})
		}
	}
	
})