const { default:mongoose } = require("mongoose");
const Mongoose = require("mongoose");

// state connection string via mongoose
mongoose.connect('mongodb://127.0.0.1:27017/room',{
   
    useNewUrlParser:true //avoid unwanted warning
})

//create a modele for the rooms
const Room = mongoose.model('Room',{
    //schema creation
    id:Number,
    title:String,
    location:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    imga:String,
    imgb:String,
    imgc:String,
    imgd:String,
    imge:String,
    imgf:String,
    imgg:String,
    imgh:String,
    imgai:String,
    details:String,
    rating:Number
})

const User=mongoose.model('User',{  //model creation (User)
    // a schema is to be created

    name:String,
    email:String,
    password:String,
   
})

//create wishlist new collection in mongodb - create a model
const Wishlist=mongoose.model('wishlist',{
    id:Number,
    title:String,
    location:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    
    rating:Number
})
// const Mybooking=mongoose.model('mybooking',{
//     id:Number,
//     title:String,
//     location:String,
//     price:Number
// })


// const Booking=mongoose.model('bookings',{  
//     // a schema is to be created

//     name:String,
//     email:String,
//     mobno:Number
//     // checkin:Date,
//     // checkout:Date
   
// })

const Sample = mongoose.model('samples', {
    name:String,
    email:String,
    mobno:Number,
    title:String,
    checkin:String,
    checkout:String
})

module.exports={
        User,
        Room,
        Wishlist,

        Sample
        // Mybooking
        
    }