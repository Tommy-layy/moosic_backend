const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/user', controller.getUser)

module.exports = Router
