// const http = require('http');
// // this method takes a callback that gets invoked every time the user hits our server
// const server = http.createServer((req, res) => {
//     console.log('user hit the server');
//     res.end('home page')
// });

// server.listen(5000);

// A port is a communication endpoint. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service.
 
// response.end([data[,encoding]][,callback])

// This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.
// The method response.end(), MUST be called on each response.

// If `data` is specified, it is similar in effect to calling response.write(data, encoding) followed by response.end(callback).

// If callback is specified, it will be called when the response stream is finished.
 
// two major issues with the code so far, we don't provide any info or metadata with our data we are sending back
// we are sending the same information back each time regardless of url
// to add more detail we need to use the below method:

// const http = require('http');
// // this method takes a callback that gets invoked every time the user hits our server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type':'text/html'})
//     res.end('<h1>home page</h1>')
// });

// server.listen(5000);

// start with status code as first argument
// header as second argument - content type is most common. Key - value pair.
// we would then be able to add HTML in our res.end

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type':'text/html'});
//     // these are MIME types - consists of type and subtype 
//     res.write('<h1>home page</h1>');
//     res.end();
// });

// splitting it up between what you want to write, and then ending the response is better

// lets setup some basic navigation

// const server = http.createServer((req, res) => {
//     const url = req.url;

//     if(url === '/'){
//         res.writeHead(200, {'content-type':'text/html'}); 
//         res.write('<h1>home page</h1>');
//         res.end();
//     } else if (url === '/about'){
//         res.writeHead(200, {'content-type':'text/html'}); 
//         res.write('<h1>about</h1>');
//         res.end();
//     } else {
//         res.writeHead(404, {'content-type':'text/html'}); // note different status code
//         res.write('<h1>404 page not found</h1>');
//         res.end();
//     }
// });

// N.B. when you are passing in html to write() with require, you are passing in the CONTENTS of the file, not the file itself
// so we would still need the content-type - let's demo!

const http = require('http');

const { readFileSync } = require('fs');

// get all files

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/style.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}); 
        res.write(homePage);
        res.end();
    } else if (url === '/about'){
        res.writeHead(200, {'content-type':'text/html'}); 
        res.write('<h1>about</h1>');
        res.end();
    } else if (url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'}); 
        res.write(homeStyles);
        res.end();
    } else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'}); 
        res.write(homeImage);
        res.end();
    } else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'}); 
        res.write(homeLogic);
        res.end();
    } else {
        res.writeHead(404, {'content-type':'text/html'}); // note different status code
        res.write('<h1>404 page not found</h1>');
        res.end();
    }
});

server.listen(5000);

// basically the point of this was, yes we can setup our server like this, but it is much easier using express



// This is how GPT suggested we could use a helper function to read the files and make the code cleaner 

// const path = require('path');

// // Helper function to construct absolute paths

// const resolvePath = (relativePath) => path.resolve(__dirname, './navbar-app', relativePath);

// // Get all files

// const homePage = readFileSync(resolvePath('index.html'));
// const homeStyles = readFileSync(resolvePath('style.css'));
// const homeImage = readFileSync(resolvePath('logo.svg'));
// const homeLogic = readFileSync(resolvePath('browser-app.js'));

// In this version, the function resolvePath takes a relative file path and returns an absolute path using path.resolve and __dirname (which is the directory where the currently executing script resides).