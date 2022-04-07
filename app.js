require('dotenv').config(); // Local variables
const express = require('express');
const database = require('./dataBase');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/UEL_studentDetails', require('./routes/student'));

app.listen(process.env.PORT, () =>
  console.log(
    `SERVING YOUR UEL STUDENTS DETAILS APP ON PORT ${process.env.PORT}`
  )
);

/*

======================== REQUESTS URL ============================

==================================================================
|    NAME     ||  Methods  ||       URL                           | 
==================================================================|
| Create      || POST      || http://localhost:5005/student       | 
------------------------------------------------------------------|
| Read One    || GET       || http://localhost:5005/:studentID    |
------------------------------------------------------------------|
| Read All    || GET       || http://localhost:5005/students      |
------------------------------------------------------------------|
| Update      || PATCH     || http://localhost:5005/:studentID    |
------------------------------------------------------------------|
| Delete      || DELETE    || http://localhost:5005/:studentID    |
==================================================================


*/
