const User = require('../../models/user')

module.exports = (req, res) => {
  return res.render('users/create', {
    user: new User()
  })
}
