const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const mongoose = require('mongoose')
const session = require('express-session')

// Passport Basic Authentication
// passport.use(require('./src/auth/basic'))
// app.get('*', passport.authenticate('basic', { session: false }))

// Passport Local Authentication
const initLocalAuth = require('./src/auth/local')
initLocalAuth(passport)


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.set('view engine', 'pug')
app.use(session({
  secret: '!jda97w2eyq#kasd#$',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('views', path.join(__dirname, 'src/views'))

require('./src/index')(app, passport)

mongoose.connect('mongodb://localhost:27017/auth', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
mongoose.Promise = global.Promise

app.listen(9000, () => {
  console.log('Server listening on port 9000')
})
