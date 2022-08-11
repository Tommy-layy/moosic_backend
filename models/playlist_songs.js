'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Playlist_song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Playlist_song.init(
    {
      playlistId: DataTypes.INTEGER,
      songId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Playlist_song',
      tableName: 'playlist_songs'
    }
  )
  return Playlist_song
}