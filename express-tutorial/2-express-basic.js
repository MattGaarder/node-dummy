const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit the resource');
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('about page');
});

// this is the default, for all requests, so resource/path would be *
// we can chain the method status to get both 

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
})  

// all browser perform this request by default, so we need to add specifically two things
// 1. what resource - i.e. the path 
// 2. the callback, which will be invoked every time the user performs a get request on our domain
// these have the same two arguments, req, and res
// res uses the method .send()

// this is very similar to http + createServe 
// these are going to be the methods we are going to use the most

// app.get
// app.post
// app.put
// app.delete // represents http user requests
// app.all    // for use with all, like displaying 404 status code if previous don't work
// app.use    // for middleware 
// app.listen

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});