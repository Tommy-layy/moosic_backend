const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUser)

module.exports = Router
