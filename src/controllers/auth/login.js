const express = require('express')
const router = express.Router()

module.exports = (req, res) => {
  return res.render('auth/login')
}
