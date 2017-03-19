angular.module('MobileSmart.services', [])

.factory('serv', ($http, $location, $window)=> {
	return {

		
        getAllMobile: ()=> {
			return $http({
				method: 'GET',
				url: '/api/mobilesAll/'
			})
			.then((resb)=> {
				return resb.data;
			});
		},



		getMobileByCompanyName: (company)=> {
			return $http({
				method: 'GET',
				url: '/api/mobiles/'+company
			})
			.then((resb)=> {
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
			console.log(mobilename)
			return $http({
				method:'GET',
				url:'/api/getmobile/' +  mobilename.name 
			})
			.then(function(resp){
				return resp.data
			})




		},

		editMobile :function(mobile){
			console.log(mobile)
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
         console.log(mobile)
         return $http({
         	method:'POST',
				url:'/api/remove/',
				data:mobile
         })
         .then(function(resp){
				return resp.data
			})



		},

		signin: (user)=> {

			return $http({
				method: 'POST',
				url: '/api/users/signin',
				data: user
			})
			.then((resp)=> {
				return resp.data;
			});
		},

		signup: (user)=> {
			return $http({
				method: 'POST',
				url: '/api/users/signup',
				data: user
			})
			.then((resp)=> {
				return resp.data.token;
			});
		},

		isAuth: ()=> {
			return !!$window.localStorage.getItem('MobileSmart');
		},

		signout: ()=> {
			$window.localStorage.removeItem('MobileSmart');
			$location.path('/signin');
		},
		insertComment: (comment)=>{
			return $http({
				method : 'POST',
				url : '/api/comment/comment',
				data: comment,
				token : $window.localStorage.getItem('MobileSmart')
			})
			.then((res)=>{
				return res.data.comment;
			})
		},

		getComments : (company)=>{
			
			return $http({
				method : 'GET',
				url : '/api/comment/comment/'+company
			})
			.then((res)=>{
				return res.data
			})
		},

		insertReply : (data)=>{
			return $http({
				method:"POST",
				url:'/api/reply/reply/',
				data : data,
				token:$window.localStorage.getItem('MobileSmart')
			})
			.then((res)=>{
				return res.data
			})
		}
	};
});