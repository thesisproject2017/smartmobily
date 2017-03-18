var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

users= [];
connections = [] ;
	
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




