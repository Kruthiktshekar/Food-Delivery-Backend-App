//import jwt
const jwt = require('jsonwebtoken')

//create authMiddleWare
const authMiddleWares = (req,res,next) => {
    const token = req.header('Authorization').split(' ')[1]
    let result
    try {
        result = jwt.verify(token,'user123')
        req.user = result
        next()
    } catch (error) {
        res.json(error)
    }
}

//export authMiddleWares
module.exports = authMiddleWares