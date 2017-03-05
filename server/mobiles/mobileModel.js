var mongoose = require('mongoose');

var mobileSchema = new mongoose.Schema({
	company : String,
	name :{
		type:String,
		unique: true
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