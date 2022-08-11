const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUser)
Router.post('/', controller.RegisterUser) //controller.createUser)

module.exports = Router
