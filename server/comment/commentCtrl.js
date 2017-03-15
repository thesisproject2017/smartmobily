let Comment = require('./comment.js');
let Reply   = require('../reply/reply.js');
let jwt     = require('jwt-simple');
module.exports = {

 insertComment: (req, res)=> {
  let token = req.headers['x-access-token']
  token = jwt.decode(token,'secret')
  let newComment = new Comment({
    username: token.split('&')[1],
    comment: req.body.comment,
    company:req.body.company
  });

  newComment.save((err, newComment)=> {
    if(err) {
      res.status(500).send(err);
    }else{
      res.json(newComment);
    }
  });
},

getAllComments: (req, res)=> {
  Comment.find({company:req.params.company}, (err, allcomment)=> {
    if(err) {
      res.status(500).send('err');
    }else{
      let commentsToGo = allcomment.length;
      allcomment.forEach(function(comment) {
       Reply.find({commantId: comment._id},function(err,dec){
        comment.set('reply', dec);
        if(--commentsToGo === 0){
         res.json(allcomment);
       }
     })  
     })
    }
  });
}
}