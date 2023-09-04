// using logger.js function in any route 
// how to apply this then?
// use app.use()! (nice)

const express = require('express');
const app = express();
const logger = require('./logger');

const authorise = require('./authorise')
const morgan = require('morgan');

// the way we can execture multiple middleware functions is by placing them in an array
// if you want to add multiple middle ware to a single path, add them as the second argument of .get as an array like so:

// app.get('/', [logger, authorise], (req, res) => {
//     res.send('Home');
// });

// Options for Middleware: 
// 1. Our own (see logger and authorise)

// 2. express middleware 
// .USE() EXPECTS MIDDLEWARE AS AN ARGUMENT
// IN EXPRESS - WE HAVE A BUILT-IN MIDDLEWARE METHOD CALLED STATIC

// app.use(express.static('./public'));

// 3. third party
// MORGAN NPM is a popular choice 

app.use(morgan('tiny'));
// logs GET /api/items?user=john 304 - - 8.188 ms (i.e. it shows how long it took for the server to respond)
app.use([logger, authorise]); // They will be executed in order

// app.use invokes logger for ANY route
// ORDER MATTERS - if this was below app.get('/') - it would not be invoked in the homepage 
// Note that we CAN set up a path by passing it in as the first argument in use

// app.use('/api', logger);

// this will apply to ANY path after api/ in the url

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About'); 
});

app.get('/api/products', (req, res) => {
    res.send('Products'); 
});

app.get('/api/items', (req, res) => {
    console.log(req.user); // when navigating to http://localhost:5000/api/items?user=john now
    res.send('Items');  // this is logged to the console { name: 'john', id: 4 } (we can access the user from the authorise middleware)
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});