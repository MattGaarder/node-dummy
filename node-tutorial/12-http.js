const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // so I logged this, but it is a GIANT object 
    if(req.url === '/'){
        res.end('Welcome to our homepage');
        return;
    }
    if(req.url === '/about'){
        res.end('this is the about page');
        return;
    }
    res.end(
        `<h1>OOps!<h1>
        <a href="/">back home</a>`
    )
    // res.write();
    // res.end();
});
server.listen(5000);

// the createServer method looks for a callback, in the callback function we have 2 parameters
// both are objects, and can be called whatever you want, but are often called req, and res

// the first parameter represents the incoming request, and response is what is being sent back.
// we also need to say what port our server is going to be listening to


// super interesting module! v. happy about learning this one