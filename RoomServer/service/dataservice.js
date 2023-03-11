//import db.js

const db = require('./db')


const register = (name, email, password) => {

  return db.User.findOne({ email }).then(  //assynchronous call

    user => {
      if (user) {  //check wheather the user is exist in database or  not
        return {
          status: false,
          statusCode: 401,
          message: 'User already exist'
        }
      }
      else  // if the user is not exist then register the user
      {
        const newUser = new db.User({ //assign the user details to the newUser
          name: name,
          email: email,
          password: password,

        })
        newUser.save() //the save the new user data yo mongo db
        return {
          status: true,
          statusCode: 200,
          message: 'Register successful'
        }
      }
    }

  )

}

const login = (email, password) => {
  return db.User.findOne({ email, password }).then(
    user => {
      if (user) {
        currentuser = user.name
        // currentAcno=acno;
        // const token=jwt.sign({currentAcno:acno},'superkey2023')
        return {
          status: true,
          statusCode: 200,
          message: 'Login Successful',
          // token:token,
          currentuser: user.name,
          // currentAcno:acno
        }
      }
      else {
        return {
          status: false,
          statusCode: 404,
          message: "invalid userdetails"
        }
      }
    }
  )
}

const getRooms = () => {
  return db.Room.find().then(
    (result) => {
      if (result) {
        return {
          status: true,
          statusCode: 200,
          rooms: result
        }
      }
      else {
        return {
          status: true,
          statusCode: 200,
          message: 'Rooms not found'
        }

      }
    }
  )
}
const viewmore = (id) => {
  return db.Room.find({ id }).then(
    (result) => {
      if (result) {
        return {
          status: true,
          statusCode: 200,
          rooms: result
        }
      }
      else {
        return {
          status: false,
          statusCode: 400,
          message: 'Rooms not found'
        }

      }
    }
  )
}

const booking = (id) => {
  return db.Room.find({ id }).then(
    (result) => {
      if (result) {
        return {
          status: true,
          statusCode: 200,
          rooms: result
        }
      }
      else {
        return {
          status: false,
          statusCode: 400,
          message: 'Rooms not found'
        }

      }
    }
  )
}


const addtowishlist = (id, title, location, price, image, description) => {

  return db.Wishlist.findOne({ id }).then(
    (result) => {
      if (result) {
        return {
          status: false,
          statusCode: 401,
          message: 'Room already added..'
        }
      }
      else {
        const newRoom = new db.Wishlist({
          id, title, location, price, image, description
        })
        newRoom.save()
        return {
          status: true,
          statusCode: 200,
          message: 'Room added successfully'
        }
      }
    }
  )
}
// const addtomybooking = (id, title, location, price) => {

//   return db.Mybooking.findOne({ id }).then(
//     (result) => {
//       if (result) {
//         return {
//           status: false,
//           statusCode: 401,
//           message: 'Room already added..'
//         }
//       }
//       else {
//         const newBooking = new db.Mybooking({
//           id, title, location, price, image, description
//         })
//         newBooking.save()
//         return {
//           status: true,
//           statusCode: 200,
//           message: 'Room added successfully'
//         }
//       }
//     }
//   )
// }


//get wishlist products details from db

const getwishlist = () => {
  return db.Wishlist.find().then(
    (result) => {
      if (result) {
        return {
          status: true,
          statusCode: 200,
          rooms: result
        }
      }
      else {
        return {
          status: false,
          statusCode: 402,
          message: 'Wishlist is empty'
        }
      }
      JSON
    }
  )
}

const deletewish = (id) => {
  return db.Wishlist.deleteOne({ id }).then(
    (result) => {
      if (result) {
        return {
          status: true,
          statusCode: 200,
          rooms: result,
          message: "Room removed successfully"
        }
      }
      else {
        return {
          status: false,
          statusCode: 402,
          message: 'Wishlist is empty'
        }
      }

    }
  )
}


//bookingg details
// const bookdetails = (name, email, mobno) => {
//   return db.Booking.findOne({ email }).then(
//     booking => {
//       if (booking) {  //check wheather the user is exist in database or  not
//         return {
//           status: false,
//           statusCode: 401,
//           message: 'User already exist'
//         }
//       }
//       else  // if the user is not exist then register the user
//       {
//         const newBooking = new db.Booking({ //assign the user details to the newUser
//           name,
//           email,
//           mobno
//           // checkin,
//           // checkout

//         })
//         newBooking.save() //the save the new user data yo mongo db
//         return {
//           status: true,
//           statusCode: 200,
//           message: 'Register successful'
//         }
//       }
//     }
//   )

// }

const sample = (id,name, email, mobno,title,checkin,checkout) => {
  return db.Sample.findOne({ id }).then(
    (result) => {
      if (result) {
        return {
          status: false,
          statusCode: 401,
          message: 'Already Booked'
        }
      }
      else{
        const newSample = new db.Sample({
          name,
          email,
          mobno,
          checkin,
          checkout
        })
        newSample.save()
        return {
          status: true,
          statusCode: 200,
          message: 'Booking successful'
        }
      }
    }
  )
}

module.exports = {
  register,
  login,
  getRooms,
  viewmore,
  addtowishlist,
  getwishlist,
  deletewish,
  booking,

  sample,
  // addtomybooking
}