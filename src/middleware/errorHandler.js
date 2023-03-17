// Define an error handling middleware function
export const errorHandler = (err, req, res, next) => {
    // Log the error to the console
    console.error(err.stack);

    // Determine the status code and error message to send to the client
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Send the error response to the client
    res.status(statusCode).json({ error: true, message });
};
