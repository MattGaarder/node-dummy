const http = require('http');
// this method takes a callback that gets invoked every time the user hits our server
const server = http.createServer((req, res) => {
    console.log('user hit the server');
});

server.listen(5000);

// A port is a communication endpoint. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service.
 
// response.end([data[,encoding]][,callback])

// This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.
// The method response.end(), MUST be called on each response.

// If `data` is specified, it is similar in effect to calling response.write(data, encoding) followed by response.end(callback).

// If callback is specified, it will be called when the response stream is finished.