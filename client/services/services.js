angular.module('MobileSmart.services', [])

.factory('serv', ($http, $location, $window)=> {
	return {

		getMobileByCompanyName: (company)=> {
			return $http({
				method: 'GET',
				url: '/api/mobiles/'+company
			})
			.then((resb)=> {
				return resb.data;
			});
		},
		
		signin: (user)=> {

			return $http({
				method: 'POST',
				url: '/api/users/signin',
				data: user
			})
			.then((resp)=> {
				return resp.data.token;
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

		getComments : ()=>{
			return $http({
				method : 'GET',
				url : '/api/comment/comment'
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