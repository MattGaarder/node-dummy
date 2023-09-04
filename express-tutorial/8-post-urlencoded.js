

const express = require('express');
const app = express();


let { people } = require('./data.js');

// static assets 
app.use(express.static('./methods-public'));

// parse form data - and add the value to req.body
app.use(express.urlencoded({extended: false})); // check out docs if you want to figure out why this flag is necessary 
// now we can access this middleware we have some cool functionality 
// basically in order to get the data from the post request in the req.body (from /login) we need this
// in the header we get content-type: application/x-www-form-urlencoded


// so the reason we do this is because you cannot just perform a post request from the browser,
// you either need to use a tool (postman/insomnia), or you need to setup a working application

// in the static index.html we have the form element:

// <form action="/login" method="POST">

// the method is clearly POST - and then the action is WHERE we are going to send it (/login)
// currently there is no login so we cannot POST /login 
// however, the method is going to be POST, and the Form Data is going to be { name: john } (note how <input type="text" name="name" id="name" autocomplete="false" /> name is the property here in the input)
// if you change this name property to chicken burritto, that would be the key of the value posted/typed
// to reiterate KEY IS THE VALUE OF THE PROPERTY NAME IN INPUT - VALUE IS WHAT IS GOING TO BE TYPED - THIS IS SENT AS THE BODY OF THE POST 
// if I want to add something onto the server, the req body is going to be crucial 

// We are currently not handling this request however, nor do we have the middleware to add the data to our request
// first step is going to be dealing with our route (see post method below)

// default method
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people});
});

// now how do we add data using the http post method?
// we cannot configure the browser or anything like that so... (2 flavours, and 1 tool)

// see <form action="/login" method="POST">
app.post('/login', (req, res) => {
    // console.log(req.body); // logs: [Object: null prototype] { name: 'oin' } // lets set up the logic
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials');
});
// we cannot access this data yet, so we need to use some middleware (urlencoded middleware)

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});