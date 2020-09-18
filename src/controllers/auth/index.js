const express = require('express')
const router = express.Router()

module.exports = (passport) => {
  router.get('/', require('./login'))
  router.post('/login', require('./signin'))

  return router
}
