const EventEmitter = require('events');

// what we are getting back is a class
// if you want something custom you need to extend the class
// otherwise you can just create an instance

const customEmitter = new EventEmitter();

// this is now an instance of our class (or in other words an object)

// lots of methods in this object, but the most common are:
// on - listen for an event
// emit - emit an event 

// we are calling out event response - this also takes a callback function for what to do on said event

customEmitter.on('response', () => {
    console.log(`data received`);
});


// some things to be aware of we can have as many methods as we want listening to the same event
// order matters

customEmitter.on('response', (name, id) => {
    console.log(`some other logic here showing ${name} with id of ${id}`);
});

// to emit this event, they need to match

customEmitter.emit('response');

// we can pass the arguments when we are emitting the event 
// and then in the callback function we can access these arguments as parameters 

customEmitter.emit('response', 'john', 34);

