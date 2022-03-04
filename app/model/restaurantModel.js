// import mongoose
const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema

//resturant schema
const restaurantSchema = new Schema({
    name : {
        type : String
    },
    address : {
        type : String
    },
    isOpen : {
        type : Boolean
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

//create model
const Restaurant = mongoose.model('Restaurant',restaurantSchema)

// export restaurantSchema
module.exports = Restaurant