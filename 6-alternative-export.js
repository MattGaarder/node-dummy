// const items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

// demonstration that we are not restricted to only exporting variables or functions
// 2 options:

module.exports.items = ['item1', 'item2'];

// Go straight away to export this, or you can do something like this 

module.exports.singlePerson = person;

// we are setting up a property on the export object and making it equal to an array, or person etc. 