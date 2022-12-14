const { Playlist, Song, Playlist_song } = require('../models')

const getPlaylist = async (req, res) => {
  try {
    const allPlaylist = await Playlist.findAll()
    res.send(allPlaylist)
  } catch (error) {
    throw error
  }
}

const getPlaylistByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const userPlaylist = await Playlist.findAll({
      where: {userId: userId},
      include: {model: Song, as: 'songs', through: {attributes: []}}
    })
    res.send(userPlaylist)
  } catch (error) {
    throw error
  }
}

const getSongsFromPlaylist = async (req, res) => {
  let playlistId = parseInt(req.params.playlist_id)
  const songList = await Playlist.findAll({
    where: {id: playlistId},
    include: {model: Song, as: 'songs', through: {attributes: []}}
  })
  res.send(songList)
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
    let newPlaylist = await Playlist.update({title: req.body.title}, {
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

const addSongsToPlaylist = async (req, res) => {
  try {
    let playlistId = parseInt(req.params.playlist_id)
    let songId = parseInt(req.params.song_id)
    let currentPL = await Playlist.findByPk(playlistId, {
      include: {model: Song, as: 'songs', through: {attributes: []}}
    })
    let currentSongs = currentPL.songs
    if (!currentSongs.some(song => song.id === songId)) {
      let playlist_song = {
        playlistId,
        songId 
      }
      const songAssociation = await Playlist_song.create(playlist_song)
      res.send(songAssociation)
    } else {
      res.send({message: 'Song is already in the playlist'})
    }
  } catch (error) {
    throw error
  }
}

const removeSongFromPlaylist = async (req, res) => {
  try {
    let playlistId = parseInt(req.params.playlist_id)
    let songId = parseInt(req.params.song_id)
    let playlist_song = await Playlist_song.findOne({ where: {playlistId: playlistId, songId: songId}})
    if (playlist_song) {
      await Playlist_song.destroy({ where: {playlistId: playlistId, songId: songId}})
      res.send({message: `Song deleted from playlist`})
    } else {
      res.send({message: `Error, song not found/unable to delete.`})
    }
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
  getPlaylistByUser,
  getSongsFromPlaylist,
  createPlaylist,
  updatePlaylist,
  addSongsToPlaylist,
  removeSongFromPlaylist,
  deletePlaylist
}
