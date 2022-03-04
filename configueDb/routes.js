const express = require('express')
const router = express.Router()

//import authMiddleWares
const authMiddleWares = require('../app/middlewares/authMiddlewares')

//import userController
const userController = require('../app/controllers/userController')

// userRoutes
router.get('/users',authMiddleWares,userController.showAll)
router.get('/showUser',authMiddleWares,userController.show)
router.post('/createUser',userController.create)
router.post('/userLogin',userController.login)
router.put('/updateUser',authMiddleWares,userController.update)
router.delete('/deleteUser',authMiddleWares,userController.delete)

//import restaurantController
const restaurantController = require('../app/controllers/restaurantController')

//restaurant routes
router.get('/restaurants',authMiddleWares,restaurantController.showAll)
router.get('/showRestaurant/:id',authMiddleWares,restaurantController.show)
router.post('/createRestaurant',restaurantController.create)
router.put('/updateRestaurant/:id',authMiddleWares,restaurantController.update)
router.delete('/deleteRestaurant/:id',authMiddleWares,restaurantController.delete)

//import foodControllers
const foodController = require('../app/controllers/foodController')

//food routes
router.get('/foods',authMiddleWares,foodController.showAll)
router.get('/showFood/:id',authMiddleWares,foodController.show)
router.post('/createFood',foodController.create)
router.put('/updateFood/:id',authMiddleWares,foodController.update)
router.delete('/deleteFood/:id',authMiddleWares,foodController.delete)

//export router
module.exports = router