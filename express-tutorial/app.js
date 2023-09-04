// express router
// looking good, but our app.js is looking very busy, so we want to use express router to improve this
// where we can group these routes together, and set functionality to be set up as separate controllers
// common setup is MVC when we are setting up the API

const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRoute = require('./routes/auth')

// let { people } = require('./data.js'); // moved to people.js

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false})); 


app.use(express.json());

// note that the first argument is the base url address for everything in people.js
app.use('/api/people', peopleRouter)
app.use('/login', authRoute)
// now we have set up a router with the base path of /api/people but we haven't changed the base in the people.js path - let's go do that


// common convention is to set up a separate folder, to be able to group these routes together
// people.js for all the paths that start with /api/people



app.listen(5000, () => {
    console.log('server is listening on port 5000');
});

