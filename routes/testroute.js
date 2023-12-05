const express = require('express');
const testController = require('../controller/test')
const router = express.Router();



router
                   .get('/',testController.gettest)

exports.routes = router;                   
