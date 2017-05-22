const socket = require('socket.io-client')('http://127.0.0.1:3000');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfdWlkIjoiNTkxMDIzODM5MzE0MDBkNmM3ZGY1NTA2IiwiaWF0IjoxNDk0OTIyNzYxfQ.kc9t24cQit7LtALbiQkVLxVuk7JLxgJVqftD5Qtl3ks';

socket.on('connect', () => {
    socket.emit('join', { token: token });
    socket.on('join', msg => {
        console.log(msg);
        //socket.emit('message', { data: 'this is my hat', token: token });
    });
    socket.on('private', msg => {
        console.log(msg);
    });
    socket.on('connections', msg => {
        console.log('当前连接: %d', msg);
    });
});



