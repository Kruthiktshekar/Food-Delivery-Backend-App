// import mongoose
const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema

//foodSchema
const foodSchema =  new Schema ({
    name : {
        type : String
    },
    price : {
        type : String
    },
    restaurantId : {
        type : Schema.Types.ObjectId,
        ref : 'Restaurant'
    },
    isAvaillable : {
        type : Boolean
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

//create model
const Food = mongoose.model('Food',foodSchema)

//export Food
module.exports = Food