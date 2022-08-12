'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Playlist.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Playlist.belongsToMany(models.Song, {
        as: 'playlist',
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
