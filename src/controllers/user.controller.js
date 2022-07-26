const User = require('../models/User');
const otpGenerator = require('otp-generator');
// Business Logic
/* 
    SIGNUP USER
    POST REQUEST
*/
exports.signUpUser = async (req, res) => {
  try {
    const {
      name,
      ages,
      admission_status,
      password,
      hobbies,
      email,
      studentId,
    } = req.body;

    const student_id = otpGenerator.generate(9, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const newUser = new User({
      name,
      ages,
      admission_status,
      password,
      hobbies,
      email,
      studentId: student_id,
    });

    const save_user_to_db = await newUser.save();
    return res.status(201).json(save_user_to_db);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

// GET ALL STUDENTS
exports.getStudents = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      register_students_counts: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//GET SINGLE STUDENT BY ID
exports.getStudentById = async (req, res) => {
  try {
    const user = await User.findOne({ studentId: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//DELETE SINGLE STUDENT BY ID
exports.deleteSingleById = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ studentId: req.params.id });
    return res.status(200).json(`DELETED SUCCESSFULLY`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//UPDATE SINGLE USER BY id
exports.updateSingleStudentById = async (req, res) => {
  try {
    const {  age, admission_status } = req.body;
    const user = await User.findOneAndUpdate(
      { studentId: req.params.id },
      { ...req.body },
      {
        new: true,
      }
    );
    return res.status(200).json(user)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};
