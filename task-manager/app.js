require('./db/connect');
// remember that if you import a file that has a function that is being invoked, you can just require it and it will be invoked
// no need to assign this to a variable
const express = require('express');
const app = express(); // initialise and invoke 
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

const port = 3000;

app.use(express.json()); // if we don't do this we won't have the data in req.body

app.use(express.static('./public'));

app.use(express.urlencoded({extended: false})); 

// The express.urlencoded middleware is used to parse incoming request bodies with URL-encoded payloads.
// This is commonly used for parsing data coming from HTML forms. When a form is submitted, the form data is sent as a URL-encoded string.
// The express.urlencoded middleware parses this data and makes it available under the req.body property.
// In this case my API is solely consumed by client-side JavaScript or other servers that send JSON payloads, then express.json() is sufficient.

app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`)
});

app.use('/api/v1/tasks', tasks)

// Eventually what we are going to want for the structure of the project/API is:

// app.get('api/v1/tasks);          - get all the tasks
// app.post('api/v1/tasks);         - create a new taks
// app.get('api/v1/tasks/:id);      - get single task 
// app.patch('api/v1/tasks/:id);    - update task 
// app.delete('api/v1/tasks/:id);   - delete task

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI); // we are passing in MONGO_URI from the .env file (remember that process is a global variable)
        app.listen(port, () => {
            console.log(`'still working on ${port}'`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
