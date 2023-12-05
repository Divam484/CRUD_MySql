const express = require('express');
const studentController = require('../controller/student');
const router = express.Router();



router
                    .post('/Addstudent',studentController.addStudent)

                    .get('/getstudents',studentController.getStudents)
                    .get('/getstudent/:id',studentController.getstudent)  
                    .put('/getstudent/:id',studentController.updatestudent)    
                    .delete('/getstudent/:id',studentController.deletestudent)

                    .get('/studentmarks/:id',studentController.getstudentmarks)

exports.routes = router;                   
