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
    }
    res.send(Songs)
  } catch (error) {
    throw error
  }
}

const findMatchingSong = async (req, res) => {
  try{
    let songQuery = req.query.name
    let songFound = await Song.findOne({
      where: {name: songQuery},
      raw: true
    })
    if (songFound) {
      res.send(songFound)
    } else {
      res.send({message: 'song not in database'})
    }
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
  findMatchingSong,
  getOneSong,
  addSong
}
