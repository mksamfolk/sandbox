var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.emit('news', { hello: 'world'});
	socket.on('my other event', function(data) {
		console.log(data);
	});
});

// app.use(express.static(__dirname + '/public'));

server.listen(8899);