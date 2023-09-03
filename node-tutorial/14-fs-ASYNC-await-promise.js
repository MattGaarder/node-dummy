// const { readFile, writeFile } = require('fs');

// NEW MODULE to change the return the code without the wrapping i.e. new Promise((resolve, reject) => {...}) 
// using the util module that has method promisify 
// where we can take our read file, which is looking for a callback and turn it into a function that returns a promise

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// with the two functions that return a promise above we don't need to use the getText function defined below anymore
// HOWEVER there's an even better way of doing this please see below. 

const { readFile, writeFile } = require('fs').promises

// now we can change the name of readFilePromise, to just readFile as it has been taken as is from above


const startWithUtilPromisify = async() => {
    try {
        // const first = await readFilePromise('./content/first.txt', 'utf8');
        const first = await readFile('./content/first.txt', 'utf8');
        // const second = await readFilePromise('./content/second.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        // Without using a nested callback now we can pass straight away another await writeFile
        // await writeFilePromise('./content/result-mind-grenade.txt', `this is result of util.promisify with writeFilePromise: ${first}, ${second}`);
        await writeFile('./content/result-mind-grenade.txt', `this is result of util.promisify with writeFilePromise: ${first}, ${second}`, {flag: 'a'});
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
};

startWithUtilPromisify();




// We will setup this asynchronous function as a promise first, before writing it as async await to 
// understand what is going on behind the scenes.

// keep in mind that the BELOW FUNCTION DEFINITION PERFORMS THE SAME PURPOSE OF const readFilePromise = util.promisify(readFile);


const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
};

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));

// by using a promise this is clearly much cleaner than 12-fs-async but it still does not solve the problem if
// if you are hoping to read the file and then write a file based on the results from this. Much better to use async await.
// Below can be a stock function that we can attach this syntax to.

const start = async() => {
    const first = await getText('./content/first.txt');
    // await signifies, only once the promise is solved can I do something with the value 
    console.log(first)
};

start();

// same function that catches errors as they arise (lets add a second read as well)

const startWithTry = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
};

startWithTry();

// The goal of this though is to eventually setup the code without the wrapping function