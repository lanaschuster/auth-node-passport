const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = (passport) => {
  const authenticateUser = async (username, password, done) => {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return done(null, false, {message: 'Usuário não existe.'})
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        return done(null, user)
      } else {
        return done(null, false, {message: 'Usuário ou Senha incorretos.'})
      }
    })
  }

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, authenticateUser))

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id)
    return done(null, user)
  })
}
