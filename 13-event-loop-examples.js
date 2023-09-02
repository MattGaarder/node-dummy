const { readFile } = require('fs');

console.log('started the first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('starting next task');

// the following is logged:

// started the first task
// starting next task
// Hello this is the first text file
// completed first task

// the reason this happens is because readFile is asynchronous - event loop will offload it to a file system
// only when I get back with a result THEN run the callback 
// only WHEN file system comes back with an error or result THEN we invoke the callback

// another demonstration:

// started operating system process 
console.log('first');
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third');
// completed and exited operating system process

// you'd think because setTimeout is set to 0 seconds the order would be first, second, third
// HOWEVER setTimeout is asynchronous so it gets OFFLOADED (goes to the back of the line)
// all IMMEDIATE gets dealt with first 

// logs the following:

// started the first task
// starting next task
// first
// third
// Hello this is the first text file
// completed first task
// second

setInterval(() => {
    console.log('hello world')
}, 2000);
console.log('I will run first');
// process stays alive unless
// Kill process with ctrl + c
// unexpected error 

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello Worlp');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000...');
});

// listen is asynchronous so the moment we set it up it stays alive 
// event loop is just waiting for those requests to come in 
// when they come in, we run our callback ('server listening... etc.)