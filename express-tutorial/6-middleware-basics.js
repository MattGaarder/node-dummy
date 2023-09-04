// middleware are functions that execute during requests to the server 
// each one has access to req and res


const express = require('express');
const app = express();

// req => middleware => res

// I want to log the method the user is using, the url the user is trying to access, and the date
// the draw back here is that if I want to do this in Home and About, I need to write the code in both
// so the solution is just to define this code outside of the .get method, and then pass it in when we want later
// we do this in between the path and the callback function as the second argument
// express will pass req into our middleware function (only need the reference to the function) - req, res, and next

// when you work with middleware you MUST pass this on to the next middleware (unless you are sending back a respnse)

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time); // logs the following: GET / 2023
    next();
};

// this is getting a bit clunky so generally it is better to keep this function in a separate file
// also, it is a bit annoying to have to add our method manually to each route, so the question
// is it possible to use a method that adds our function to any possible route? (Yes).

app.get('/', logger, (req, res) => {
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time); // logs the following: GET / 2023
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About'); // logs: GET /about 2023
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});