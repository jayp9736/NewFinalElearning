const catchAsyncError = require("../middleware/catchAsyncError")
const Errorhandler = require("../middleware/errorHandler")
const Score = require("../model/score");
const sendToken = require("../utils/jwtToken");

exports.AddStudentScore = catchAsyncError ( async (req, res, next) => {
    
    // req.body.user = req.user.id
    const StudentScore = await Score.create(req.body);

    res.status(201).json({
        success:true,
        StudentScore
    })
})