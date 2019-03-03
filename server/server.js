const express = require('express')
const api = express()
var server = require('http').Server(api);
var io = require('socket.io')(server);
const port = 3000


io.on('connection', function (socket) {

    socket.on('bump', function (data) {
        console.log(data);
    });
});



// API
api.get('/userID=12345', function (req, res) {
    res.send('Hello World!')
})

api.post('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

api.listen(port, () => console.log(`app listening on port ${port}!`))