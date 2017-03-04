var express = require('express');
var mongoose = require('mongoose');
var app = express();

//require your middleware and routes here


//=============================================================================
/*									Database								 */
//=============================================================================
var mongoURI = 'mongodb://localhost/smartmobily';
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



