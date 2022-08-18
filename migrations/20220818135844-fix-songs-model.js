'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('songs', 'genre', 'album')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('songs', 'album', 'genre')
  }
}
