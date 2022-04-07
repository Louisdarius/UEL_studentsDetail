const Student = require('../models/student');

// Create a student
const addStudent = async (req, res, next) => {
  try {
    const { studentID, firstName, lastName, email, course, year } = req.body;

    // Check if a student with this ID already exists.
    const existingID = await Student.findOne({ studentID });

    // Check if email already taken
    const existingEmail = await Student.findOne({ email });

    if (existingID) {
      throw new Error('Student ID already taken. Try a different one.');
    } else if (existingEmail) {
      throw new Error('Email already taken');
    } else {
      // Create a student
      const student = new Student({
        studentID,
        firstName,
        lastName,
        email,
        course,
        year,
      });

      // Save it to the database
      student.save();

      // Respond back
      res.json(student);
    }
  } catch (e) {
    next(e);
  }
};

const getStudent = async (req, res, next) => {
  try {
    // const student = await Student.findOne(req.params.studentID);
    const student = await Student.findOne({ studentID: req.params.studentID });
    if (!student) {
      throw new Error('A student with this ID does not exist');
    } else {
      console.log(student);
      res.json(student);
    }
  } catch (e) {
    next(e);
  }
};

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.json(students);
    console.log(students);
  } catch (e) {
    next(e);
  }
};

const updateStudent = async (req, res) => {
  const { studentID, firstName, lastName, email, course, year } = req.body;

  const student = await Student.findOne({ studentID: req.params.studentID });

  if (!student) {
    throw new Errror('Cannot find a student with that ID');
  } else {
    student.studentID = studentID;
    student.firstName = firstName;
    student.lastName = lastName;
    student.email = email;
    student.course = course;
    student.year = year;

    console.log(student);

    const updatedStudent = await student.save();
    res.json(updatedStudent);

    console.log(updatedStudent);
  }
};

const deleteStudent = async (req, res) => {
  // Find the student
  const student = await Student.findOne({ studentID: req.params.studentID });

  if (!student) {
    throw new Error('Cannot find a student with this ID');
  } else {
    await student.remove();
    res.json({ message: 'Student successfuly removed' });
  }
};

module.exports = {
  addStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
