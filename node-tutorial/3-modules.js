// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// note that we can simply require or assign what is being imported to a variable 

const names = require('./4-names');
// const { john, peter } = require('./4-names');
const sayHi = require('./5-utils'); // note that these file names don't require .js at the end 

// the function require takes as a parameter where the module is located as a path
// note that ALWAYS modules will be set up starting with a '.'

const data = require('./6-alternative-export');
// console.log(data); // logs { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } };

require('./7-invoke-from-require');
// the mind grenade is that we don't need to assign the module to variable or anything, we can just require the file
// and it will invoke the function that is being called without any further invocation 


console.log(names);

// note that this logs the object { john: 'john', peter: 'peter' }
// and does not log the secret variable in 4-names.js

// sayHi('susan');
// sayHi(john);
// sayHi(peter);

// note that for the above currently (names is not destructed) we get john is undefined 

// so either destructure (commented out above) OR -> 

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

