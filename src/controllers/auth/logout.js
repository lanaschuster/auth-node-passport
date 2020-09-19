module.exports = (req, res) => {
  req.logout()
  req.session.destroy((err) => {
    if(err) return next(err)
  })

  res.redirect('/auth') 
}
