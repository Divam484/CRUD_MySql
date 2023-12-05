const express = require('express');
const markController = require('../controller/mark.js');
const router = express.Router();


router
                    .post('/addmarks',markController.addmark)
                    .get('/getmarks',markController.getmarks)
                    .get('/getmark/:id',markController.getmark) 
                    .patch('/updatemark/:id',markController.updatemark)    
                    .delete('/deletemark/:id',markController.deletemarks) 

                    .get('/studentwithmarks/:id',markController.getstudent)


exports.router = router;     