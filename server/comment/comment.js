let mongoose=require('mongoose');



let commentSchema = new mongoose.Schema({
	username:String,

	comment:String

//	email: String

	
});


var comment = mongoose.model('comment', commentSchema );
module.exports=comment;
