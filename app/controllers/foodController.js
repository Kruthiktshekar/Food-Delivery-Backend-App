//import food model
const Food = require('../model/foodModel')

//import bcyrptjs
const bcrypt = require('bcryptjs')
//import jwt
const jwt = require('jsonwebtoken')

//create an empty object
const foodController = {}

//crud operations
// to create
foodController.create = (req,res) => {
    const data = req.body
    const food = new Food(data)
    food.save()
    .then((food)=>{
        res.json(food)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show all food
foodController.showAll = (req,res) => {
    Food.find()
    .then((food)=>{
        res.json(food)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show particular food
foodController.show = (req,res) => {
    const id = req.params.id
    Food.findById(id)
    .then((food)=>{
        res.json(food)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to update in food
foodController.update = (req,res) => {
    const id = req.params.id
    const data = req.body
    Food.findByIdAndUpdate(id, data, {new:true})
    .then((food)=>{
        res.json(food)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to delete food
foodController.delete = (req,res) => {
    const id = req.params.id
    Food.findByIdAndDelete(id)
    .then((food)=>{
        res.json(food)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//export foodController
module.exports = foodController