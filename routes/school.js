const schoolController = require('../controller/school');
const express = require('express');
const router = express.Router();


router.post('/Sign_Up',schoolController.SignUpSchool);
router.post('/login',schoolController.loginUser);


router.get('/schools',schoolController.getAllSchool);
router.get('/:id',schoolController.getSchool);
router.put('/:id',schoolController.updateSchool);
router.delete('/:id',schoolController.deleteSchool);

router.get('/SchoolStudents/:id',schoolController.getstudents);


// router.post('/login',schoolController.loginUser);


exports.router = router;     