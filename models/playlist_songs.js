'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Playlist_song extends Model {
    static associate(models) {}
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
