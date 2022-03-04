const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) =>{

    err.statusCode = err.statusCode || 500;
    
    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success:false,
            error:err,
            errMessage:err.message,
            stack:err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION'){
        let error = {...err};
        error.message = err.message;

        // Wrong mongoose object Id Error
        if(err.name === 'CastError'){
            const message = `Resource not found. Invalid Id ${error.path} `;
            error = new ErrorHandler(message , 400);
        }

        //Handling Mongoose validation Error
        if(err.name === 'ValidationError'){
            
            //  const message = Object.values(err.errors).map(value => value.message);
            //  error = new ErrorHandler(message , 400);
            
            const emailId = Object.values(err.errors).map(value =>{ console.log(value.value); return value.value});
            //  console.log(message+" " +err.errors)
             error = new ErrorHandler(` ${emailId} Email Id is already registered` , 400);
        }

        //Handling mongoose duplication key error
        if(err.code === 11000){
            
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`
            error = new ErrorHandler(message , 400);
        }

        //Handling wrong JWT Error
        if(err.name === 'JsonWebTokenError'){

            const message = `JSON web token is invalid. try Again!!`
            error = new ErrorHandler(message , 400);
        }

        //Handling Mongoose validation Error
        if(err.name === 'TokenExpiredError'){
            
            const message = `JSON web token is expired. try Again!!`
            error = new ErrorHandler(message , 400);
        }
      
        res.status(error.statusCode).json({
            success:false,
            message : error.message || 'Server not found'
        })
    }

}