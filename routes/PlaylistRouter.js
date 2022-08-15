const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')

Router.get('/', controller.getPlaylist)
Router.get('/:user_id', controller.getPlaylistByUser)
Router.get('/songs/:playlist_id', controller.getSongsFromPlaylist)
Router.post('/:user_id', controller.createPlaylist)
Router.put('/:playlist_id', controller.updatePlaylist)
Router.delete('/:playlist_id', controller.deletePlaylist)
Router.post('/addsong/:playlist_id/:song_id', controller.addSongsToPlaylist)

module.exports = Router
