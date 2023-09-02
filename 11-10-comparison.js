// DEMONSTRATE THE DIFFERENCE BETWEEN ASYNC AND SYNC

// const { readFileSync, writeFileSync } = require('fs');

// console.log('start');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result of writeFileSync: ${ first }, ${ second }`,
//     { flag: 'a' }
// );

// console.log('done with this task');
// console.log('starting the next one');




const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result of writeFileSync: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log('done with this task');
            }
        )
    })
});

console.log('starting the next one');

// bear in mind that although this is an option in performing tasks asynchronously 
// async await or the use of promises is a cleaner and easier alternative 
