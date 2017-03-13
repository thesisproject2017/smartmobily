let Comment = require('./comment.js');
let jwt = require('jwt-simple');

module.exports = {
   insertComment: (req, res)=> {
    let token = req.headers['x-access-token']
    token = jwt.decode(token,'secret')
    let newComment = new Comment({
        username: token.split('&')[1],
        comment: req.body.comment,
        
        reply : req.body.Reply
    });
    newComment.save((err, newComment)=> {
       // console.log('bingo')
       if(err) {
        res.status(500).send(err);
    }else{
        res.json(newComment);
    }
});
},
getAllComments: (req, res)=> {
    Comment.find({}, (err, Allcomment)=> {
        if(err) {
            res.status(500).send('err');
        }else{
            res.json(Allcomment);
        }
    });
},
insertReply : (req,res)=>{
   let token = req.headers['x-access-token']
   token = jwt.decode(token,'secret')
   username: token.split('&')[1]
   // console.log(token,'im insert replye')
   Comment.findOneAndUpdate({_id:req.body.id},
    {$push:{reply:token.split('&')[1]+' & '+req.body.reply}}, {new: true},function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
        res.json(doc)  
    })
},
reseveReplys : (req, res)=>{
    //console.log(req.body,'im get reply')
    Comment.findOne({_id:req.body.id},(err,replys)=>{
        //console.log(replys)
        if(err){
            console.log(err)
        }else{
            res.json(replys)
        }
    })
}
}