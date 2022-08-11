const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')

Router.get('/playlist', controller.getPlaylist)
Router.post('/playlist', controller.createPlaylist)
Router.put('/:playlist_id', controller.updatePlaylist)
Router.delete('/:playlist_id', controller.deletePlaylist)

module.exports = Router
