const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to the Mongoose database');
  });
};

module.exports = connectDB;
