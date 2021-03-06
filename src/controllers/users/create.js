const User = require('../../models/user')

module.exports = (req, res) => {
  let user = new User(req.body)
  user.password = user.encodePassword(user.password)

  user.save()
    .then(user => {
      return res.redirect('/')
    }).catch(error => {
      console.log(error)
      return
    })
}
