const express = require('express');
const { UserLogin, logout ,userData, GetAllUsers,RegisterStudent} = require('../controller/studentController');
const { GetQuizScore,GetQuizById} = require('../controller/quizController');
const { AddStudentScore} = require('../controller/scoreController');

const router = express.Router();

//Auth Route
router.route('/login').post(UserLogin);
router.route('/logout').get(logout);
router.route('/register').post(RegisterStudent);
router.route('/me').get( userData);

//http://localhost:4001/api/v1/login
//Quiz n Score
router.route('/student/QuizScore/:id').get(GetQuizScore);
router.route('/student/Quiz/:id').get( GetQuizById);

//score
router.route('/AddScore').post(AddStudentScore);

module.exports = router