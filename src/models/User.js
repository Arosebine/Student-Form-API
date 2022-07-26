const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        uppercase: true,
        trim: true,
        minLength: 8,
        maxLength: 20,
      },

      lastName: {
        type: String,
        trim: true,
        minLength: 8,
        maxLength: 20,
        lowercase: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 8,
      max: 16,
    },
    admission_status: {
      type: String,
      enum: ['Not admitted', 'Admitted'],
      default: 'Not admitted',
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    hobbies: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
