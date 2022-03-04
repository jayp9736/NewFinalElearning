const express = require('express');
const { DeleteStudent, UpdateStudent,GetAllStudent} = require('../controller/teacherController');
const { CreateQuiz,GetStudentScoreByQuizId,GetAllQuiz} = require('../controller/quizController');
const router = express.Router();


//Auth Route
router.route('/AllStudent').get(GetAllStudent);
router.route('/removeStudent/:id').delete(DeleteStudent);
router.route('/updateStudent/:id').put(UpdateStudent);


//Quiz
router.route('/StudentScore/:id').get(GetStudentScoreByQuizId);
router.route('/AllQuiz').get(GetAllQuiz);
router.route('/CreateQuiz').post(CreateQuiz);

module.exports = router