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
        if (last_two[0] === null && last_two[1] == null) {
            last_two.shift();
            last_two.push({ socket, data });
            return;
        }

        const [first, second] = last_two;

        if (first !== null) {
            console.log(first.socket.id);
        }
        console.log(second.socket.id);
        console.log(socket.id);

        if (socket.id === second.socket.id) {
            last_two[1] = { socket, data };
        } else if (first !== null && socket.id === first.socket.id) {
            last_two[0] = { socket, data };
        } else {
            last_two.shift();
            last_two.push({ socket, data });
        }

        if (first !== null && second !== null) {
            const time_delta = Math.abs(first.data.timestamp - second.data.timestamp);
            const distance = (
                Math.pow(first.data.latitude - second.data.latitude, 2) +
                Math.pow(first.data.longitude - second.data.longitude, 2));

            console.log('First:', first.socket.id, 'Second:', second.socket.id);
            console.log('dTime:', time_delta, '\tdistance:', distance);

            if (time_delta < 5000) {
                if (distance < 4e-8) {
                    console.log('SUCCESSFUL BUMP CONNECTION');
                    console.log('dTime:', time_delta, '\tdistance:', distance);
                    first.socket.emit('bumped', 'WE BUMPIN~');
                    second.socket.emit('bumped', 'WE BUMPIN~');

                    last_two[0] = null;
                    last_two[1] = null;
                }
            }
        }
    });

});

