const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    studentID: {
      type: String,
      required: [true, 'ID is required'],
      unique: [true, 'A student with this ID already exists'],
    },
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last Name is required'],
    },
    email: {
      type: String,
      required: false,
      unique: [true, 'Email is already taken'],
    },
    course: {
      type: String,
      required: [true, 'You must be enrolled in a course'],
    },
    year: {
      type: Number,
      require: [true, 'Please enter a year'],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
