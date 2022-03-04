

const mongoose = require('mongoose');

// Loan Schema
const TeacherQuizSchema = mongoose.Schema({
    QuizTitle:{
        type:String,
        required:true
    },
    Questions:[{
        question:{
            type:String,
            required:[true, 'Please enter question']
        },
        mark:{
            type:Number,
            default:1
        },
        answer:{
            type:String,
            required:[true, 'Please enter your email']
        },
       
        options:[{
            type: String,
            required:true
        }]
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('TeacherQuiz', TeacherQuizSchema);


