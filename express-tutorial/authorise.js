const authorise = (req, res, next) => {
    const { user } = req.query;
    if(user === 'john'){
        req.user = { name: 'john', id: 4 }; // I am now adding the property of user onto the req object
        next();
    } else {
        res.status(401).send('Unauthorised'); // no need for next() becaus a result is being sent
    }
};
// When navigating to standard localhost:5000
// the above will display Unauthorised on ALL pages because the query property is not only not there, but the value is also not john
// if the address is http://localhost:5000/?user=john
// we can show the page

module.exports = authorise;

// mock authorise using query string - if they provide a query string in the url, send back resource
// if not send back 401