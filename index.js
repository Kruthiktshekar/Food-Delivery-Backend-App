// import express
const express = require('express')
const configueDb = require('./configueDb/db')
const app = express()
app.use(express.json())

//import configueDb
configueDb()

//import router
const router = require('./configueDb/routes')
app.use(router)

app.listen(3090,()=>{
    console.log('server started')
})