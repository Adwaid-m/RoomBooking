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

app.get('/viewmore/:id',(req,res)=>{
    dataService.viewmore(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.get('/booking/:id',(req,res)=>{
    dataService.booking(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API call to addtowishlist
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.location,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// //API call to addtomybooking
// app.post('/addtomybooking',(req,res)=>{
//     dataService.addtomybooking(req.body.id,req.body.title,req.body.location,req.body.price).then(
//         result=>{
//             res.status(result.statusCode).json(result)
//         }
//     )
// })
//API call to get wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API call to get delete wishlist
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// app.post('/bookdetails',(req,res)=>{
//     dataService.register(req.body.name,req.body.email,req.body.mobno,req.body.checkin,req.body.checkout).then(
//         result=>{
//             res.status(result.statusCode).json(result)
//         }
//     )
// })

//sample
app.post('/sample',(req,res)=>{
    dataService.sample(req.body.id,req.body.name, req.body.email, req.body.mobno,req.body.checkin,req.body.checkout).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})