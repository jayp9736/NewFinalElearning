const catchAsyncError = require("../middleware/catchAsyncError")
const Errorhandler = require("../middleware/errorHandler")
const User = require("../model/user");
const sendToken = require("../utils/jwtToken");



//Login User => /api/v1/login
exports.UserLogin = catchAsyncError ( async (req, res, next)=>{
 
    const {email, password} = req.body;
    
    //Checks if email and password is entered by user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    //finding user in database
    const user = await User.findOne({ email }).select('+password')
   
    if(!user){
        return next(new ErrorHandler('Invalid Email or password', 401))
    }
    
    //checks if password is correct or not
    const isPasswordMatched  = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next(new Errorhandler('Invalid password', 401))
    }
    sendToken(user, 200, res)
})

exports.RegisterStudent = catchAsyncError ( async (req, res, next) => {
    const { name, email, password} = req.body;
    console.log(name+ "            "+ email + " " + password);
    const user= await User.create({
        name, email, password
    })
    console.log("passes" );
    console.log(user);
    sendToken(user, 200, res)
})

//Logout User  => /api/v1/logout
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message:'LogOut'
    })
})

//Get  user name => /api/v1/me
exports.userData = catchAsyncError(async(req, res, next) => {
    
    console.log(req.query);
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user,
        message:'user login'
    })
}) 





