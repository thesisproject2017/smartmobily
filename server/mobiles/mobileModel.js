let mongoose = require('mongoose');

let mobileSchema = new mongoose.Schema({
	company: String,
	name: {
		type: String,
		unique: true,
	},
	color: String,
	os: String,
	size: String,
	camera: String,
	battery: String,
	memory: String,
	processor: String,
	image: String,
	display: String,
});

let Mobile = mongoose.model('Mobile', mobileSchema);
module.exports = Mobile;
