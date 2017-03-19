let mongoose=require('mongoose');

let feedSchema = new mongoose.Schema({
	username:String,

	name :String,
	email: String
});


var feed = mongoose.model('feed', feedSchema );
module.exports=feed;
