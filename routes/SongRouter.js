const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/song', controller.getSong)

module.exports = Router
