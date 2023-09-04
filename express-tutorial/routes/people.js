const express = require('express');
// this is a router INSTANCE that takes care of the routing instead of the app
const router = express.Router(); // invoked
let { people } = require('../data');
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// setting up base route

// now we basically want to separate the functionality to the request to clean the code 
// the pattern is MVC - model view controller - so we're putting this functionality in the controllers file

// FLAVOUR 1 

router.get('/', getPeople);
router.post('/', createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson)

// FLAVOUR 2 

// router.route('/').get(getPeople).post(createPerson);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;
// when we export the router, in the app.js we want to set up a app.use(for the path that starts with api/people, I want to use my people router)
// also note that we have moved let { people } = require('./data'); from app to here
