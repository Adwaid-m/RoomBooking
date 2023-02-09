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

module.exports={
        User,
        Room
    }