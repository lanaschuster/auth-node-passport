const express = require('express')
const router = express.Router()

module.exports = (passport) => {

  router.get('/create', require('./form'))
  router.get('/', require('./list'))
  router.post('/', require('./create'))
  router.delete('/:id', require('./remove'))

  return router
}
