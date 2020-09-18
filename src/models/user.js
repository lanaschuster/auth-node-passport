const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('mongoose-type-email')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

User.methods.encodePassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7))
}

User.methods.checkPassword = (password, hash, callback) => {
  return bcrypt.compare(password, hash, callback)
}

module.exports = mongoose.model('User', User)