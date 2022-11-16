
const express = require('express')
const userController = require('../controllers/userController')



const router = express.Router()

const webRoutes=(app) =>{
    router.get("/", userController.getUser)
    router.get("/api/allUser", userController.allUser)


    return app.use("/" , router)
}



module.exports = webRoutes