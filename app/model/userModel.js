// import mongoose
const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema

//userSchema
const userSchema = new Schema ({
    name : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        max : 12,
        min : 8
    },
    foodId : {
        type : Schema.Types.ObjectId,
        ref : 'Food'
    },
    restaurantId : {
        type : Schema.Types.ObjectId,
        ref : 'Restaurant'
    }
})
//create model
const User = mongoose.model('User', userSchema)

//exports User
module.exports = User