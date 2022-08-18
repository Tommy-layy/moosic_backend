'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('songs', 'title', 'name')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('songs', 'name', 'title')
  }
}
