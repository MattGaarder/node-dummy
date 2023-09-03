// two flavours - sync or not sync - blocking or non-blocking
// below is sync

const { readFileSync, writeFileSync } = require('fs');

// const fs = require('fs');
// fs.readFileSync

// bear in mind that these are exactly the same

// in these methods we need to provide two parameters 
// a path to that file, as well as the encoding so that node knows how to decode the file (normally UTF-8)

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// this logs the following:

// Hello this is the first text file Hello this is the second text file

// Let's create a new file:

// needs two arguments, one being the file name and path (if the file is not there, node will create that file),
// the second argument being the value we want

writeFileSync(
    './content/result-sync.txt',
    `Here is the result of writeFileSync: ${ first }, ${ second }`,
    { flag: 'a' }
);

// if you want to append text to the file, you can use a third argument, with an object flag, with the value a 