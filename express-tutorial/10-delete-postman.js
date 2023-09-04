// the put method is for updates
// PUT -- www.store.com/api/orders/:id -- update specific order (params + send data)

const express = require('express');
const app = express();


let { people } = require('./data.js');

app.use(express.static('./methods-public'));


app.use(express.urlencoded({extended: false})); 


app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body; 
    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials');
});

app.put('/api/people/:id', (req, res) => { // :id is route params
    // two things we are looking for here - the value in the params (which we access using req.params) (to look for a specific item)
    // the second thing, when it comes to the put request, is what is being sent in the body (which will update the value for that item)
    // so let's access the first things first:
    const {id} = req.params;
    // and the second
    const {name} = req.body;
    // console.log(id, name); // localhost:5000/api/people/5 // logs 5 petreput // {"name": "petreput"}
    // res.send('hello world') // now lets set up some logic for how to actually update our values on our data properly 
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false, msg: `no person with id ${id}`})
    } // if the person DOES exist we need to iterate over the array, for the person with the id that matches the param
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name; // we are of course getting this name from the body
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople});
});

// last method to cover is the delete method
// one major difference from the put method is that when we are deleting we are not expecting anything from the body
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id)); // notice how we have to directly access the params object
    if(!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}`})
    } // after doing this we can add logic to filter out the array
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
})


app.listen(5000, () => {
    console.log('server is listening on port 5000');
});

// looking good, but our app.js is looking very busy, so we want to use express router to improve this
// where we can group these routes together, and set functionality can be set up as separate controllers
// common setup is MVC when we are setting up the API