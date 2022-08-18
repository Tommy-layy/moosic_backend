const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getFilteredSongs)
Router.get('/:song_id', controller.getOneSong)
Router.post('/', controller.addSong)

module.exports = Router
