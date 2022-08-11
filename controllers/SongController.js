const { Song } = require('../models')

const getAllSongs = async (req, res) => {
  try {
    const Songs = await Song.findAll()
    res.send(Songs)
  } catch (error) {
    throw error
  }
}

const getOneSong = async (req, res) => {
  try {
    let songId = parseInt(req.params.song_id)
    const song = await Song.findByPk(songId)
    res.send(song)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSongs,
  getOneSong
}
