const { Song } = require('../models')
const { Op } = require('sequelize')

const getFilteredSongs = async (req, res) => {
  try {
    let songQuery = req.query
    let Songs = await Song.findAll({ raw: true })
    for (let [key, value] of Object.entries(songQuery)) {
      Songs = Songs.filter((song) =>
        song[key].toLowerCase().includes(value.toLowerCase())
      )
      console.log(Songs)
    }
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
const addSong = async (req, res) => {
  try {
    let create = await Song.create(req.body)
    res.send(create)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getFilteredSongs,
  getOneSong,
  addSong
}
