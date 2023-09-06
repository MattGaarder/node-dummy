const Task = require('../models/Task');


const getAllTasks = (req, res) => {
    res.send('all items from the file');
};

// even though we've been using .send in our routes, eventually we are going to switch to .json method  
// the rest pattern allows for our users to perform a crud operation on our data (create, read, update, destroy)
// MongoDB
// NoSQL, Non relational DB
// Store JSON
// not row and columns
// everything stored as JSON
// instead of tables - collections (group of items)
// instead of rows - documents (set of key value pairs)

// MANUAL SETUP (just read from the webpage, and delete etc.)
// OR we can use mongoose, which is a object data modelling library (alternative)
// it comes with goodies to make development faster (straight forward API)

const createNewTask = (req, res) => {
    res.json(req.body);
};

const getSingleTask = (req, res) => {
    res.json({id:req.params.id});
};

const updateTask = (req, res) => {
    res.send('update task')
};

const deleteTask = (req, res) => {
    res.send('delete task')
};

module.exports = { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask }