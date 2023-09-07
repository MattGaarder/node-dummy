const Task = require('../models/task.js'); // Changed to lower case


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}); // name of the model followed by static function name, ALL documents is just an empty object
        res.status(200).json({ tasks: tasks });  // ES6 means we don't actually need to tasks: tasks
    } catch (error) {
        res.status(500).json({ msg: error});
    }
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


// using Promises

// const createNewTask = (req, res) => {
//     Task.create(req.body)
//         .then(task => {
//             res.status(201).json({task});
//         })
//         .catch(error => {
//             res.status(500).json({error: 'There was an error creating the task'});
//         });
// };


// WE ARE CONNECTED TO THE DATABASE WOO

// Without try and catch for errors 

// const createNewTask = async (req, res) => {
//     const task = await Task.create(req.body);
//     res.status(201).json({task});
// };

// {                                        the below object is sent from the above request
//     "task": {
//         "name": "yosemite-sam",
//         "completed": false,
//         "_id": "64f86f4b34dbb61c0fef8734",
//         "__v": 0
//     }
// }

const createNewTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({ msg: error});
    }
};


// Without .findOne() // yosemite-sam id 64f86f4b34dbb61c0fef8734
// const getSingleTask = (req, res) => {
//     res.json({id:req.params.id});
// };


const getSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        console.log(taskID)
        console.log(req.params)
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error});
    }
};

// {id: taskID} = req.params extracts the id from the URL and stores it in taskID.
// Task.findOne({_id: taskID}) uses that taskID to find a task in the database with a matching _id.



const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete( {_id: taskID} );
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error});
    }
};

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID, }, req.body, { new: true, runValidators: true }); // timecode 02:13:22 for explanation about why we need to use an option as the third argument
        if(!task){                                                            // basically because whilst this does update the task, it doesn't change the value in the get all request
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        console.log("Server-side task:", task);
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error}); 
    }
};

module.exports = { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask }




// Mongoose v7 docs

// const Tank = mongoose.model('Tank', yourSchema);
// const small = new Tank({ size: 'small' });
// await small.save();

// // or

// await Tank.create({ size: 'small' });

// // or, for inserting large batches of documents
// await Tank.insertMany([{ size: 'small' }]);