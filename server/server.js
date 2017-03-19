var express = require('express');
var mongoose = require('mongoose');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

users= [];
connections = [] ;

app.get('/chat', function(req, res){
	res.sendFile(__dirname + '/chat.html');
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('connected: %s socket connected', connections.length);

	//disconnect
	socket.on('disconnect', function(){
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s socket disconnected', connections.length);	
	});
	socket.on('send message', function(data){
		console.log(data)
		io.sockets.emit('new message', {msg: data, user:socket.username});
	});
	// New user
	socket.on('new user', function(data, callback){
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	});
	function updateUsernames(){
		io.sockets.emit('get users', users);
	}
});
// require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


// =============================================================================
/*									Database								 */
// =============================================================================
var mongoURI = 'mongodb://smart:123@ds117830.mlab.com:17830/smartmobaily';
mongoose.connect(mongoURI);
var db = mongoose.connection;

// =============================================================================
/*									Server   								 */
// =============================================================================


var port = process.env.PORT || 3000;
http.listen(port, function() {
	console.log('server now open on port ' + port);
});

module.exports = app;



