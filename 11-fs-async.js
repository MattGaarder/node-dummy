// two flavours - sync or not sync - blocking or non-blocking
// below is async

const { readFile, writeFile } = require('fs');

// for async we need to provide a callback function
// we run this callback when we are done with the functionality 

// so the first argument will be the path to the file, and the second argument will be a callback function

// in this callback function we pass two more arguments, the first of which is going to be error, as well as the result

// readFile('./content/first.txt', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result)
// });

// in the body, if there is an error we can return null, as well as console log an error 

// the above function logs <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// because the encoding was not given SO

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result)
// });

// logs the following - Hello this is the first text file

// now to make it async or to setup the same functionality (I'm not entirely sure I'm getting it here but for the sake of following along)

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
                console.log(result);
            }
        )
    })
});

// 