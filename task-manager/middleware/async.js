const asyncWrapper = (fn) => {
    return async (req, res, next) => { // async function always returns a promise so we have access to req, res, and next
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log("Error in asyncWrapper:", error);
            next(error); // pass it to next middleware - eventually passed to default built-in if none
        }
    }
};
// fn is the function in the controller

module.exports = asyncWrapper;

// The default error handler
// Express comes with a built-in error handler that takes care of any errors that might be encountered in the app.
// This default error-handling middleware function is added at the end of the middleware function stack.
// If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler;
// the error will be written to the client with the stack trace. The stack trace is not included in the production environment.

// Writing error handlers
// Define error-handling middleware functions in the same way as other middleware functions,
// except error-handling functions have four arguments instead of three: (err, req, res, next). For example:

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })