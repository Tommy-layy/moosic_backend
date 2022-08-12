const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getAllUser)
Router.get('/:user_id', controller.getOneUser)
Router.post('/', controller.LoginUser)
Router.post('/', controller.RegisterUser) //controller.createUser)

module.exports = Router
