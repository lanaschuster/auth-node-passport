const express = require('express')
const router = express.Router()
const isAuthMiddleware = require('../../auth/middleware')

router.get('/', isAuthMiddleware, require('./main'))

module.exports = router
