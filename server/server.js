var express = require('express');
var mongoose = require('mongoose');
var app = express();

//=============================================================================
/*									Database								 */
//=============================================================================
var mongoURI = 'mongodb://smart:123@ds117830.mlab.com:17830/smartmobaily';
mongoose.connect(mongoURI);
var db = mongoose.connection;

//=============================================================================
/*									Server   								 */
//=============================================================================
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('server now open on port ' + port)
})

module.exports = app



