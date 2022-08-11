const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getSong)

module.exports = Router
