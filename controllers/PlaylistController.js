const { Playlist } = require('../models')

const getPlaylist = async (req, res) => {
  try {
    const allPlaylist = await Playlist.findAll()
    res.send(allPlaylist)
  } catch (error) {
    throw error
  }
}

const createPlaylist = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let playlistBody = {
      userId,
      ...req.body
    }
    let create = await Playlist.create(playlistBody)
    res.send(create)
  } catch (error) {
    throw error
  }
}

const updatePlaylist = async (req, res) => {
  try {
    let playlist_id = parseInt(req.params.playlist_id)
    let newPlaylist = await Playlist.update(req.body, {
      where: {
        id: playlist_id
      },
      returning: true
    })
    res.send(newPlaylist)
  } catch (error) {
    throw error
  }
}

const deletePlaylist = async (req, res) => {
  try {
    let playlistId = parseInt(req.params.playlist_id)
    await Playlist.destroy({
      where: {
        id: playlistId
      }
    })
    res.send({ msg: 'Playlist has been deleted!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist
}
