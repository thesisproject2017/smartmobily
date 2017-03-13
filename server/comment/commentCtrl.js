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
  Comment.find({}, (err, allcomment)=> {
    if(err) {
      res.status(500).send('err');
    }else{
      let commentsToGo = allcomment.length;

      allcomment.forEach(function(comment) {
       Reply.find({commantId: comment._id},function(err,de){
        comment.set('reply', de);
        if(--commentsToGo === 0){
         res.json(allcomment);
       }
     })  
     })
    }
  });
}
}