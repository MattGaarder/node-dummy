const mongoose = require('mongoose')



// mongoose.connect(connectionString).then(() => console.log('CONNECTED TO THE DB')).catch((err) => console.log(err));

// currently our server and database are not working in sync
// logging - 'still working on 3000'
// and then - CONNECTED TO THE DB
// this needs to be the other way around, because we need access to the db before we can even use the app, so we have to refactor the code

// so set it up as a function and then invoke it in the app.js

const connectDB = (url) => {
    return mongoose.connect(url); // used to be connectionString = (Mongo URI in .env file)
};

module.exports = connectDB;

