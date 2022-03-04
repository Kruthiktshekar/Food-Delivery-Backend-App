// import mongoose
const mongoose = require('mongoose')

const configueDb = () => {
    mongoose.connect('mongodb://localhost:27017/foodDeliveryApp')
    .then(()=>{
        console.log('db is connected successfully')
    })
    .catch((err)=>{
        console.log('error occured while connecting db',err)
    })
}

//export configueDb
module.exports = configueDb