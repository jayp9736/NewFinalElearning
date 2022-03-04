const catchAsyncError = require("../middleware/catchAsyncError")
const Errorhandler = require("../middleware/errorHandler")
const User = require("../model/user");
const Score = require("../model/score");
const Quiz = require("../model/TeacherQuiz");
const sendToken = require("../utils/jwtToken");


//get ALL student
exports.GetAllStudent = catchAsyncError (async (req, res, next) => {

    const student = await User.find({role:"student"});
    // const score = await Score.find({user: req.user.id});
    res.status(200).json({
        success:true,
        student
    })
})



exports.UpdateStudent = catchAsyncError ( async (req,res,next)=>{
    console.log(req.params.id);
    let student = await User.findById(req.params.id);
  
    if(!student){
        return next(new Errorhandler('Data not found', 404))
    }
    
    student = await User.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators : true,
        useFindAndModify : false
    })
    console.log(student);
    res.status(200).json({
        success:true,
        student
    })
})

exports.DeleteStudent = catchAsyncError( async (req, res, next)=>{
    console.log("id" +req.params.id)
    let student = await User.findById(req.params.id);
    if(!student)
    {
        return next(new Errorhandler('Student not found', 404));
    }
    await student.remove();
    return res.status(200).json({
        success:true,
        message:'Data Deleted'
    })
})