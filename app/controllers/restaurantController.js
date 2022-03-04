//import restaurantModel
const Restaurant = require('../model/restaurantModel')

//import bcyrptjs
const bcrypt = require('bcryptjs')
//import jwt
const jwt = require('jsonwebtoken')

//create an empty object
const restaurantController = {}

//crud operation
// to create 
restaurantController.create = (req,res) => {
    const data = req.body
    const rest = new Restaurant(data)
    rest.save()
    .then((rest)=>{
        res.json(rest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show all restaurants
restaurantController.showAll = (req,res) => {
    Restaurant.find()
    .then((rest)=>{
        res.json(rest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show particular restaurant
restaurantController.show = (req,res) => {
    const id = req.params.id
    Restaurant.findById(id)
    .then((rest)=>{
        res.json(rest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to update restaurant
restaurantController.update = (req,res) => {
    const id = req.params.id
    const data = req.body
    Restaurant.findByIdAndUpdate(id, data, {new:true})
    .then((rest)=>{
        res.json(rest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to delete restaurant
restaurantController.delete = (req,res) => {
    const id = req.params.id
    Restaurant.findByIdAndDelete(id)
    .then((rest)=>{
        res.json(rest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//export restaurantController
module.exports = restaurantController