// local
const secret = 'super secret';
// share
const john = 'john';
const peter = 'peter';

// console.log(module);

// Module {
//     id: '.',
//     path: '/Users/matteusgaarder/Desktop/Projects/node-tutorial',
//     exports: {},
//     filename: '/Users/matteusgaarder/Desktop/Projects/node-tutorial/4-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/matteusgaarder/Desktop/Projects/node-tutorial/node_modules',
//       '/Users/matteusgaarder/Desktop/Projects/node_modules',
//       '/Users/matteusgaarder/Desktop/node_modules',
//       '/Users/matteusgaarder/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

// note that exports is an object - and currently is empty

module.exports = { john, peter };

// note that this is functionally the same as ES6 syntax of export default (and then what you are exporting)

// note that this is ES6 syntax, because the name is exactly the same as the value
// now in app.js we have access to these when we run require 