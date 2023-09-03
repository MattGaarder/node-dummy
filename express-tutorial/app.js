const express = require('express');
const app = express();
const { products } = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product; // destructuring properties from products
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

app.get('/api/products/:productID', (req, res) => {
    console.log(req)
    console.log(req.params); // logs { productID: '1' } this is after refreshing on the url http://localhost:5000/api/products/1
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
});

// In this situation productID is just a placeholder 

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});