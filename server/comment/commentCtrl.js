let Comment = require('./comment.js');
let jwt = require('jwt-simple');

module.exports = {
 insertComment: (req, res)=> {
    let token = req.headers['x-access-token']
        token = jwt.decode(token,'secret')
    let newComment = new Comment({
        username: token.split('&')[1],
        comment: req.body.comment
    });
    newComment.save((err, newComment)=> {
        console.log('bingo')
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
    }
}