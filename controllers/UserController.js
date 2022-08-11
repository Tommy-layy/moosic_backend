const { User } = require('../models')

const getUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createUser = async (req, res) => {
  try {
    let create = await User.create(req.body)
    res.send(create)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUser,
  createUser
}
