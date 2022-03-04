//import user model
const User = require('../model/userModel')
//import bcyrptjs
const bcrypt = require('bcryptjs')
//import jwt
const jwt = require('jsonwebtoken')

//create an empty object
const userController = {}

//crud operation
// to create
userController.create = (req , res) => {
    const data = req.body
    const user = new User(data)
    bcrypt.genSalt()
    .then((salt)=>{
        bcrypt.hash(data.password,salt)
        .then((encrypt)=>{
            user.password = encrypt
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to login
userController.login = (req,res) => {
    const data = req.body
    User.findOne({email : data.email})
    .then((user)=>{
        if(!user){
            console.log('user not found')
        }
        bcrypt.compare(data.password,user.password)
        .then((verified)=>{
            console.log('rec :', verified)
            const userToken = {
                id : user._id,
                name : user.name,
                food : user.foodId,
                restaurant : user.restaurantId
            }
            const token = jwt.sign(userToken, 'user123', {expiresIn:'2d'})
            res.json({token : `Bearer ${token}`})
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show user
userController.show = (req,res) => {
    const id = req.user.id
    User.findById(id)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to shoe all users
userController.showAll = (req,res) => {
    User.find()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to update user
userController.update = (req,res) => {
    const id = req.user.id
    const data = req.body
    User.findByIdAndUpdate(id, data, {new:true})
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to delete user
userController.delete = (req,res) => {
    const id = req.user.id
    User.findByIdAndDelete(id)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports = userController