'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate(models) {
      Song.belongsToMany(models.Playlist, {
        as: 'playlists',
        through: models.Playlist_song,
        foreignKey: 'songId'
      })
    }
  }
  Song.init(
    {
      name: DataTypes.STRING,
      time: DataTypes.INTEGER,
      artist: DataTypes.STRING,
      album: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Song',
      tableName: 'songs'
    }
  )
  return Song
}
