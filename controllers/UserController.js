const { User, Playlist } = require('../models')
const middleware = require('../middleware')

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getOneUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const user = await User.findByPk(userId, {include: [{model: Playlist}]})
    res.send(user)
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

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let userAlready = await User.findOne({where: { email: email }, raw: true})
    if(userAlready) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
    } else {
      let passwordDigest = await middleware.hashPassword(password)
      const user = await User.create({ email, password: passwordDigest, username })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const CheckLogin = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  LoginUser,
  RegisterUser,
  CheckLogin
}
