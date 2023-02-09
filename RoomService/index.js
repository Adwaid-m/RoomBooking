//import express

const express = require('express');

const dataService = require('./service/dataservice')

//import cors
const cors = require('cors')

//create an application using express
const app = express();

//use json parser for server responses
app.use(express.json())

//using cors spesify the orgin
app.use(cors({
    origin:['http://localhost:4200']
}))



//setup a port number
app.listen(3000,()=>{
    console.log('listening on port:3000');
})




//Api calls
//Register request
app.post('/register',(req,res)=>{
    dataService.register(req.body.name,req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//login request
app.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then(
      result=>{
        res.status(result.statusCode).json(result)
      }  
    )
    
})

//get allrooms
app.get('/all-rooms',(req,res)=>{
    dataService.getRooms().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
