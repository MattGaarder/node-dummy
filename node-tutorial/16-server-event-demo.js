const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

// the callback function will be invoked every time someone visits the server (the request comes in)

// USING EVENT EMITTER API

// we still create a server, but instead of passing in the callback function 
// server also has the method on 
// when the request comes in we have a callback function that handles it
// behind the scenes server is listening for the request event

const server = http.createServer();

// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);

// this demonstrates that even though you are not setting up events on your own,
//  a bunch of modules rely heavily on events. Check out Node.js documentation for details
// i.e. request is an event that is being listened to by the server