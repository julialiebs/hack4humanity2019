var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(80, () => console.log('listening on *:80'));

const last_two = [null, null];

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);
    socket.on('bump', data => {
        console.log('Its bumpin!');
    });
    socket.on('location', data => {
        last_two.shift();
        last_two.push({ socket, data });
        const [first, second] = last_two;

        if (first.data !== null && second.data !== null) {
            if (math.abs(first.data.timestamp - second.data.timestamp) < 500) {
                if (math.pow(first.data.latitude - second.data.latitude, 2) +
                    math.pow(first.data.longitude - second.data.longitude, 2) < 0.00001) {
                        console.log('SUCCESSFUL BUMP CONNECTION');
                        first.socket.emit('bumped', 'WE BUMPIN~');
                        second.socket.emit('bumped', 'WE BUMPIN~');
                    }
            }
        }
    });

});

