const { Song } = require('../models')

const getSong = async (req, res) => {
  try {
    const Songs = await Song.findAll()
    res.send(Songs)
  } catch (error) {
    throw error
  }
}

const getAllSongs = async (req, res) => {
  try {
    const allSongs = await Song.findAll()
    res.send(allSongs)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getSong,
  getAllSongs
}
