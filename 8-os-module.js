// many useful properties for interacting with operating system as well as the server 
// similar setup, variable, 'usually os' with require('os') - this is built-in so no installation necessary
// also, because it is built-in, we don't need ./os or anything like that 

const os = require('os');

// either you can access the methods by running the variable 

// os.(all methods become available with dot notation)
// OR destructure the required method from the object (these do exactly the same thing);

// info about the current user

const user = os.userInfo(); // don't need to pass anything, just invoke 

console.log(user);

// logs the following 

// {
//     uid: 501,
//     gid: 20,
//     username: 'matteusgaarder',
//     homedir: '/Users/matteusgaarder',
//     shell: '/bin/zsh'
//   }

// method returns the system uptime in seconds 

console.log(`They System Uptime is ${os.uptime()} seconds`);

// They System Uptime is 193563 seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);

// logs the following 

// {
//     name: 'Darwin',
//     release: '22.6.0',
//     totalMem: 17179869184,
//     freeMem: 21823488
//   }