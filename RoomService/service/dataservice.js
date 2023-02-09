//import db.js

const db=require('./db')


const register=(name,email,password)=>{

    return db.User.findOne({email}).then(  //assynchronous call
  
    user=>{ 
      if(user){  //check wheather the user is exist in database or  not
        return{
          status:false,
          statusCode:401,
          message:'User already exist'
        }
      }
      else  // if the user is not exist then register the user
      {
        const newUser=new db.User({ //assign the user details to the newUser
          name:name,
          email:email,
          password:password,
         
        })
        newUser.save() //the save the new user data yo mongo db
        return{
          status:true,
          statusCode:200,
          message:'Register successful'
        }
      }
     }
  
   )
 
}

const login=(email,password)=>{
  return db.User.findOne({email,password}).then(
    user=>{
      if(user){
        // currentuser=user.username
        // currentAcno=acno;
        // const token=jwt.sign({currentAcno:acno},'superkey2023')
        return {
          status:true,
          statusCode:200,
          message:'Login Successful',
          // token:token,
          // currentuser:user.username,
          // currentAcno:acno
        }
      }
      else{
        return{
          status:false,
          statusCode:404,
          message:"invalid userdetails"
        }
      }
    }
  )
  }

  const getRooms=()=>{
    return db.Room.find().then(
      (result)=>{
        if(result){
          return{
            status:true,
            statusCode:200,
            rooms:result
          }
        }
        else{
          return{
            status:true,
            statusCode:200,
            message:'Rooms not found'
          }
  
        }
      }
    )
  }
  
  
module.exports={
    register,
    login,
    getRooms
}