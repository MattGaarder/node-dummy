const express = require('express');
// this is a router INSTANCE that takes care of the routing instead of the app
const router = express.Router(); // invoked
let { people } = require('../data');

// setting up base route


router.get('/', (req, res) => {
    res.status(200).json({success: true, data:people});
});

router.post('/', (req, res) => {
    const {name} = req.body; 
    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})

router.post('/postman', (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople});
});

router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
})

module.exports = router;
// when we export the router, in the app.js we want to set up a app.use(for the path that starts with api/people, I want to use my people router)
// also note that we have moved let { people } = require('./data'); from app to here
