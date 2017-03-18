let mongoose=require('mongoose'),
Schema = mongoose.Schema;
let Comment = require('../comment/comment.js')

let replySchema = new mongoose.Schema({
	username:String,

	reply:String,
	commantId:{type: mongoose.Schema.Types.ObjectId,
	  ref: 'comment'
	}
});


var reply = mongoose.model('reply', replySchema );
module.exports=reply;
