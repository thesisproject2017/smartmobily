let mongoose=require('mongoose'),
	Schema = mongoose.Schema;
let reply = require('../reply/reply.js')

let commentSchema = new mongoose.Schema({
	username:String,
	comment:String,
	reply:Array
});

var comment = mongoose.model('comment', commentSchema );
module.exports=comment;
