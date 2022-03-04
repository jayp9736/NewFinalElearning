const catchAsyncError = require("../middleware/catchAsyncError")
// const Errorhandler = require("../middleware/errorHandler")
const Tquiz = require("../model/TeacherQuiz");
const Student = require("../model/user");
const Score = require("../model/score");
const sendToken = require("../utils/jwtToken");


//get quiz by id 
exports.GetStudentScoreByQuizId = catchAsyncError (async (req, res, next) => {

        const score = await Score.find({quiz:req.params.id});
        const list=[];
        for(var s of score){
            const student = await Student.findById(s.student);
            list.push({name: student.name,score:s.score})
        }
        res.status(200).json({
            success:true,
            list
        })
})

//get all quiz
exports.GetAllQuiz = catchAsyncError (async (req, res, next) => {

    const quiz = await Tquiz.find();
    // const score = await Score.find({user: req.user.id});
    res.status(200).json({
        success:true,
        quiz
    })
})

exports.GetQuizById = catchAsyncError (async (req, res, next) => {

    const quiz = await Tquiz.findById(req.params.id);
    // const score = await Score.find({user: req.user.id});
    res.status(200).json({
        success:true,
        quiz
    })
})

//   /api/v1/CreateQuiz   -- Post Data
exports.CreateQuiz = catchAsyncError ( async (req, res, next) => {
    
        // req.body.user = req.user.id
        const quiz = await Tquiz.create(req.body);

        res.status(201).json({
            success:true,
            quiz
        })
})

// for student get all quiz and score
exports.GetQuizScore = catchAsyncError (async (req, res, next) => {
    
    const score = await Score.find({student:req.params.id});
    const list=[];
    for(var s of score){
        const Quiz = await Tquiz.findById(s.quiz);
        list.push({quizTitle: Quiz.QuizTitle,score:s.score,total:s.totalMarks})
    }
    res.status(200).json({
        success:true,
        list
    })
})

