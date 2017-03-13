let Reply = require('./reply.js');
let jwt = require('jwt-simple');

module.exports = {
 insertReply: (req, res)=> {
  let token = req.headers['x-access-token']
  token = jwt.decode(token,'secret')
  let username =  token.split('&')[1]
  let reply = req.body.reply
 let commantId = req.body.id
  // console.log(username)
  // console.log(reply)
  // console.log(commantId)


  let newReply = new Reply({
    username: username,
    reply:reply,
    commantId : commantId
});
  newReply.save((err, newReply)=> {
    //console.log(newReply,'im in ctrl db')
    if(err) {
        res.status(500).send(err);
    }else{
     res.json(newReply);
 }
});
},
reseveReplys : (req, res)=>{
    //console.log(req.body,'im get reply')
    Reply.find({_id:req.body.id},(err,replys)=>{
        //console.log(replys)
        if(err){
            console.log(err)
        }else{
            res.json(replys)
        }
    })
}
}