// using schema and model from mongoose
// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB database.
// The first argument is the singular name of the collection your model is for. 
// An instance of a model is called a document.

const mongoose = require('mongoose');


// this is a constructor function
// when doing this on mongo manually the IS NO set structure, but if that's something we want 
// we want name - string, and completed value - boolean
// so to set up the structure for all the document
// key value pairs = set equal to an object
// whats the key? Name, completed 

const TaskSchema = new mongoose.Schema({
    name: String, completed:Boolean
});



// model is the representation for the collection
// all the tasks that will be pushed to the database will be added to the collection
// the model is the wrapper for the schema 
// if the schema defines the structure for the document
// the model provides an interface to the database

module.exports = mongoose.model('Task', TaskSchema); // model looks for two arguments, the name, and the schema

// now we just go to the controllers and start using our model