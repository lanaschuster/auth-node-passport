const User = require('../../models/user')

module.exports = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      return res.redirect('/users')
    }).catch(error => {
      console.log(error)
      return
    })
}