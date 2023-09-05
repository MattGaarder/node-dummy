const getAllTasks = (req, res) => {
    res.send('all items from the file');
};

const createNewTask = (req, res) => {
    res.send('create new task')
};

const getSingleTask = (req, res) => {
    res.send('get single task')
};

const updateTask = (req, res) => {
    res.send('update task')
};

const deleteTask = (req, res) => {
    res.send('delete task')
};

module.exports = { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask }