
//get express  npm install express    
const express = require('express');

require('dotenv').config()

const cors = require('cors');
const server = express();
const schoolRouter = require('./routes/school')
const studentRouter = require('./routes/student')
const markRouter = require('./routes/mark')
const testRouter = require('./routes/testroute')
const jwt = require('jsonwebtoken');


    var corOptions = {
        origin: 'http://localhost:8081' 
    } 

    //Built-in Body parser
    const auth = (req,res,next)=>{
      
        try{
          
          const token =req.get('Authorization').split('Bearer ')[1];
          let decoded = jwt.verify(token,process.env.SECRET);
          if(decoded.email){
            req.body.school_id=decoded.id
            next()
          }
          else{
            res.sendStatus(401);
          }
        }
        catch(err){
          res.sendStatus(401);
        }
       
      };
        server.use(cors(corOptions))
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }))
        server.use(express.static('public'))
        
    //routers 
    server.use('/api/school',schoolRouter.router)
    server.use('/api/student',auth,studentRouter.routes)
    server.use('/api/mark',auth,markRouter.router)
   
    server.use('/api/test',auth,testRouter.routes)
    // SERVER

    const PORT = process.env.PORT || 8080 ;

    server.listen(PORT,()=>{
        console.log(`App running ...........${PORT}`)
    })
 



