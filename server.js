const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static('public'))

app.set('port', process.env.PORT || 19000);

const server = app.listen(app.get('port'), function () {
    console.log('Server is started on: ', app.get('port'));
});

const io = socket(server);

io.on('connection', function (socket) {
    console.log('Client Connected', socket.id);
    socket.on('location', function (data) {
        io.sockets.emit('userLocation', data);
    });
});