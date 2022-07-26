const express = require('express');
const {
  signUpUser,
  getStudents,
  getStudentById,
  deleteSingleById,
  updateSingleStudentById,
} = require('../controllers/user.controller');
const router = express.Router();

/* 
    POST http://localhost:8888/auth/signup
*/
router.post('/signup', signUpUser);
router.get('/students', getStudents);
router.get('/student/:id', getStudentById);
router.delete('/student/:id', deleteSingleById);
router.delete('/student/:id', deleteSingleById);
router.put('/student/:id', updateSingleStudentById);

module.exports = router;
