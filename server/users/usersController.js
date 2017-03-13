var Users=require('./usersModel.js');
var jwt = require('jwt-simple');
var Q = require('q');

var findUser = Q.nbind(Users.findOne, Users);
var createUser = Q.nbind(Users.create, Users);
module.exports={
	signup: function(req, res, next) {
		var username=req.body.username;
		var password=req.body.password;
		console.log(username,'im in ctrl')

		 console.log(password,'im in pass')
		var email=req.body.email;
		findUser({username: username})
		.then(function(user) {
			console.log(user,'im hear')
			if(user) {
				next(new Error('user already exist'));
			}else{
				return createUser({username: username, password: password, email: email});
			}
		})
		.then(function(user) {
  // create token
  var token=jwt.encode(user._id + '&'+ user.username, 'secret');
  res.json({token: token});
});
	},
	signin: function(req, res, next) {
		var username=req.body.username;
		var password=req.body.password;
		findUser({username: username})
		.then(function(user) {
			if(!user) {
				next(new Error('user does not exist'));
			}else{
				user.comparePasswords(password)
				.then(function (foundUser) {
					if (foundUser) {
						console.log(foundUser,'ding')
						var token=jwt.encode(user._id + "&"+user.username, 'secret');
						res.json({token: token, username:req.body.username});
					} else {
						return console.log('No user')
					}
				})
			}
		})
	}
}
