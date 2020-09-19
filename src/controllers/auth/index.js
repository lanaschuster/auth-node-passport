const express = require('express')
const router = express.Router()

module.exports = (passport) => {
  router.get('/', require('./login'))
  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users',
    failureRedirect: '/auth'
  }))
  router.get('/logout', require('./logout'))

  return router
}
