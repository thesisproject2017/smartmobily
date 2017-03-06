let mongoose=require('mongoose');



let userSchema= new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,

	},
	password: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});


var Users=mongoose.model('Users', userSchema);
module.exports=Users;
