const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.getAllUser)
Router.get('/:user_id', controller.getOneUser)
Router.post('/login', controller.LoginUser)
Router.post('/register', controller.RegisterUser) //controller.createUser)
// More to come: change user details (with auth), maybe social functions for stretch goals.
Router.get(
  '/loggedin',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckLogin
)

module.exports = Router
