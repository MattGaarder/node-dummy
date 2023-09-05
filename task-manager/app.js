const express = require('express');
const app = express(); // initialise and invoke 
const tasks = require('./routes/tasks')

const port = 3000;

app.use(express.json()); // if we don't do this we won't have the data in req.body

// app.use(express.static('./public'));
app.use(express.urlencoded({extended: false})); 

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



app.listen(port, () => {
    console.log(`'still working on ${port}'`)
})