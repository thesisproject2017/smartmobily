let Feed = require('./feed.js');
let jwt = require('jwt-simple');

module.exports = {
 insertNewfeeds: function (req, res) {
  
  let name =  req.body.name;
  let email = req.body.email;

  let newfeed = new Feed({
    name : name,
    email:email
  });
  newfeed.save( function (err, newfeed) {
    if(err) {
      res.status(500).send(err);
    }else{
     res.json(newfeed);
   }
 });
}
}