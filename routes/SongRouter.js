const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getAllSongs)
Router.get('/:song_id', controller.getOneSong)

module.exports = Router
