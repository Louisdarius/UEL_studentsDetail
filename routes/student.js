const Router = require('express').Router();
const studentController = require('../controllers/student');

Router.get('/students', studentController.getStudents);
Router.get('/:studentID', studentController.getStudent);
Router.post('/student', studentController.addStudent);
Router.patch('/:studentID', studentController.updateStudent);
Router.delete('/:studentID', studentController.deleteStudent);

module.exports = Router;
