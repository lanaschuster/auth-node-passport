const User = require('../../models/user')

module.exports = (req, res) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then((found) => {
      if (!found) {
        return res.status(401).json({
          message: 'Não autorizado'
        })
      }

      found.checkPassword(password, found.password, (error, result) => {
        
        if (!result || error) {
          console.log(error)
          return res.status(401).json({
            message: 'Não autorizado'
          })
        }

        return res.redirect('/')
      })
    }).catch(error => {
      return res.status(500).json({
        message: 'Erro no servidor'
      })
    })
}
