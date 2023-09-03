// SETUP NAVBAR APP WITH EXPRESS

const express = require('express');
const path = require('path');

const app = express(); // just go ahead and invoke express immediately 

// note that using public is convention but not strictly necessary
// I have copied the css etc files over (just to not break the other apps, but they don't need to be there anymore)
// and this is literally it. Pretty cool eh!
// setup static and middleware (use)

app.use(express.static('./public')); // THAT'S ALL FOLKS!


// to send the html etc. we need to provide the absolute path (path module above)
// if you need a refresh on this check out lesson 9 in node-tutorial



// IMPORTANT but actually not for the moment 

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// so it turns out that we don't even need to do this because index too is a static asset, that I have copied and pasted into the public dir

// __dirname (the directory where the currently executing script resides).

// still is not connected to other external sources like style.css and svg logo etc. BUT with express
// ABOVE app.get we need app.use 



app.all('*', (req,res) => {
    res.status(404).send('resource not found');
});


app.listen(5000, () => {
    console.log(`server is listening on port 5000`);
});