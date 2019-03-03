const axios = require('axios');
const awaitBump = io.connect('http://localhost:3000')



io.on('connection', (socket) => {
    socket.join('bump', () => {
        let rooms = Object.keys(socket.rooms);
        console.log(rooms); // [ <socket.id>, 'room 237' ]
    });
});



// posts contact from client to server 
axios.post('http://localhost:3000/user', {
    firstName: 'Fred',
    lastName: 'Flintstone',

    //the id of this user for their vCard
    exchangeID: '123'

})
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// You should generate user ids 
//Gets other contact from server
axios.get('http://localhost:3000/userID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });