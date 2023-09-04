

const express = require('express');
const app = express();


let { people } = require('./data.js');

app.use(express.static('./methods-public'));


app.use(express.urlencoded({extended: false})); 
// even though we're handling the form submission, we are not handling json data 
// so we need to use another middleware 
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body; // express.json() now makes this possible
    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})


// in our javascript.html we are perform this same request, but in the front-end (these urls need to match)
// const { data } = await axios.get('/api/people')


// note the difference between the html version - <form action="/login" method="POST"> AND <input type="text" name="name" id="name" autocomplete="false" />
// vs
/* <label for="name"> enter name </label>
<input
  type="text"
  name="name"
  id="name"
  class="form-input"
  autocomplete="false"
/> */

app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});