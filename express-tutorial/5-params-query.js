const express = require('express');
const app = express();
const { products } = require('./data.js')

// Home route to display Home Page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

// Route to display all products with reduced information
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product; // Destructuring properties from each product object
        return { id, name, image }
    })
    res.json(newProducts);
});


// For individual products we could hardcode each route like below - alternatively: 
// In express we have something called route parameters - which is a better solution (below)

// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);
//     res.json(singleProduct);
// });

// Route to get a single product by ID
// Utilizing route parameters for dynamic URLs
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params); // logs { productID: '1' } this is after refreshing on the url http://localhost:5000/api/products/1
    // destructure productID from the param
    const { productID } = req.params; // please note that this is a string - so below we need to change this to a number
    const singleProduct = products.find((product) => product.id === Number(productID));
    if (!singleProduct) { // this will be true if singleProduct is undefined so we can return a 404 code
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct); // MAKE SURE TO RETURN .send() BECAUSE YOU CANNOT SEND TWO RESPONSES IN ONE REQUEST!! 
});

// when thinking of route parameters think of them as placeholders where the user provides the data 
// using request and params we can access that data and setup logic
// In this situation productID is just a placeholder 
// take the following code as an example:

// Route to demonstrate multiple route parameters
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params); // for the following url http://localhost:5000/api/products/4/reviews/3
    res.send('hello world'); // this is logged to the console { productID: '4', reviewID: '3' }
});
// this :placeholder in the url is important for how we are getting information from the url with req.params
// review is NOT a relative parameter so it needs to be an exact match

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});

// Route to demonstrate query parameters
app.get('/api/v1/query', (req, res) => {
    console.log(req.query); // the below URL logs the following { name: 'john', id: '4' } (string) // so basically we can access the parameters and do something with them
    const { search, limit } = req.query; // Destructuring search and limit from query parameters // http://localhost:5000/api/v1/query?name=john&id=4
    // If the user doesn't provide them, no problem - we can send back all the products
    // In the below logic if(search) - so if search isn't there, we skip this logic 
    let sortedProducts = [...products]; // copying the products in a shallow copy array so that we can make changes to it

    // Filter products based on the search query parameter
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    // Limit the number of products based on the limit query parameter
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1){
        // res.status(200).send('no products match your search'); // note that even though this returns an empty array, it is not because the resource doesn't exist but because this didn't yield any results
        return res.status(200).json({success: true, data: []});
    }
    res.status(200).json(sortedProducts);
}) 

// One thing to note is that you have both res.status(200).json(sortedProducts); and res.send('hello world'); in your code. This will result in an error because you can only send one response back to the client. 

// for example http://localhost:5000/api/v1/query?name=john&id=4

// http://localhost:5000/api/v1/query?name=john&id=4

// query strings in url 
// hn.alogolia.com/api/v1/search?query=foo&tags=story 
// anything after the ? is not actually part of the url, it is just data that is being queried to the server
// if the setup is supported by the server we can setup key value pairs
// query : value of the query
// we are now in charge of the server so we can make query be anything