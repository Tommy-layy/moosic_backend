'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    static associate(models) {
      Playlist.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Playlist.belongsToMany(models.Song, {
        as: 'songs',
        through: models.Playlist_song,
        foreignKey: 'playlistId'
      })
    }
  }
  Playlist.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Playlist',
      tableName: 'playlists'
    }
  )
  return Playlist
}
