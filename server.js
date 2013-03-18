// define a channel (port) to connect to the server
var port = 5000;
var io = require('socket.io').listen(port),
	util = require('util'),
	ts = new Date();
	
io.sockets.on('connection', function(socket) {
	// greeting the connected client
	socket.emit('send back', {'msg': 'this is the server'});
	// receiving data from a client
	socket.on('send chat', function(data) {
		util.log(data);
		// broadcast to every clients
		io.sockets.emit('server send', {'name': data.name, 'msg': data.msg});
	});
});