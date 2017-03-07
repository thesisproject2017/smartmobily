var Users=require('./usersModel.js');
var jwt = require('jwt-simple');

module.exports={
	signup: function(req, res, next) {
		var username=req.body.username;
		var password=req.body.password;
		var email=req.body.email;
		Users.findOne({username: username})
		.then(function(user) {
			if(user) {
				next(new Error('user already exist'));
			}else{
				 return Users.create({username: username, password: password, email: email});
			}
		})
		.then(function(user) {
  // create token
  var token=jwt.encode(user, 'secret');
  	res.json({token: token});
		});
	},
	signin: function(req, res, next) {
		var username=req.body.username;
		var password=req.body.password;
		Users.findOne({username: username})
		.then(function(user){
			if(!user) {
				next(new Error('user does not exist'));
			}else{
		var token=jwt.encode(user, 'secret');
		res.json({token: token});

			}
		});
	},
};
