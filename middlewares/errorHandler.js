const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong on the server';
    
    res.status(status).json({
      success: false,
      error: message
    });
  };
  
  module.exports = errorHandler;