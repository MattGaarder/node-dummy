const path = require('path');

// a separator property that returns a platform specific property 

console.log(path.sep);

// this returns '/' but if you are using a different platform obvs this would be different 

// path.join 
// joins a sequence of path segements, using the platform specific separator as the limitor 
// and secondly returns a normalised resulting path

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

// logs the following 

// /content/subfolder/test.txt

// arguments are normalised and separated by platform specific '/' equivalent 

const base = path.basename(filePath);
console.log(base);

// logs 'test.txt'

// resolve provides an absolute path, accepts a sequence of paths and path sequences and resolves them into an absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// logs the following 

// /Users/matteusgaarder/Desktop/Projects/node-tutorial/content/subfolder/test.txt



