var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

const port = process.env.PORT || 5000
server.listen(port, () => { console.log('Connected to port', port) });

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);
});

websocket.on('bump', data => {
    console.log('Its bumpin: ', data);
});
