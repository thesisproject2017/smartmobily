var mongoose = require('mongoose');

var mobileSchema = new mongoose.Schema({
	company :{
		type : String,
		require : true,
		unique : true
	},
	name : {
		type :String
	},
	color : String,
	os:String,
	size:String,
	camera:String,
	battery:String,
	memory:String,
	processor:String,
	display:String
});

var Mobile = mongoose.model('Mobile', mobileSchema);
module.exports = Mobile;