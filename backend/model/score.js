const mongoose = require('mongoose');

// score Schema
const Score = mongoose.Schema({
    totalMarks:{
        type:Number,
    },
    score:{
        type:Number,
    },
    date:{
        type:Date,
        default:Date.now
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    quiz:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'TeacherQuiz',
        required:true
    }
    
})

module.exports = mongoose.model('Score', Score);


