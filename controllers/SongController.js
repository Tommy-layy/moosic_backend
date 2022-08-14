const { Song } = require('../models')
const { Op } = require('sequelize')

// const getAllSongs = async (req, res) => {
//   try {
//     const Songs = await Song.findAll()
//     res.send(Songs)
//   } catch (error) {
//     throw error
//   }
// }

const getFilteredSongs = async (req, res) => {
  try {
    let songQuery = req.query
    const getQueriedSongs = async (songQuery) => {
      const songArr = [];
      for (let [key,  value] of Object.entries(songQuery)) {
        let result = await Song.findAll({ where: { [`${key}`]: {[Op.iLike]: `%${value}%` }}, raw: true })
        songArr.push(...result)
      }

      // For each...want to ask about this, because it wouldn't work this way.
      // Object.entries(songQuery).forEach( async ([key, value]) => {
      //   let result = await Song.findAll({ where: { [`${key}`]: {[Op.like]: `%${value}%` }}, raw: true })
      //   console.log(result)
      //   songArr.push(...result)
      // })

      return songArr
    }
    let queriedSongs = await getQueriedSongs(songQuery)
    res.send(queriedSongs)
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
  // getAllSongs,
  getFilteredSongs,
  getOneSong
}
